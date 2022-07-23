import { Switch, Text, View, Alert } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage';
import getDistanceUsingLatLng from '../utils/getDistanceUsingLatLng';

const AlertsController = require('../controllers/alertsController')
const s = require('../styles/styles');
let user

export default function Alerts() {
  const [isEnabled, setIsEnabled] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")
  const [isRegistered, setIsRegistered] = useState(null);
  const [alertsList, setAlertsList] = useState([])
  const [status, setStatus] = useState(null);
  const toggleCount = useRef(0)

  useEffect(() => {
    (async () => {
      user = JSON.parse(await AsyncStorage.getItem('user'))
    })()

    checkStatus()
  }, [])

  useEffect(async ()=>{
    let mounted = true

    if (!isEnabled && mounted) {
      setErrorMsg("Alerts and Notifications are turned OFF")
      setAlertsList([])
    } else {
      setErrorMsg("Loading...")
      setTimeout(()=>{
        setErrorMsg("There are no current natural disaster alerts found near you.")
      }, 5000)

      handleAlerts()
    }
    
    updateSettings()

    return () => {
      mounted = false
    }
  }, [isEnabled])

  const updateSettings = async () => {
    await AsyncStorage.setItem('alertSettings', JSON.stringify(isEnabled))
  }

  const checkStatus = async () => {
    console.log("Checking Alerts and Notification Status");
    const result = await AlertsController.checkStatusAsync()
    setStatus(result.status);
    setIsRegistered(result.isRegistered);
    
    if (isEnabled != result.isRegistered)
      setIsEnabled(result.isRegistered)
  }
  
  const toggleSwitch = async () => {
    setIsEnabled(previousState => !previousState)

    if (isRegistered) {
      await AlertsController.unregisterBackgroundFetchAsync();
    } else {
      if (toggleCount.current == 0) {
        Alert.alert(
          "Alerts and Notification turned ON",
          "Allerto App will now regularly check for natural disaster alerts with an interval of 12 minutes (5 times per hour).\n\n" +
          "You will be notified through notification bar if a natural disaster alert was found near you.\n" +
          "Checking for alert updates will start 12mins after this was turned on.\n\n" +
          "This process will run in background even if the app was closed.",
          [{text: "OK"}]
        )

        toggleCount.current += 1
      }
      
      await AlertsController.registerBackgroundFetchAsync()
    }

    checkStatus()
  }

  const fetchAlerts = async () => {
    const alertsString = await AsyncStorage.getItem('earthquakeAlerts')
    if (!alertsString) return

    const alerts = JSON.parse(alertsString)

    return alerts
  }

  const handleAlerts = async () => {
    const alerts = await fetchAlerts()
      if (alerts) {
        setAlertsList(alerts)
      }
  }

  return (
    <View style={s.body}>
      <View style={s.switchContainer}>
        <Switch
          accessibilityLabel='Alerts and Notification'
          style={s.switch}
          trackColor={{true: "#f98c40", false: "gray"}}
          thumbColor={isEnabled ? "orange" : "white"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        {
          isEnabled ? (
            <Text style={s.switchText}>Turn OFF Alerts and Notifications</Text>
          ) : (
            <Text style={s.switchText}>Turn ON Alerts and Notifications</Text>
          )
        }
      </View>
      {
        alertsList.length > 0 && user?
        (
          alertsList.map((item)=> {
            return (
              <View key={JSON.stringify(item.id)} style={s.itemContainer}>
                  <Text style={[s.itemName, {textAlign: 'center'}]}>Magnitude {item.magnitude} Earthquake</Text>
                  <Text style={[s.itemDistance, {textAlign: 'center'}]}>{item.dateTime}</Text>
                  <Text style={[s.itemNumber, {textAlign: 'center'}]}>
                    {
                      getDistanceUsingLatLng(
                        parseFloat(user.lastKnownLocation.latitude), parseFloat(user.lastKnownLocation.longitude), 
                        parseFloat(item.location._latitude), parseFloat(item.location._longitude)
                      ).kilometers + "km away @" + item.nearbyArea
                    }
                  </Text>
              </View>
            )
          })
        )
        :
        <Text style={s.statusText}>{errorMsg}</Text>
      }
    </View>
  )
}