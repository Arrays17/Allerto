import { Switch, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage';

const AlertsController = require('../controllers/alertsController')
const s = require('../styles/styles');

export default function Alerts() {
  const [isEnabled, setIsEnabled] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")
  const [isRegistered, setIsRegistered] = useState(false);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    (async () => {
      let alertSettings = await AsyncStorage.getItem('alertSettings')
      alertSettings = JSON.parse(alertSettings)
      if (alertSettings !== null)
        setIsEnabled(alertSettings)
    })()

    checkStatus()
  }, [])

  useEffect(()=>{
    if (!isEnabled) {
      setErrorMsg("Alerts and Notifications are turned OFF")
    } else {
      setErrorMsg("Loading...")
      setTimeout(()=>{
        setErrorMsg("There are no current natural disaster alerts found near you.")
      }, 5000)
    }
    
    updateSettings()

  }, [isEnabled])

  const updateSettings = async () => {
    await AsyncStorage.setItem('alertSettings', JSON.stringify(isEnabled))
  }

  const checkStatus = async () => {
    console.log("Checking Alerts and Notification Status");
    const result = await AlertsController.checkStatusAsync()
    setStatus(result.status);
    setIsRegistered(result.isRegistered);
  }
  
  const toggleSwitch = async () => {
    setIsEnabled(previousState => !previousState)

    if (isRegistered) {
      await AlertsController.unregisterBackgroundFetchAsync();
    } else {
      await AlertsController.registerBackgroundFetchAsync()
    }

    checkStatus()
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
      <Text style={s.statusText}>{errorMsg}</Text>
    </View>
  )
}