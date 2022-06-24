import * as Location from 'expo-location'
import * as TaskManager from 'expo-task-manager'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Linking } from 'react-native';

const API_KEY = process.env.GOOGLE_API_KEY
const LOCATION_TASK_NAME = 'background-location-tracking'
const smsController = require('../apis/sms')
const TrackerController = require('../controllers/trackerController')

TaskManager.defineTask(LOCATION_TASK_NAME, ({data, error}) => {
    if (error) {
        console.warn('Location Task Error:', error.message)
        return
    }

    ;(async () => {
        if (data) {
            const user = await AsyncStorage.getItem('user')
            const parsedUser = JSON.parse(user)
            const {phoneNumber: sender} = parsedUser
            const {recipient, trackingID} = await TrackerController.getTrackingDetails()
            const trackingData = {
                location: {
                    latitude: data.locations[0].coords.latitude,
                    longitude: data.locations[0].coords.longitude
                },
                recipient: recipient
            }

            console.log("Sending SMS");
            await smsController.sendMessage(sender, recipient.number, data.locations[0].coords)
                .then(()=>{console.log("SMS Sent Successfully");})
                .catch((err)=> {console.warn(err);})

            await TrackerController.saveToDatabase(parsedUser.uid, trackingID, trackingData)
                .then(()=>{console.log("Database Updated Successfully");})
                .catch((err)=> {console.warn(err);})
        }
    })()
})

let locationAccess
let locationEnabled
let locationData
let locationAddress

;(async () => {
    if (locationEnabled === null && locationAccess === 'granted') {
        await checkServices()
    }

    if (locationData === null && locationEnabled) {
        console.log('500')
        await setupLocation()
    }

})()

export const startTracking = async () => {
    const Tasks = await TaskManager.getRegisteredTasksAsync()
    console.log(Tasks)
    if (await TaskManager.isTaskRegisteredAsync(LOCATION_TASK_NAME)) {
        await TaskManager.unregisterTaskAsync(LOCATION_TASK_NAME)
    }

    await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
        foregroundService: {
            notificationTitle: "Tracking In Progress",
            notificationBody: "Location tracking is currently running in background",
            notificationColor: "#50FA8200"
        },
        accuracy: Location.Accuracy.Highest,
        timeInterval: 60000,
        distanceInterval: 100
    })
}

export const stopTracking = async () => {
    await Location.stopLocationUpdatesAsync(LOCATION_TASK_NAME)
}

export const setGoogleAPI = () => {
    Location.setGoogleApiKey(API_KEY)
}

export const checkLocationServices = async () => {
    let enabled = await Location.hasServicesEnabledAsync()
    locationEnabled = enabled
}

export const setupLocation = async () => {
    let location = await Location.getCurrentPositionAsync({accuracy: 4})
    let {coords} = location
    locationData = coords
}

export const openSettings = () => {
    Linking.openSettings()
}

export const requestForegroundPermissions = async () => {
    const getForeground = await Location.getForegroundPermissionsAsync()
    if (getForeground.status === 'granted') {
        locationAccess = getForeground.status
        return
    }

    const {status} = await Location.requestForegroundPermissionsAsync()
    locationAccess = status
}

export const setupAddress = async () => {
    console.log(API_KEY);
     Location.setGoogleApiKey(API_KEY)
    let {coords} = await Location.getCurrentPositionAsync({accuracy: 5})
    let {latitude, longitude} = coords

    console.log({latitude,longitude});

    let place = await Location.reverseGeocodeAsync({latitude,longitude}).catch((error)=> console.warn('Error with Reverse Geocoding', error))

    if (!place) return

    if (place[0]) {
        let complete = (place[0].name != null ? place[0].name : '') + ' ' + (place[0].street != null ? place[0].street : '') + 
            (place[0].street != null ? ' street' : '') + ', ' + (place[0].city != null ? place[0].city : '') + 
            (place[0].city != null ? ' City,' : '') + ' ' + (place[0].region != null ? place[0].region : '') + ', ' +
            (place[0].country != null ? place[0].country : '')
        let address = {...place[0], complete: complete}
        locationAddress = address
    }
}

export const getLocation = async () => {
    let location = await Location.getCurrentPositionAsync({accuracy: 4}).catch(()=> {})
    return location
}

export const requestBackgroundPermissions = async () => {
    let {status} = await Location.requestBackgroundPermissionsAsync()
    return status
}

export {
    locationAccess,
    locationEnabled,
    locationData,
    locationAddress,
    Location
}
