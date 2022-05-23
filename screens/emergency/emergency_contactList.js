import React, {useEffect, useState} from 'react'
import { Text, FlatList, TouchableOpacity, View, Linking } from 'react-native'
import ListItem from '../../components/listItems'
import fetchPlaces from '../../apis/fetchPlaces'
import getAddress from '../../apis/getAddress'
import * as Location from 'expo-location'
const s = require('../../styles/styles')

export default function emergencyContacts(key) {
    const {keyword} = key;
    const [locationEnabled, setLocationEnabled] = useState(false)
    const [locationAccess, setLocationAccess] = useState('')
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
        let { coords } = await Location.getCurrentPositionAsync({accuracy: 4}).catch(()=>{setErrorMsg('Sorry... We\'re having trouble getting your location...')})
        return coords
    }

    const setupAddress = async () => {
        let address = await getAddress(location).catch(()=>{})
        return address
    }

    const requestPermission = async () => {
        Linking.openSettings()
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
        let mounted = true;

        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync()
            if (status !== 'granted') {
                if (!mounted) return null
                setErrorMsg('Permission to access location was denied')
            } else {
                setLocationAccess(status)
            }
    
            Location.setGoogleApiKey(process.env.GOOGLE_API_KEY)
    
            await Location.getCurrentPositionAsync({accuracy: 4}).catch(()=>{})
        })()

        return () => {mounted=false}
    }, [])

    useEffect(()=>{
        console.log('locationEnabled? : ', locationEnabled)
        let mounted = true;
        if (!location && locationEnabled && locationAccess == 'granted') {
            if (!mounted) return null;
            setErrorMsg(null)
            setupLocation(coords => coords.json())
            .then(coords => {
                setLocation({
                    latitude: coords.latitude,
                    longitude: coords.longitude
                })
            })
        } else if (!location && !locationEnabled) {
            if (!mounted) return null;
            setErrorMsg('Please turn on GPS')
        }
        return () => {mounted = false}
    }, [locationEnabled])

    useEffect(()=>{
        let mounted = true;
        if (location && address == null) {            
            if (!mounted) return null;
            setupAddress(address => address.json())
            .then(address => {
                setAddress(address)
            })
        }
        console.log('location : ', location)
        return () => {mounted=false}
    }, [location])

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
                        <Text style={s.text}>Your Current Location:</Text>
                        <Text style={s.text}>{address}</Text>
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
            {text == "Permission to access location was denied" ? 
                <TouchableOpacity activeOpacity={0.65} style={s.emergencyListScreenButton} onPress={requestPermission}>
                    <Text style={s.buttonText}>{"Open App Settings"}</Text>
                </TouchableOpacity> : null}
        </View>
    )
}
