import * as Location from 'expo-location'
import * as TaskManager from 'expo-task-manager'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Linking } from 'react-native';
import { updateUserLastKnownLocation } from '../database/firestore';
import { updateUserLocalData } from '../utils/asyncStorageController';

const API_KEY = process.env.GOOGLE_API_KEY
const LOCATION_TASK_NAME = 'background-location-tracking'
const smsController = require('../apis/sms')
const TrackerController = require('../controllers/trackerController')

TaskManager.defineTask(LOCATION_TASK_NAME, async ({data: {locations}, error}) => {
    if (error) {
        console.warn('Location Task Error:', error.message)
        return
    }

    const [location] = locations
    const user = await JSON.parse(await AsyncStorage.getItem('user'))

    await createAndUpdateLastKnownLocation(location)
        .catch((err)=> {console.log('Error on Creating and Updating User\'s Last Known Location:', err)})

    if (location) {
        const {phoneNumber: sender} = user
        const {recipient, trackingID} = await TrackerController.getTrackingDetails()
        const trackingData = {
            location: {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude
            },
            recipient: recipient
        }

        await smsController.sendMessage(sender, recipient.number, location.coords)
            .catch((err)=> {console.warn(err);})

        await TrackerController.saveToDatabase(user.uid, trackingID, trackingData)
            .then(()=>{console.log("Tracking Data Uploaded to Database")})
            .catch((err)=> {console.warn(err);})
    }
})

let locationAccess
let locationEnabled
let locationData
let locationAddress

;(async () => {
    if (locationEnabled == null && locationAccess === 'granted') {
        await checkServices()
    }

    if (locationData == null && locationEnabled) {
        await setupLocation()
    }

})()

export const startTracking = async () => {

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
    Location.setGoogleApiKey(API_KEY)
    let {coords} = await Location.getCurrentPositionAsync({accuracy: 5})
    let {latitude, longitude} = coords

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

export const createAndUpdateLastKnownLocation = async (location) => {
    await setupAddress()
    const address = locationAddress.complete
    const user = await JSON.parse(await AsyncStorage.getItem('user'))
    const {latitude, longitude} = location || location.coords

    const locationData = {
        latitude: latitude,
        longitude: longitude,
        address: address
    }

    const newLocalUserData = {
        ...user,
        lastKnownLocation: locationData
    }

    await updateUserLastKnownLocation(user.uid, locationData)
    await updateUserLocalData(newLocalUserData)
}

export {
    locationAccess,
    locationEnabled,
    locationData,
    locationAddress,
    Location
}
