import AsyncStorage from '@react-native-async-storage/async-storage'

// Emergency Module

export async function saveLocation(key, location) {
    const storeKey = key + "Location"
    const locationString = JSON.stringify(location)
    await AsyncStorage.setItem(storeKey, locationString)
    .then(() => {
        console.log(storeKey + " updated...")
    })
}

export async function getPreviousLocation(key) {
    const storeKey = key + 'Location'
    const previousLocation = await AsyncStorage.getItem(storeKey)
    if (!previousLocation) return null

    return JSON.parse(previousLocation)
}

export async function saveEmergencyList(key, data) {
    const emergencyListString = JSON.stringify(data)
    await AsyncStorage.setItem(key, emergencyListString)
}

export async function getPreviousEmergencyList(key) {
    const previousEmergencyList = await AsyncStorage.getItem(key)
    if (!previousEmergencyList) return null

    return JSON.parse(previousEmergencyList)
}

export async function getFavorites(key) {
    const favorites = await AsyncStorage.getItem(key)
    if (!favorites) return null

    const parsedFavorites = JSON.parse(favorites)

    let favoritesList = []

    parsedFavorites.forEach((favorite) => {
        favoritesList.push(favorite)
    });

    return favoritesList
}

export async function updateFavorites(key, data) {
    const favoritesString = JSON.stringify(data)
    await AsyncStorage.setItem(key, favoritesString)
}

export async function updateUserLocalData(data) {
    const userString = JSON.stringify(data)
    await AsyncStorage.setItem('user', userString)
        .then(()=> {
            console.log(`User Local Data Updated...`);
        })
        .catch((err)=> {
            console.warn('Error on Updating User\'s Local Data:', err);
        })
}