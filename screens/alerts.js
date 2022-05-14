import { Switch, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
const s = require('../styles/styles');

export default function Alerts() {
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => setIsEnabled(previousState => !previousState)

  useEffect(()=>{

  }, [isEnabled])

  return (
    <View style={s.body}>
      <View style={s.switchContainer}>
        {
          isEnabled ? (<Text style={s.switchText}>Turn OFF Alerts and Notifications</Text>) :
          (<Text style={s.switchText}>Turn ON Alerts and Notifications</Text>)
        }
        <Switch
          accessibilityLabel='Alerts and Notification'
          style={s.switch}
          trackColor={{true: "#ffd9bd", false: "gray"}}
          thumbColor={isEnabled ? "orange" : "white"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      {
        isEnabled ? (
          <Text style={s.text}>There are no current natural disaster alerts found near you.</Text>
        ) : (
          <Text style={s.text}>Alerts and Notifications are turned OFF</Text>
        )
      }
    </View>
  )
}