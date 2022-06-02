import React from 'react'
import getDistanceUsingLatLng from '../utils/getDistanceUsingLatLng'
import fetchPlaces from '../apis/fetchPlaces'

const StorageController = require('../utils/asyncStorageController')

export async function saveEmergencyList(key, data) {
    const storeKey = key + "_emergencyList"
    await StorageController.saveEmergencyList(storeKey, data)
    .then(() => {
        console.log("Emergency List for " + storeKey + " saved successfully")
    })
}

export async function handleLocation(location) {
    const prevLocation = await StorageController.getPreviousLocation('previous')

    if (prevLocation === null) {
        await StorageController.saveLocation('previous', location) // No Location Saved Yet, Save Current Location
        return false
    }

    var distanceFromPrevLocation = parseFloat(getDistanceUsingLatLng(prevLocation.latitude, prevLocation.longitude, location.latitude, location.latitude).kilometers)

    if (distanceFromPrevLocation >= 1) { // If location difference is greater than 1KM, return false -- fetch from Google API
        await StorageController.saveLocation('previous', location)
        return false
    }
        
    const oldLocation = await StorageController.getPreviousLocation('old')

    if (oldLocation == null) {
        await StorageController.saveLocation('previous', location)
        await StorageController.saveLocation('old', prevLocation)
        return true
    }
    
    var distanceFromOldLocation = parseFloat(getDistanceUsingLatLng(oldLocation.latitude, oldLocation.longitude, location.latitude, location.latitude).kilometers)

    if (distanceFromOldLocation + distanceFromPrevLocation >= 1) { // If location difference is greater than 1KM, return false -- fetch from Google API
        await StorageController.saveLocation('previous', location)
        await StorageController.saveLocation('old', prevLocation)
        return false
    }

    await StorageController.saveLocation('previous', location)
    return true

}

export async function getEmergencyList(location, keyword) {
    let emergencyList = []
    const storeKey = keyword + "_emergencyList"

    // To ADD
    // Get Data from Own Database First
    // then Push to Emergency List Array

    const isSameLocation = await handleLocation(location)

    if (isSameLocation) {
        console.log('Saved Data used')
        const List = await StorageController.getPreviousEmergencyList(storeKey)
        List.forEach(item => {
            emergencyList.push(item)
        })

        return emergencyList
    }

    console.log('Google API used')
    const GooglePlaces = await fetchPlaces(location, keyword)
    GooglePlaces.forEach(place => {
        emergencyList.push(place)
    })

    return emergencyList
}