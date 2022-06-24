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

export async function handleLocation(key, location) {
    const previousLocationKey = 'previous_' + key + '_'
    const oldLocationKey = 'previous_' + key + '_'

    const prevLocation = await StorageController.getPreviousLocation(previousLocationKey)
    console.log('Current Location: ', location)
    console.log('Previous Location: ', prevLocation)

    if (prevLocation === null) {
        StorageController.saveLocation(previousLocationKey, location) // No Location Saved Yet, Save Current Location
        return false
    }

    var distanceFromPrevLocation = parseFloat(getDistanceUsingLatLng(prevLocation.latitude, prevLocation.longitude, location.latitude, location.longitude).kilometers)
    console.log('Distance from Prev Loc: ', distanceFromPrevLocation)

    if (distanceFromPrevLocation >= 1) { // If location difference is greater than 1KM, return false -- fetch from Google API
        StorageController.saveLocation(previousLocationKey, location)
        return false
    }
        
    const oldLocation = await StorageController.getPreviousLocation(oldLocationKey)
    console.log('Old Location: ', oldLocation)

    if (oldLocation == null) {
        StorageController.saveLocation(previousLocationKey, location)
        StorageController.saveLocation(oldLocationKey, prevLocation)
        return true
    }
    
    var distanceFromOldLocation = parseFloat(getDistanceUsingLatLng(oldLocation.latitude, oldLocation.longitude, location.latitude, location.longitude).kilometers)
    console.log('Distance from Old Loc: ', distanceFromOldLocation)

    if (distanceFromOldLocation + distanceFromPrevLocation >= 1) { // If location difference is greater than 1KM, return false -- fetch from Google API
        StorageController.saveLocation(previousLocationKey, location)
        StorageController.saveLocation(oldLocationKey, prevLocation)
        return false
    }

    StorageController.saveLocation(previousLocationKey, location)
    return true

}

export async function getEmergencyList(location, keyword) {
    let emergencyList = []
    const storeKey = keyword + "_emergencyList"
    const List = await StorageController.getPreviousEmergencyList(storeKey)
    
    // TODO
    // Get Data from Own Database First
    // then Push to Emergency List Array

    const isSameLocation = await handleLocation(keyword, location)

    if (isSameLocation && JSON.stringify(List) != '[]' && List !== null) {
        console.log('Saved Data used')
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

    await saveEmergencyList(keyword, emergencyList)

    return emergencyList
}