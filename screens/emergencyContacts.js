import React, {useEffect, useState} from 'react'
import { Button ,Text, FlatList } from 'react-native'
import ListItem from '../components/listItems'
import fetchPlaces from '../apis/fetchPlaces'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Location from 'expo-location'
const s = require('../styles/styles')

export default function emergencyContacts({route, navigation}) {
    const {headerTitle, keyword} = route.params;
    const [locationEnabled, setLocationEnabled] = useState(false)
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [Places, setPlaces] = useState(null)

    const TurnOnGPS = async () => {
        await Location.getCurrentPositionAsync().catch(()=>{})
        let locationStatus = await Location.hasServicesEnabledAsync()
        if (locationStatus) {
            setLocationEnabled(true)
            setErrorMsg(null)
        }
    }

    const setupLocation = () => {
        (async () => {
            let {coords} = await Location.getCurrentPositionAsync().catch(()=>{setErrorMsg('Sorry... We\'re having trouble getting your location...')})
    
            if (coords)
            setLocation(coords)
        })()
    }

    useEffect(() => {
        navigation.setOptions({title: headerTitle});

        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
              setErrorMsg('Permission to access location was denied');
            }
    
            Location.setGoogleApiKey(process.env.GOOGLE_API_KEY);

            await Location.getCurrentPositionAsync().catch(()=>{})

            let locationStatus = await Location.hasServicesEnabledAsync()
            if (locationStatus) {
                setLocationEnabled(true)
                setErrorMsg(null)
                let {coords} = await Location.getCurrentPositionAsync().catch(()=>{setErrorMsg('Sorry... We\'re having trouble getting your location...')})

                if (coords) {
                    setLocation(coords)
                }
            } else {
                setErrorMsg('Please turn on device\'s GPS')
            }
          })()
        }, [])

        if (locationEnabled && !Places && location) {
            setPlaces(fetchPlaces(location, keyword))
        }

        
        console.log(locationEnabled)
        console.log(location)
        console.log(Places)

        let text = 'Loading...';
        if (errorMsg) {
            text = errorMsg;
        }

        const renderItem = ({item}) => (<ListItem Name={item.title}/>)

    return (
        <SafeAreaView style={s.emergencyListScreenBody}>
            {!Places ? <Text style={s.emergencyListScreenText}>{text}</Text> : 
            <FlatList
                data = {Places}
                renderItem = {renderItem}
            />}
            {text == "Please turn on device's GPS" ? <Button title={"TURN ON GPS"} onPress={TurnOnGPS}/> : null}
            {locationEnabled && !Places ? setupLocation() : null}
        </SafeAreaView>
    )
}
