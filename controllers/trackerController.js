import React, { useState } from 'react'
import { PermissionsAndroid } from 'react-native'
import Contacts from 'react-native-contacts'

export const requestContactsPermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
            {
                title: "Allerto App Contacts Permission",
                message: "Allerto tracking feature needs to access your contacts for you to select your recipient.",
                buttonNeutral: "Ask me later",
                buttonNegative: "Cancel",
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
        const List = await Contacts.getAll()
        return List
    } catch (error) {
        console.warn(error)
    }
}