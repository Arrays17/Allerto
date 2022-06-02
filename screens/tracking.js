import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
const s = require('../styles/styles');

export default function Tracking() {
  return (
    <View style={s.body}>
      <Text style={s.text}>My Current Location</Text>
      <Text style={s.text}>Send My Location To</Text>
      <TouchableOpacity style={s.button} activeOpacity={0.8}>
        <Text style={s.buttonText}>Track and Send My Location</Text>
      </TouchableOpacity>
    </View>
  )
}