import React, {useState, useEffect} from 'react'
import { Text, View, TouchableOpacity, TextInput, Modal, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import {isValidNumber} from "react-native-phone-number-input"

const LocationController = require('../controllers/locationController')
const TrackerController = require('../controllers/trackerController')
const s = require('../styles/styles');

export default function Tracking() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [contactsPermission, setContactsPermission] = useState(null)
  const [contactsList, setContactsList] = useState([])
  const [address, setAddress] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)
  const [locationError, setLocationError] = useState(null)
  const [locationAccess, setLocationAccess] = useState(null)
  const [locationEnabled, setLocationEnabled] = useState(null)
  const [location, setLocation] = useState(null)

  const setupContactsList = async () => {
    const List = await TrackerController.getContactsList()
    if (List.length === 0) {
        setContactsList(null)
        return
    }
    setContactsList(List)
  }

  const checkLocationAccess = async () => {
    const status = await LocationController.requestForegroundPermissions()
    if (status !== 'granted') {
      (locationError === 'Permission to access location was denied') ? null : setLocationError('Permission to access location was denied')
      return status
    }

    setLocationError(null)
    setLocationAccess(status)
  }

  ;(async () => {
    
    if (contactsList !== null && JSON.stringify(contactsList) === '[]' && contactsPermission === 'granted'){
        await setupContactsList();
    }

    await checkLocationAccess()

    if (locationEnabled === null && locationAccess === 'granted') {
      await LocationController.checkServices()
      setLocationEnabled(LocationController.locationEnabled)
    }

    if (location === null && locationEnabled) {
      await LocationController.setupLocation()
      setLocation({
        latitude: LocationController.locationData.latitude,
        longitude: LocationController.locationData.longitude
      })
    }

    if (address === null && location) {
      const addr = await LocationController.getAddress()
      setAddress(addr)
    }
  })()

  useEffect(() => {
    let mounted = true

    ;(async () => {
      let { status } = await checkLocationAccess()

      LocationController.setGoogleAPI()

      if(status !== 'granted' || !mounted) return

      await LocationController.setupLocation()
  })()

    return () => {mounted = false}
  }, [])

  async function handleContactsPermission() {
    if (contactsPermission !== null) return

    const granted = await TrackerController.requestContactsPermission()
    setContactsPermission(granted)

  }

  function onChanged (text) {
    setPhoneNumber(text.replace(/[^0-9]/g,''))
  }

  async function handleSubmit() {
    setErrorMsg(null)
    if (!isValid()) {
      setErrorMsg('Invalid number')
      return
    }

    await LocationController.requestPermissions()

    // Begin Tracking and Sending Data to Firebase
  }

  function isValid() {
    let formattedNumber = phoneNumber.replace(/^0+/, '+63')
    const result = isValidNumber(formattedNumber, 'PH')
    if (!result) return false
    return true
  }

  function openModal() {
    handleContactsPermission();
    setModalVisible(true)
  }

  let locationText = 'Loading...'

  if (location && address) {
    locationText = ("\n(" + location.latitude + ", " + location.longitude + ")" + "\n" + address.complete + "\n")
  }

  if (locationError) {
    locationText = "\n" + locationError 
  }


  return (
    <View style={s.trackingScreenBody}>
      <View style={s.locationFieldContainer}>
        <Text style={s.text}>My Current Location:</Text>
        <Text style={s.statusText}>{locationText}</Text>
        {locationText == "Please turn on GPS" ? 
            <TouchableOpacity activeOpacity={0.65} style={s.emergencyListScreenButton} onPress={TurnOnGPS}>
                <Text style={s.buttonText}>{"TURN ON GPS"}</Text>
            </TouchableOpacity> : null}
        {locationError == "Permission to access location was denied" ? 
            <TouchableOpacity activeOpacity={0.65} style={s.emergencyListScreenButton} onPress={LocationController.openSettings}>
                <Text style={s.buttonText}>{"Open App Settings"}</Text>
            </TouchableOpacity> : null}
      </View>
      <View>
        <Text style={s.text}>Send My Location To</Text>
        <View style={s.contactFieldContainer}>
          <TextInput 
            placeholder='Enter 11-digit Phone Number'
            keyboardType='number-pad'
            maxLength={11}
            style={s.phoneInput}
            value={phoneNumber}
            onChangeText={(text) => onChanged(text)}
          />
          <TouchableOpacity style={s.contactsButtonContainer} onPress={() => openModal()}>
            <Icon style={s.contactsButton} size={36} name={'contacts'}/>
          </TouchableOpacity>
        </View>
        <View>
          {errorMsg && <Text style={s.errorText}>{errorMsg}</Text>}
        </View>
      </View>
      
      <TouchableOpacity style={s.button} activeOpacity={0.8} onPress={() => handleSubmit()}>
        <Text style={s.buttonText}>Track and Send My Location</Text>
      </TouchableOpacity>
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
              <Text style={s.titleText}>Select Recipient from Contacts</Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}