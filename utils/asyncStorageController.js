import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

// Emergency Module

export async function saveLocation(location) {
    const locationString = JSON.stringify(location)
    await AsyncStorage.setItem('previousLocation', locationString)
}

export async function getPreviousLocation() {
    const previousLocation = await AsyncStorage.getItem('previousLocation')
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