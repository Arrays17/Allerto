import * as Location from 'expo-location'
import { Linking } from 'react-native';

const API_KEY = process.env.GOOGLE_API_KEY



let locationAccess = null;
let locationEnabled = null;
let locationData = null;

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

export const checkServices = async () => {
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
    let {status} = await Location.getForegroundPermissionsAsync()
    locationAccess = status
    return status
}

export const getAddress = async () => {
    let {coords} = await Location.getCurrentPositionAsync({accuracy: 4})
    let {latitude, longitude} = coords

    let place = await Location.reverseGeocodeAsync({latitude,longitude})

    if (place[0]) {
        let complete = place[0].name + ' ' + place[0].street + ', ' + place[0].city + ' City, ' + place[0].region
        let address = {...place[0], complete: complete}
        return address
    }
}

export const getLocation = async () => {
    let location = await Location.getCurrentPositionAsync({accuracy: 4})
    return location
}

export const requestPermissions = async () => {
    let {status} = await Location.requestBackgroundPermissionsAsync()
    return status
}

export {
    locationAccess,
    locationEnabled,
    locationData
}
