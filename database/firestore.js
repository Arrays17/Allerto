import Firestore from '@react-native-firebase/firestore'

export const trackingDB = Firestore().collection('trackingDB')

export const usersDB = Firestore().collection('users')

export default Firestore