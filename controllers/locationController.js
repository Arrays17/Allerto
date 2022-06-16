import * as Location from 'expo-location'
import { Linking } from 'react-native';

const API_KEY = process.env.GOOGLE_API_KEY

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
    let {coords} = await Location.getCurrentPositionAsync({accuracy: 4})
    let {latitude, longitude} = coords

    let place = await Location.reverseGeocodeAsync({latitude,longitude}).catch(()=> console.warn('Error with Reverse Geocoding'))

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
    locationAddress
}
