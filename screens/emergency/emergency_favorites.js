import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const s = require('../../styles/styles')

export default function emergency_favorites(key) {
  const {keyword} = key;
  const [favoriteList, setFavoriteList] = useState(null)
  const [stationName, setStationName] = useState(null)
  let statusText = 'Loading...'

  async function getFavorites() {
    const storeKey = 'favorites_' + keyword
    const favorites = await AsyncStorage.getItem(storeKey)
    if (favorites) {
      setFavoriteList(JSON.parse(favorites))
    }
  }

  useEffect(() => {
    switch (keyword) {
      case "police":
        setStationName('Police')
        break;
      case "hospital":
        setStationName('Hospital')
        break;
      case "fire_station":
        setStationName('Fire Station')
        break;
      case "road_traffic":
        setStationName('Road and Traffic')
        break;
      case "red_cross":
        setStationName('Red Cross')
        break;
      case "disaster":
        setStationName('Disaster')
        break;
    
      default:
        break;
    }

    getFavorites()
  }, [])

  

  return (
    <View style={s.body}>
      {
        
        (favoriteList !== null) ? (
          console.log(favoriteList)
        ) :
        (<Text style={s.statusText}>{statusText}</Text>)
      }
    </View>
  )
}