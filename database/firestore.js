import Firestore from '@react-native-firebase/firestore'

export default Firestore

export const trackingDB = Firestore().collection('trackingDB')

export const usersDB = Firestore().collection('users')

export const alertsDB = Firestore().collection('alerts').doc('general')

// Functions

export const updateUserLastKnownLocation = async (uid, locationData) => {
    await usersDB.doc(uid).update({
        lastKnownLocation: {
            location: new Firestore.GeoPoint(locationData.latitude, locationData.longitude),
            address: locationData.address
        }
    })
    .then(()=> {
        console.log("User Last Known Location Updated...");
    })
    .catch((error) => {
        console.warn('Error on Updating DB of User\'s Last Known Location:', error);
    })
}