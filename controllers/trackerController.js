import { PermissionsAndroid } from 'react-native'
import Contacts from 'react-native-contacts'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Firestore, { trackingDB } from '../database/firestore'

export const requestContactsPermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
            {
                title: "Allerto App Contacts Permission",
                message: "Allerto Location Tracking needs to access your contacts for you to select your recipient.",
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
    await AsyncStorage.setItem('trackingDetails', detailsString)
}

export const getTrackingDetails = async () => {
    const details = await AsyncStorage.getItem('trackingDetails')

    if (!details) return null

    const parsedDetails = JSON.parse(details)

    return parsedDetails
}

export const saveToDatabase = async (uid, trackingID, data) => {
    const docExists = (await trackingDB.doc(uid).get()).exists

    if (!docExists) {
        await trackingDB
            .doc(uid)
            .set({
                updatedAt: Firestore.FieldValue.serverTimestamp()
            })
    }

    trackingDB
        .doc(uid)
        .collection(trackingID)
        .add({
            location: new Firestore.GeoPoint(data.location.latitude, data.location.longitude),
            recipient: data.recipient,
            createdAt: Firestore.FieldValue.serverTimestamp()
        })
        .then(() => {
            trackingDB
                .doc(uid)
                .update({
                    updatedAt: Firestore.FieldValue.serverTimestamp()
                })
        })
}

export const handleTrackingLimit = async (uid, limitInDays) => {
    let result

    const trackingDocRef = trackingDB.doc(uid)
    const doc = await trackingDocRef.get()

    if (!doc.exists) return result = {isAtLimit: false}
 
    await trackingDB.doc(uid).update({
        dateNow: Firestore.FieldValue.serverTimestamp()
    })
    const trackingDoc = await trackingDB.doc(uid).get()
    const timestampNow = trackingDoc.get('dateNow')
    const timestampLast = trackingDoc.get('updatedAt')

    if (!timestampLast) return result = {isAtLimit: false}

    var timeDifference = timestampNow.seconds - timestampLast.seconds
    console.log('Time Difference', timeDifference)
    var timeLimit = 60 * 60 * 24 * limitInDays
    console.log('Time Limit', timeLimit)

    if (timeDifference >= timeLimit) return result = {isAtLimit: false}

    var remainingTime = timeLimit - timeDifference
    console.log('Remaining Time in Seconds', remainingTime)

    var hoursRemaining = Math.floor(remainingTime/3600).toFixed(0)
    var minutesRemaining = (((remainingTime/3600) - Math.floor(remainingTime/3600)) * 60).toFixed(0)

    const timeRemaining = {
        hours: hoursRemaining,
        minutes: minutesRemaining
    }

    return result = {
        isAtLimit: true,
        timeRemaining: timeRemaining
    }
}