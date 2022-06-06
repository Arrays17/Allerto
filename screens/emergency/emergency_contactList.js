import React, {useEffect, useState} from 'react'
import { Text, FlatList, TouchableOpacity, View, Linking, ScrollView, RefreshControl} from 'react-native'
import ListItem from '../../components/listItems'
import getAddress from '../../apis/getAddress'
import * as Location from 'expo-location'

const EmergencyListController = require('../../controllers/emergencyListController');
const s = require('../../styles/styles')

export default function emergencyContacts(key) {
    const {keyword} = key;
    const [locationEnabled, setLocationEnabled] = useState(false)
    const [locationAccess, setLocationAccess] = useState('')
    const [location, setLocation] = useState(null)
    const [address, setAddress] = useState(null)
    const [errorMsg, setErrorMsg] = useState(null)
    const [fetching, setFetching] = useState(false)
    const [emergencyList, setEmergencyList] = useState(null)
    const [refreshing, setRefreshing] = useState(false)

    const onRefresh = () => {
        setEmergencyList([])
        setErrorMsg(null)
        setLocation(null)
        setAddress(null)
        setRefreshing(true)
        setFetching(false)
        checkServices()
    }

    const checkServices = async () => {
        let locationStatus = await Location.hasServicesEnabledAsync()
        setLocationEnabled(locationStatus)
    }

    const TurnOnGPS = async () => {
        await Location.getCurrentPositionAsync().then(()=>setErrorMsg(null)).catch(()=>{})
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

    const openSettings= async () => {
        Linking.openSettings()
    }

    const checkPermissions = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync()
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied')
        } else {
            setLocationAccess(status)
        }

        return status
    }
    
    (async () => {

        await checkServices()
        await checkPermissions()
        handleLocation()

        if(refreshing) 
        setRefreshing(false)

        if (!fetching && location ) {
            setFetching(true)
            await EmergencyListController.getEmergencyList(location, keyword)
            .then((List) => {
                setEmergencyList(List)
            })
        }
    })()

    useEffect(() => {
        let mounted = true;

        (async () => {
            let { status } = await checkPermissions()

            Location.setGoogleApiKey(process.env.GOOGLE_API_KEY)

            if(status !== 'granted' || !mounted) return
    
            await setupLocation()
            .then(coords => {
                if (!mounted) return
                setLocation({
                    latitude: coords.latitude,
                    longitude: coords.longitude
                })
            })
        })()

        return () => {mounted=false}
    }, [])

    const handleLocation = () => {
        let mounted = true;

        if (!location && !locationEnabled && locationAccess == 'granted') {
            if (!mounted) return null;
            setErrorMsg('Please turn on GPS')
            return
        }

        if (!location && locationEnabled && locationAccess == 'granted') {
            if (!mounted) return null;
            setErrorMsg(null)
            setupLocation()
            .then(coords => {
                if (!mounted) return
                setLocation({
                    latitude: coords.latitude,
                    longitude: coords.longitude
                })
            })
        }

        return () => {mounted = false}
    }

    useEffect(()=>{
        let mounted = true;
        
        if (!mounted) return
        handleLocation()

        return () => {mounted = false}
    }, [locationEnabled, locationAccess])

    useEffect(()=>{
        let mounted = true;
        if (location && address == null) {            
            if (!mounted) return null;
            setupAddress()
            .then(address => {
                if (!mounted) return
                setAddress(address)
            })
        }
        console.log('location : ', location)
        return () => {mounted=false}
    }, [location])

    useEffect(() => {
        let mounted = true
        if (emergencyList && JSON.stringify(emergencyList) != '[]') {
            if (!mounted) return null
            EmergencyListController.saveEmergencyList(keyword, emergencyList)
        }

        return () => mounted = false
    }, [emergencyList])

    let text = 'Loading...';
    if (errorMsg) {
        text = errorMsg;
    }

    const renderItem = ({item}) => (
        <ListItem 
            refresh = {() => onRefresh}
            name={item.name} 
            address={item.address} 
            number={item.number} 
            distance={item.distance} 
            coordinates={item.coordinates} 
            keyword={keyword}
        />)

    return (
        <View style={s.emergencyListScreenBody}>
            {(emergencyList != null && JSON.stringify(emergencyList) != '[]') ? 
                <>
                    <View>
                        <Text style={s.text}>{"\n"}Detected Location:{"\n" + address + "\n"}</Text>
                    </View>
                    <FlatList
                        data = {emergencyList}
                        renderItem = {renderItem}
                        keyExtractor = {renderItem.id}
                        refreshing={refreshing}
                        onRefresh={() => onRefresh()}
                    /> 
                </>
                : 
                <>
                    <ScrollView 
                        contentContainerStyle={s.body}
                        refreshControl={
                            <RefreshControl
                                refreshing={refreshing}
                                onRefresh={onRefresh}
                            />
                        }
                    >
                        <Text style={s.statusText}>{text}</Text>
                        {text == "Please turn on GPS" ? 
                            <TouchableOpacity activeOpacity={0.65} style={s.emergencyListScreenButton} onPress={TurnOnGPS}>
                                <Text style={s.buttonText}>{"TURN ON GPS"}</Text>
                            </TouchableOpacity> : null}
                        {text == "Permission to access location was denied" ? 
                            <TouchableOpacity activeOpacity={0.65} style={s.emergencyListScreenButton} onPress={openSettings}>
                                <Text style={s.buttonText}>{"Open App Settings"}</Text>
                            </TouchableOpacity> : null}
                    </ScrollView>
                </>
            }
        </View>
    )
}
