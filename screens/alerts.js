import { Switch, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
const s = require('../styles/styles');

export default function Alerts() {
  const [isEnabled, setIsEnabled] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")
  const toggleSwitch = () => setIsEnabled(previousState => !previousState)

  useEffect(()=>{
    if (!isEnabled) {
      setErrorMsg("Alerts and Notifications are turned OFF")
    } else {
      setErrorMsg("Loading...")
      setTimeout(()=>{
        setErrorMsg("There are no current natural disaster alerts found near you.")
      }, 5000)
    }

  }, [isEnabled])

  return (
    <View style={s.body}>
      <View style={s.switchContainer}>
        <Switch
          accessibilityLabel='Alerts and Notification'
          style={s.switch}
          trackColor={{true: "#ffd9bd", false: "gray"}}
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
      <Text style={s.text}>{errorMsg}</Text>
    </View>
  )
}