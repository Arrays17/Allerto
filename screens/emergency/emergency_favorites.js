import React, { useState, useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'
import ListItem from '../../components/listItems'

const favoritesController = require('../../controllers/favoritesController')
const s = require('../../styles/styles')

export default function emergency_favorites(key) {
  const {keyword} = key;
  const storeKey = 'favorites_' + keyword
  const [favoriteList, setFavoriteList] = useState([])
  const [statusText, setStatusText] = useState('Loading...')
  const [fetching, setFetching] = useState(false)

  let timeOuts = []

  let stationName = ''
  switch (keyword) { 
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

  useEffect(() => {
    setFetching(false)
  }, [])

  useEffect( () => {
    let mounted = true


    if (!fetching && mounted){
      if (!mounted) return
      setFetching(true)
      fetchTimer(mounted)
    }

    return () => {
      mounted = false
      timeOuts.forEach(timeout => {
          clearTimeout(timeout)
        });
      }
  }, [fetching, favoriteList])


  useEffect(() => {
    let mounted = true

    if (!mounted) return
    setStatusText("Loading...");

    loadingTimer(mounted)
    
    return () => {
      mounted = false
      timeOuts.forEach(timeout => {
          clearTimeout(timeout)
      });
    }
  }, [favoriteList])

  const getFavoritesList = async (mounted) => {
    let List = await favoritesController.getFavorites(storeKey)
    if (!List || List?.length == 0 ) return setFetching(false)

    if (favoriteList.length > 0 && List.length != favoriteList.length && mounted == true) // Existing Favorite List
      setFavoriteList(List)

    if (favoriteList.length === 0 && mounted) {
      setFavoriteList(List)
      setStatusText("")
    }
    
    setFetching(false)
  }

  const fetchTimer = (mounted) => {
    const timer = setTimeout(getFavoritesList(mounted), 1000)
    timeOuts.push(timer)
  }

  const loadingTimer = (mounted) => {
    const timer = setTimeout(handleLoadingText(mounted), 5000)
    timeOuts.push(timer)
  }

  const handleLoadingText = (mounted) => {
    if (favoriteList.length == 0 && mounted) {
      setStatusText("No " + stationName + " contact added to favorites...")
    }
  }

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
    />
  )

  return (
    <View style={s.body}>
      {
        (favoriteList.length > 0) ? (
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