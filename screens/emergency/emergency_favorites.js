import React, { useState, useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'
import ListItem from '../../components/listItems'

const favoritesController = require('../../controllers/favoritesController')
const s = require('../../styles/styles')

export default function emergency_favorites(key) {
  const {keyword} = key;
  const storeKey = 'favorites_' + keyword
  const [favoriteList, setFavoriteList] = useState(null)
  const [statusText, setStatusText] = useState('Loading...')
  const [fetching, setFetching] = useState(false)

  let stationName = ''
  switch (keyword) {   // Set Name for Status Text
    case "police":
      stationName = 'Police'
      break;
    case "hospital":
      stationName = 'Hospital'
      break;
    case "fire_station":
      stationName = 'Fire Station'
      break;
    case "road_traffic":
      stationName = 'Road and Traffic'
      break;
    case "red_cross":
      stationName = 'Red Cross'
      break;
    case "disaster":
      stationName = 'Disaster'
      break;
  
    default:
      break;
  }

  const getFavoritesList = async () => {
    await favoritesController.getFavorites(storeKey)
    .then(List => {
      setFetching(false)
      if (favoriteList) // Exisiting Favorite List
        if (List.length != favoriteList.length) {
          setFavoriteList(List)
        }
  
      if (!favoriteList) {
        setFavoriteList(List)
      }
    })
  }

  useEffect(() => {
    let mounted = true

    if (!fetching && mounted){
      setFetching(true)
      setTimeout(() => getFavoritesList(), 500)
    }

    return () => mounted = false
  }, [fetching])


  useEffect(() => {
    let mounted = true
    setStatusText("Loading...");

    if (favoriteList === null || JSON.stringify(favoriteList) === "[]") {
      if (!mounted) return null
      setTimeout(() => setStatusText("No " + stationName + " contact added to favorites..."), 2000)
    }
    
    return () => mounted = false
  }, [favoriteList])

  const renderItem = ({item}) => (
    <ListItem 
        refresh = {() => {
          setFavoriteList([])
        }}
        name={item.name} 
        address={item.address} 
        number={item.number} 
        distance={item.distance} 
        coordinates={item.coordinates} 
        keyword={keyword}
    />)

  return (
    <View style={s.body}>
      {
        (favoriteList != null && JSON.stringify(favoriteList) !== "[]") ? (
          <>
            <FlatList
            style={s.flatList}
            data = {favoriteList}
            renderItem = {renderItem}
            keyExtractor = {(item, index) => index.toString()}
            /> 
          </>
        ) :
        (<Text style={s.statusText}>{statusText}</Text>)
      }
    </View>
  )
}