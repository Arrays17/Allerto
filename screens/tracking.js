import React, {useState, useEffect, useRef} from 'react'
import { Text, View, TouchableOpacity, TextInput, Modal, TouchableWithoutFeedback, AppState, FlatList, Alert} from 'react-native'
import ContactsItem from '../components/contactsItem'
import Icon from 'react-native-vector-icons/AntDesign'
import {isValidNumber} from "react-native-phone-number-input"
import { randomCode } from '../utils/helpers'
import AsyncStorage from '@react-native-async-storage/async-storage'

const LocationController = require('../controllers/locationController')
const TrackerController = require('../controllers/trackerController')
const s = require('../styles/styles');


export default function Tracking({route}) {
  const appState = useRef('active')
  const isPermissionRequest = useRef(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [trackingDetails, setTrackingDetails] = useState(null);
  const [recipient, setRecipient] = useState(null);
  const [contactsPermission, setContactsPermission] = useState(null)
  const [contactsList, setContactsList] = useState([])
  const [address, setAddress] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)
  const [locationError, setLocationError] = useState(null)
  const [locationAccess, setLocationAccess] = useState(null)
  const [locationEnabled, setLocationEnabled] = useState(null)
  const [location, setLocation] = useState(null)

  useEffect (()=> {
    let mounted = true

    LocationController.setGoogleAPI()
    
    ;(async()=>{
      if (locationAccess == null || locationAccess != 'granted') {
        isPermissionRequest.current = true
        await checkLocationAccess(mounted)
      }
  
      if (contactsPermission === null || contactsPermission !== 'granted') {
        isPermissionRequest.current = true
        await handleContactsPermission(mounted)
      }
    })()

    getTrackingDetails()

    /* const trackingListener = AppState.addEventListener("change", nextAppState => {
      console.log(isPermissionRequest.current)
      if (appState.current.match(/inactive|background/) && nextAppState === "active" && isPermissionRequest.current === false) {
        console.log("App has come to the foreground!");
        console.log(LocationController.locationAccess);
        if (LocationController.locationAccess === 'granted') return

        console.log("Checking Location Access...");
        isPermissionRequest.current = true 
        checkLocationAccess(mounted)
      }
      appState.current = nextAppState;
      console.log("AppState", appState.current);
    }) */

    return () => {
      //trackingListener.remove()
      mounted = false
    }
  }, [])

  useEffect (()=> {
    let mounted = true

    if (locationAccess === 'granted' && locationEnabled === null) {
      checkLocationEnabled(mounted)
    }

    return () => {
      mounted = false
    }
  }, [locationAccess])
  
  useEffect (()=> {
    let mounted = true

    if (locationEnabled && location === null) {
      handleLocation(mounted)
    }

    return () => {mounted = false}
  }, [locationEnabled])

  useEffect(() => {
    let mounted = true

    ;(async () => {
      if (address === null && location) {
        await LocationController.setupAddress()
        if (JSON.stringify(LocationController.locationAddress) === 'undefined') setLocationError('Error with converting location to address')
        if (!mounted) return
        setAddress(LocationController.locationAddress)
      }
    })()

    return () => {mounted = false}
  }, [location])

  useEffect(() => {
    let mounted = true

    if (contactsList.length == 0 && contactsPermission === 'granted'){
      if (!mounted) return
      setupContactsList(mounted);
    }

    return () => {mounted = false}
  }, [contactsPermission])

  const checkLocationAccess = async (mounted) => {
    isPermissionRequest.current = true
    await LocationController.requestForegroundPermissions()
    isPermissionRequest.current = false
    let status = LocationController.locationAccess
    if (status !== 'granted') {
      if (!mounted) return
      (locationError === 'Permission to access location was denied') ? null : setLocationError('Permission to access location was denied')
      return
    }

    if (status !== locationAccess) {
      if (!mounted) return
      setLocationAccess(status)
      if (!mounted) return
      setLocationError(null)
    }
  }

  const checkLocationEnabled = async (mounted) => {
    await LocationController.checkLocationServices()
    let enabled = LocationController.locationEnabled

    if (!enabled) {
      if (!mounted) return
      (locationError === 'Please turn on Location') ? null : setLocationError('Please turn on Location')
    }

    if (locationEnabled !== enabled) {
      if (!mounted) return
      setLocationEnabled(enabled)
      if (!enabled || !mounted) return
      setLocationError(null)
    }
  }

  const handleLocation = async (mounted) => {
    await LocationController.setupLocation()
    if (!mounted) return
    setLocation({
      latitude: LocationController.locationData.latitude,
      longitude: LocationController.locationData.longitude
    })
    setLocationError(null)

    return () => {mounted = false}
  }

  const handleSubmit = async () => {
    setErrorMsg('')
    await checkLocationEnabled(true)

    if (!isValid(phoneNumber)) return
    
    if (!location || location === null || !LocationController.locationEnabled) return setErrorMsg('No location. Please give permission to access location and turn on location')

    let backgroundPermission = await LocationController.Location.getBackgroundPermissionsAsync()

    if (!backgroundPermission.granted) {
      Alert.alert(
        "Background Location Permission",
        "Tracking needs location permission to be set on 'always' to let the app run on background.\n\n" +
        "To turn this on, open the app settings > Permissions > Location",
        [
          {
            text: "Cancel"
          },
          {
            text: "Open Settings",
            onPress: () => LocationController.requestBackgroundPermissions()
          }
        ]
      )

      return
    }

    const user = await JSON.parse(await AsyncStorage.getItem('user'))
    const result = await TrackerController.handleTrackingLimit(user.uid, 3)

    if (result.isAtLimit) {
      Alert.alert(
        "Temporary Limit Reached",
        "Allerto App pays for SMS services used to notify your recipient. To avoid spamming of recipient and high expenses for us, developers," +
        " we temporarily put limit on this feature to allow tracking only once per 3 days. We hope to lift this limit as we further develop this" +
        " app and get more funding so that our users can freely share their location with their contacts in times of emergencies.\n\n" + 
        `Time Remaining: ${result.timeRemaining.hours > 1 ? result.timeRemaining.hours + 'hrs' :  result.timeRemaining.hours + 'hr'} and ` +
        `${result.timeRemaining.minutes > 1 ? result.timeRemaining.minutes + 'mins' :  result.timeRemaining.hours + 'min'}`,
        [{text: "I Understand"}]
      )

      return
    }
    
    const trackingID = randomCode(6, 'aA#')

    const details = {
      isTracking: true,
      trackingID: trackingID,
      recipient: recipient,
      location: location,
      address: address
    }

    await TrackerController.saveTrackingDetails(details)

    setTrackingDetails(details)

    await LocationController.startTracking()

    Alert.alert(
      "Location Tracking Started",
      "Allerto App will now keep track of your device' location and send location updates to your chosen recipient.\n\n" +
      "Keep this app running on background. Closing the application may terminate location tracking",
      [{text: "Close"}]
    )
  }

  const handleContactsPermission = async (mounted) => {
    if (contactsPermission != null) return

    isPermissionRequest.current = true

    const granted = await TrackerController.requestContactsPermission()
    
    isPermissionRequest.current = false

    if (granted != contactsPermission && mounted)
      setContactsPermission(granted)

  }

  const setupContactsList = async (mounted) => {
    const List = await TrackerController.getContactsList()
    if (List.length == 0) {
      if (!mounted) return
        setContactsList(null)
        return
    }

    if (contactsList.length > 0) return
    if (!mounted) return
    setContactsList(List)
  }

  function onChanged (text) {
    setPhoneNumber(text.replace(/[^0-9]/g,''))
  }

  function isValid(phoneNumber) {
    if (phoneNumber.length === 0) {
      setErrorMsg('Please enter a recipient')
      return false
    }
    let formattedNumber = phoneNumber.replace(/^0+/, '+63')
    const result = isValidNumber(formattedNumber, 'PH')
    if (!result) {
      setErrorMsg('Invalid number')
      return false
    }
    return true
  }

  async function openModal() {
    await handleContactsPermission().then(()=>{
      setModalVisible(true)
    })
  }

  const turnOnGPS = async () => {
    await LocationController.getLocation()
    checkLocationEnabled(true)
  }

  const selectContact = async (name, number) => {
    let formattedNumber = number.replace(/^0+/, '+63')
    setPhoneNumber(formattedNumber)
    setErrorMsg('')
    if (recipient && recipient?.number === formattedNumber) return
    setRecipient({
      name: name,
      number: formattedNumber
    })
    if (modalVisible) setModalVisible(false)
  }

  const openAppSettings = () => {
    setModalVisible(false)
    LocationController.openSettings()
  }

  const getTrackingDetails = async () => {
    const details = await TrackerController.getTrackingDetails()

    if (!details) {
      setTrackingDetails({
        isTracking: false
      })

      return
    }

    setTrackingDetails(details)
  }

  const stopTracking = async () => {
    const details = {
      isTracking: false
    }
    setTrackingDetails(details)
    setPhoneNumber('')
    setRecipient(null)
    TrackerController.saveTrackingDetails(details)
    await LocationController.stopTracking()
      .then(()=> {
        Alert.alert(
          "Tracking Stopped",
          "Location Tracking Successfully Terminated",
          [{text: "OK"}]
        )
      })
  }

  let locationText = ''

  if (locationError) {
    locationText = "\n" + locationError 
  } else {
    locationText = '\nLoading...'
  }
  
  if (location && address && locationEnabled) {
    locationText = ("\n(" + location.latitude + " °lat, " + location.longitude + " °lng)" + "\n" + address.complete + "\n")
  }

  const renderItem = ({item}) => (
          <ContactsItem 
            onPress = {(name, number) => selectContact(name, number)}
            displayName= {item.displayName}
            familyName = {item.familyName}
            givenName = {item.givenName}
            phoneNumbers= {item.phoneNumbers}
            hasThumbnail= {item.hasThumbnail}
            thumbnailPath = {item.thumbnailPath}
          />)

  return trackingDetails && (
    <View style={s.trackingScreenBody}>
      <View style={s.locationFieldContainer}>
        <Text style={s.text}>My Current Location:</Text>
        <Text style={s.statusText}>{locationText}</Text>
        {locationError == "Please turn on Location" ? 
            <TouchableOpacity activeOpacity={0.65} style={s.emergencyListScreenButton} onPress={turnOnGPS}>
                <Text style={s.buttonText}>{"TURN ON LOCATION"}</Text>
            </TouchableOpacity> : null}
        {locationError == "Permission to access location was denied" ? 
            <TouchableOpacity activeOpacity={0.65} style={s.emergencyListScreenButton} onPress={() => LocationController.openSettings()}>
                <Text style={s.buttonText}>{"Open App Settings"}</Text>
            </TouchableOpacity> : null}
      </View>
      {
        trackingDetails.isTracking ?
        <>
          <View>
            <Text style={s.text}>Sending My Location To</Text>
            <View>
              <Text style={s.text}>{trackingDetails.recipient.name}</Text>
            </View>
            <View>
              <Text style={s.text}>{trackingDetails.recipient.number}</Text>
            </View>
          </View>
          <TouchableOpacity style={s.trackingButton} activeOpacity={0.8} onPress={() => stopTracking()}>
            <Text style={s.trackingButtonText}>Stop Tracking</Text>
          </TouchableOpacity>
        </>
        :
        <>
          <View>
            <Text style={s.text}>Send My Location To</Text>
            <View style={s.contactFieldContainer}>
              <TextInput 
                placeholder='Enter 11-digit Phone Number'
                keyboardType='number-pad'
                style={s.phoneInput}
                value={phoneNumber}
                onChangeText={(text) => onChanged(text)}
                onEndEditing={() => {selectContact(phoneNumber, phoneNumber);}}
              />
              <TouchableOpacity style={s.contactsButtonContainer} onPress={() => openModal()}>
                <Icon style={s.contactsButton} size={36} name={'contacts'}/>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            {(errorMsg !== '') && (<Text style={s.errorText}>{errorMsg}</Text>)}
          </View>
          <TouchableOpacity style={s.trackingButton} activeOpacity={0.8} onPress={() => handleSubmit()}>
            <Text style={s.trackingButtonText}>Track and Send My Location</Text>
          </TouchableOpacity>
        </>
      }

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {setModalVisible(!modalVisible)}}
      >
        <TouchableWithoutFeedback onPress={() => {setModalVisible(false)}}>
            <View style={s.modalOverlay} />
        </TouchableWithoutFeedback>
        <View style={s.modalContainer}>
          <View style={s.modalBody}>
            <View style={s.modalTitle}>
              {
                contactsPermission == 'granted' ?
                <>
                  <Text style={s.titleText}>Select Recipient from Contacts</Text>
                </>
               :
                <>
                  <Text style={s.titleText}>Permission to access contacts was denied</Text>
                </>
              }
            </View>
            {
              contactsList.length > 0 &&
              <FlatList 
                style={s.flatList}
                data = {contactsList}
                renderItem = {renderItem}
                keyExtractor = {(item, index) => index.toString()}
              />
            }
            {
              contactsPermission != 'granted' &&
              <TouchableOpacity activeOpacity={0.65} style={s.emergencyListScreenButton} onPress={() => openAppSettings()}>
                <Text style={s.buttonText}>{"Open App Settings"}</Text>
              </TouchableOpacity>
            }
          </View>
        </View>
      </Modal>
    </View>
  )
}

