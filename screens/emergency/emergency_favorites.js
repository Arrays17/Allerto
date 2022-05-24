import { View, Text } from 'react-native'
import React from 'react'

const s = require('../../styles/styles')

export default function emergency_favorites(key) {
  const {keyword} = key;
  let stationName = '';

  switch (keyword) {
    case "police":
      stationName = 'Police Station'
      break;
    case "hospital":
      stationName = 'Hospital/Clinic'
      break;
    case "fire_station":
      stationName = 'Fire Stations'
      break;
    case "road_traffic":
      stationName = 'Fire Stations'
      break;
    case "red_cross":
      stationName = 'Fire Stations'
      break;
    case "disaster":
      stationName = 'Fire Stations'
      break;
  
    default:
      break;
  }

  return (
    <View style={s.body}>
      <Text style={s.statusText}>There is no {stationName} contacts saved.</Text>
    </View>
  )
}