import React, {useEffect, useState} from 'react'
import { Text, FlatList, Button, TouchableOpacity, View } from 'react-native'
import ListItem from '../components/listItems'
import fetchPlaces from '../apis/fetchPlaces'
import getAddress from '../apis/getAddress'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Location from 'expo-location'
const s = require('../styles/styles')

export default function emergencyContacts({route, navigation}) {
    const {headerTitle, keyword} = route.params;
    const [locationEnabled, setLocationEnabled] = useState(false)
    const [location, setLocation] = useState(null)
    const [address, setAddress] = useState(null)
    const [errorMsg, setErrorMsg] = useState(null)
    const [fetching, setFetching] = useState(false)
    const [Places, setPlaces] = useState(null)

    const checkServices = async () => {
        let locationStatus = await Location.hasServicesEnabledAsync()
        setLocationEnabled(locationStatus)
    }

    const TurnOnGPS = async () => {
        await Location.getCurrentPositionAsync().catch(()=>{})
        checkServices()
    }

    const setupLocation = async () => {
        let { coords } = await Location.getCurrentPositionAsync().catch(()=>{setErrorMsg('Sorry... We\'re having trouble getting your location...')})
        return coords
    }

    const setupAddress = async () => {
        let address = await getAddress(location).catch(()=>{})
        return address
    }
    
    (async () => {
        await checkServices()

        if ((Places == null || Places === 'undefined' || JSON.stringify(Places) === '[]') && !fetching && location) {
            setFetching(true)
            await fetchPlaces(location, keyword)
            .then(function(places) {
                setPlaces(places)
            })
        }
    })()

    useEffect(() => {
        navigation.setOptions({title: headerTitle});

        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync()
            if (status !== 'granted') {
              setErrorMsg('Permission to access location was denied')
            }
    
            Location.setGoogleApiKey(process.env.GOOGLE_API_KEY)
    
            await Location.getCurrentPositionAsync().catch(()=>{})
        })()
    }, [])

    useEffect(()=>{
        console.log('locationEnabled? : ', locationEnabled)
        if (!location && locationEnabled) {
            setErrorMsg(null)
            setupLocation(coords => coords.json())
            .then(coords => {
                setLocation({
                    latitude: coords.latitude,
                    longitude: coords.longitude
                })
            })
        } else if (!location && !locationEnabled) {
            setErrorMsg('Please turn on GPS')
        }
    }, [locationEnabled])

    useEffect(()=>{
        if (location && address == null) {            
            setupAddress(address => address.json())
            .then(address => {
                setAddress(address)
            })
        }
        console.log('location : ', location)
    }, [location])

    useEffect(()=>{
        //console.log(Places)
    }, [Places])

    let text = 'Loading...';
    if (errorMsg) {
        text = errorMsg;
    }

    const renderItem = ({item}) => (<ListItem name={item.name} address={item.address} number={item.number} distance={item.distance}/>)

    return (
        <View style={s.emergencyListScreenBody}>
            {Places != null ? 
                <>
                    <View>
                        <Text>Your Current Location:</Text>
                        <Text>{address}</Text>
                    </View>
                    <FlatList
                        data = {Places}
                        renderItem = {renderItem}
                        keyExtractor = {renderItem.id}
                    /> 
                </>
                : <Text style={s.emergencyListScreenText}>{text}</Text>
            }
            {text == "Please turn on GPS" ? 
                <TouchableOpacity activeOpacity={0.65} style={s.emergencyListScreenButton} onPress={TurnOnGPS}>
                    <Text style={s.buttonText}>{"TURN ON GPS"}</Text>
                </TouchableOpacity> : null}
        </View>
    )
}
