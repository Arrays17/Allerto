import React from 'react'

const StorageController = require('../utils/asyncStorageController')

export async function getFavorites(key) {
    return await StorageController.getFavorites(key)
}

export async function favoritesContains(key, data) {
    const favoritesList = await StorageController.getFavorites(key)
    if (favoritesList == null) return false

    let match = 0

    favoritesList.forEach(item => {
        if (item.name == data.name) match++
    })

    if (match) return true
    return false
}

export async function addToFavorites(key, data) {
    let favoritesList = await StorageController.getFavorites(key)
    if (favoritesList === null) {
        let newFavoritesList = []
        newFavoritesList.push(data)
        await StorageController.updateFavorites(key, newFavoritesList)
        .then(() => {
            console.log(data.name + " successfully added to Favorites List")
        })
        return
    }

    favoritesList.push(data)
    await StorageController.updateFavorites(key, favoritesList)
        .then(() => {
            console.log(data.name + " successfully added to Favorites List")
        })
}

export async function removeFromFavorites(key, data) {
    let favoritesList = await StorageController.getFavorites(key)
    const index = favoritesList.findIndex(item => item.name === data.name)

    favoritesList.splice(index, 1)

    await StorageController.updateFavorites(key, favoritesList)
        .then(() => {
            console.log(data.name + " successfully removed from Favorites List")
        })
}