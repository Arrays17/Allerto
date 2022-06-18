import React, { useState } from 'react'
import { PermissionsAndroid } from 'react-native'
import Contacts from 'react-native-contacts'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const requestContactsPermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
            {
                title: "Allerto App Contacts Permission",
                message: "Allerto tracking feature needs to access your contacts for you to select your recipient.",
                buttonNeutral: "Ask me later",
                buttonNegative: "Deny",
                buttonPositive: "OK"
            }
        )

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("Contacts Permission Granted")
        } else {
            console.log("Contacts Permission Denied")
        }

        return granted
    } catch (error) {
        console.warn(error)
    }
}

export const getContactsList = async () => {
    try {
        let contactsList = []
        const List = await Contacts.getAll()
        for (let contact of List) {
            if (contact.phoneNumbers.length > 0)
            contactsList.push(contact)
        }
        return contactsList
    } catch (error) {
        console.warn(error)
    }
}

export const saveTrackingDetails = async (details) => {
    const detailsString = JSON.stringify(details)
    await AsyncStorage.setItem('recipient', detailsString)
}

export const getTrackingDetails = async () => {
    const details = await AsyncStorage.getItem('recipient')

    if (!details) return null

    const parsedDetails = JSON.parse(details)

    return parsedDetails
}