import Firestore, { alertsDB, usersDB } from "../database/firestore";
import { setupLocation, locationData, createAndUpdateLastKnownLocation } from "./locationController";
import PushNotification from 'react-native-push-notification';
import getDistanceUsingLatLng from "../utils/getDistanceUsingLatLng";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as TaskManager from 'expo-task-manager'
import * as BackgroundFetch from 'expo-background-fetch';

const BACKGROUND_FETCH_TASK = 'background-fetch-alerts';

TaskManager.defineTask(BACKGROUND_FETCH_TASK, async () => {
    const now = Date.now();
    console.log(`Got background fetch call at date: ${new Date(now).toISOString()}`);

    const userLocalRef = await JSON.parse(await AsyncStorage.getItem('user'))

    const userDBRef = (await usersDB.doc(userLocalRef.uid).get()).data()

    await checkPhivolcsDB(userDBRef || userLocalRef)
        .then(()=> {console.log(`PHIVOLCS Alerts Database Checked at: ${new Date(now).toISOString()}`);})
        .catch((err)=>{console.warn(err);})

    await checkPagasaDB(userDBRef || userLocalRef)
        .then(()=> {console.log(`PAGASA Alerts Database Checked at: ${new Date(now).toISOString()}`);})
        .catch((err)=>{console.warn(err);})
  
    return BackgroundFetch.BackgroundFetchResult.NewData;
  });

export const registerBackgroundFetchAsync = async () => {
    return BackgroundFetch.registerTaskAsync(BACKGROUND_FETCH_TASK, {
      minimumInterval: 60 * 12, // 12 minutes
      stopOnTerminate: false, // android only,
      startOnBoot: true, // android only
    });
}

export const unregisterBackgroundFetchAsync = async () => {
    return BackgroundFetch.unregisterTaskAsync(BACKGROUND_FETCH_TASK);
}

export const checkStatusAsync = async () => {
    const status = await BackgroundFetch.getStatusAsync();
    const isRegistered = await TaskManager.isTaskRegisteredAsync(BACKGROUND_FETCH_TASK);

    console.log(status, isRegistered);

    return {
        status,
        isRegistered
    }
}

const checkPhivolcsDB = async (userRef) => {
    let user = userRef
   try {
        if (!userRef.lastKnownLocation) {
            await setupLocation()
            const location = locationData
            const lastKnownLocation = await createAndUpdateLastKnownLocation(location)
            user = { ...user, lastKnownLocation: lastKnownLocation }
        }

        let userLocation

        if (JSON.stringify(userRef.lastKnownLocation.location) != 'undefined') {
            userLocation = {
                latitude: user.lastKnownLocation.location.latitude,
                longitude: user.lastKnownLocation.location.longitude,
            }
        } else {
            userLocation = {
                latitude: user.lastKnownLocation.latitude,
                longitude: user.lastKnownLocation.longitude,
            }
        }

        const earthquakesDB = alertsDB.collection('earthquakes')
        const earthquakeDocs = (await earthquakesDB.orderBy('dateTime', 'desc').limit(10).get()).docs

        for (let doc of earthquakeDocs) {
            const earthquakeID = doc.id
            const earthquakeData = doc.data()
            const earthquakeMagnitude = parseFloat(doc.get('magnitude'))
            const earthquakeLocation = doc.get('location')
            const distanceBetUserAndEarthquake = getDistanceUsingLatLng(userLocation.latitude, userLocation.longitude, earthquakeLocation.latitude, earthquakeLocation.longitude)
            const distanceKM = parseFloat(distanceBetUserAndEarthquake.kilometers)
            console.log(distanceKM);

            let range
            if (earthquakeMagnitude < 4.5) {
                range = 80
            } else if (earthquakeMagnitude < 5.5) {
                range = 450
            } else if (earthquakeMagnitude < 6.5) {
                range = 1000
            } else {
                return handleEarthquakeNotification(earthquakeData, earthquakeID)
            }

            if (distanceKM < range) {
                handleEarthquakeNotification(earthquakeData, earthquakeID)
            }

        }
   } catch (error) {
        console.warn('Error on Checking Earthquake Updates:', error);
   }
}

const checkPagasaDB = async (DB) => {
    
}

const handleEarthquakeNotification = async (data, ID) => {
    let earthquakeAlerts = []
    let savedEarthquakeAlerts = await AsyncStorage.getItem('earthquakeAlerts')

    const earthquakeAlert = {
        id: ID,
        ...data
    }

    if (!savedEarthquakeAlerts) {

        PushNotification.localNotification({
            channelId: 'allerto-alerts-notification-channel-42069',
            title: 'Allerto: Disaster Alerts',
            message: `Eathquake Alert! A magnitude ${data.magnitude} earthquake was recorded near you.\n` + 
                        `It is ${data.nearbyArea}`,
            largeIconUrl: '../assets/icon.png',
        })

        earthquakeAlerts.push(earthquakeAlert)
        return await AsyncStorage.setItem('earthquakeAlerts', JSON.stringify(earthquakeAlerts))
    }

    savedEarthquakeAlerts = JSON.parse(savedEarthquakeAlerts)

    let doesExist = false
    for (var alert of savedEarthquakeAlerts) {
        if (alert.id == ID) {
            doesExist = true 
            return
        }
    }

    console.log(ID, doesExist)

    if (doesExist) return

    PushNotification.localNotification({
        channelId: 'allerto-alerts-notification-channel-42069',
        title: 'Allerto: Disaster Alerts',
        message: `Eathquake Alert! A magnitude ${data.magnitude} earthquake was recorded near you.\n` + 
                    `It is ${data.nearbyArea}`,
        largeIconUrl: '../assets/icon.png',
    })

    earthquakeAlerts.push(...savedEarthquakeAlerts)
    earthquakeAlerts.push(earthquakeAlert)

    return await AsyncStorage.setItem('earthquakeAlerts', JSON.stringify(earthquakeAlerts))
}