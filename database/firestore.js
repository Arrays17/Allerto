import Firestore from '@react-native-firebase/firestore'

export const trackingDB = Firestore().collection('trackingDB')

export const usersDB = Firestore().collection('users')

export const alertsDB = Firestore().collection('alerts')

export default Firestore