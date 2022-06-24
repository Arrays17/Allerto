import React, {useEffect, useState, useRef} from 'react'
import { Text, FlatList, TouchableOpacity, View, Linking, ScrollView, RefreshControl} from 'react-native'
import ListItem from '../../components/listItems'

const LocationController = require('../../controllers/locationController')
const EmergencyListController = require('../../controllers/emergencyListController');
const s = require('../../styles/styles')

// TODO
// Fix Emergency List Not Loading on Fetch using Google API

export default function emergencyContacts(key) {
    const {keyword} = key;
    const isPermissionRequest = useRef(false)
    const [locationEnabled, setLocationEnabled] = useState(null)
    const [locationAccess, setLocationAccess] = useState('')
    const [location, setLocation] = useState(null)
    const [address, setAddress] = useState(null)
    const [errorMsg, setErrorMsg] = useState(null)
    const [fetching, setFetching] = useState(false)
    const [emergencyList, setEmergencyList] = useState([])
    const [refreshing, setRefreshing] = useState(false)

    useEffect(() => {
        let mounted = true

        if (locationAccess == null || locationAccess != 'granted') {
          checkLocationAccess(mounted)
        }
        return () => {mounted=false}
    }, [])

    useEffect (()=> {
        let mounted = true

        if (locationAccess == 'granted' && locationEnabled == null) {
            checkLocationEnabled(mounted)
        }
    
        return () => {mounted = false}
      }, [locationAccess, locationEnabled])

    useEffect(()=>{
        let mounted = true

        if (locationEnabled && location === null) {
            (async () => {
                await LocationController.setupLocation()
                if (!mounted) return
                setLocation({
                    latitude: LocationController.locationData.latitude,
                    longitude: LocationController.locationData.longitude
                })
                setErrorMsg(null)
            })()
        }

        return () => {mounted = false}
    }, [locationEnabled, location, refreshing])

    useEffect(()=>{
        let mounted = true

        ;(async () => {
          if ((address == null && location) || address == '') {
            await LocationController.setupAddress()
            if (JSON.stringify(LocationController.locationAddress.complete) == 'undefined') setErrorMsg('Error with converting location to address')
            if (!mounted) return
            setAddress(LocationController.locationAddress.complete)
          }
            
          fetchEmergencyList(mounted)
        })()

    
        return () => {mounted = false}
    }, [location, address, refreshing, emergencyList])

    const checkLocationAccess = async (mounted) => {
        isPermissionRequest.current = true
        await LocationController.requestForegroundPermissions()
        .then(() => {
          isPermissionRequest.current = false
        })
        let status = LocationController.locationAccess
        if (status !== 'granted' && mounted) {
          (errorMsg === 'Permission to access location was denied') ? null : setErrorMsg('Permission to access location was denied')
          return
        }
    
        if (status !== locationAccess) {
          if (!mounted) return
          setLocationAccess(status)
          console.log('Location Access set to ', status)
          if (!mounted) return
          setErrorMsg(null)
        }
    }

    const checkLocationEnabled = async (mounted) => {
        await LocationController.checkLocationServices();
        let enabled = LocationController.locationEnabled;

        if (!enabled && mounted) {
            setErrorMsg('Please turn on Location');
            return;
        }

        if (locationEnabled !== enabled) {
            if (!mounted)
                return;
            setLocationEnabled(enabled);
            console.log('Location Enabled set to ', enabled);
            if (!mounted)
                return;
            setErrorMsg(null);
        }
    }

    const onRefresh = () => {
        setRefreshing(true)
        errorMsg != null ? setErrorMsg(null) : null;
        (locationAccess == 'granted' && locationEnabled == null) ? checkLocationEnabled() : null
        location ? setLocation(null) : null
        emergencyList.length > 0 ? setEmergencyList([]) : null
        address != '' ? setAddress('') : null
        setRefreshing(false)
    }

    const TurnOnGPS = async () => {
        await LocationController.getLocation()
        checkLocationEnabled()
    }

    const openSettings= async () => {
        Linking.openSettings()
    }
    
    const fetchEmergencyList = async (mounted) => {
        if (!fetching && location) {
            setFetching(true)
            const List = await EmergencyListController.getEmergencyList(location, keyword)
            if (!mounted) return
            setEmergencyList(List)
            setFetching(false)
            setRefreshing(false)
        }
    }

    let text = 'Loading...';
    if (errorMsg) {
        text = errorMsg;
    }
    
    let locationText = ''

    if (errorMsg) {
      locationText = "\n" + errorMsg 
    } else {
      locationText = '\nLoading...'
    }
    
    if (location && address) {
      locationText = ("\n" + address)
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
        />
    )

    
    return (
        <View style={s.emergencyListScreenBody}>
            {(emergencyList.length > 0) ? 
                <>
                    <View>
                        <Text style={s.text}>{"\n"}Detected Location:{"\n" + locationText + "\n"}</Text>
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
                        {text == "Please turn on Location" ? 
                            <TouchableOpacity activeOpacity={0.65} style={s.emergencyListScreenButton} onPress={TurnOnGPS}>
                                <Text style={s.buttonText}>{"TURN ON LOCATION"}</Text>
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
