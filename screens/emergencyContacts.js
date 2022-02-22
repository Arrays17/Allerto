import React, {useEffect, useState} from 'react'
import { View, ScrollView, Text } from 'react-native'
import * as Location from 'expo-location'
import ListItem from '../components/listItems'
import {fetchPlaces} from '../apis/fetchPlaces'
const s = require('../styles/styles')

export default function emergencyContacts({route, navigation}) {
    const {headerTitle, keyword} = route.params;
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        navigation.setOptions({title: headerTitle});

        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
              setErrorMsg('Permission to access location was denied');
              return;
            }

            Location.setGoogleApiKey(process.env.GOOGLE_API_KEY);

            let { locationEnabled } = await Location.hasServicesEnabledAsync();

            await Location.getCurrentPositionAsync()
                .then(({coords}) => {
                    let {latitude, longitude} = coords;
                    setLocation({
                        lat: latitude,
                        long: longitude
                    })})
                .catch((err) => {
                    console.log(err.message);
                    !locationEnabled ? setErrorMsg('Please turn on your GPS') : setErrorMsg('There is a problem on finding your location');
                    }
                );
          })();

          fetchPlaces(location, keyword);
        }, [])

        let text = 'Loading...';
        if (errorMsg) {
            text = errorMsg;
        } else if (location) {
            text = JSON.stringify(location);
        }

        console.log(location)

    return (
        <ScrollView contentContainerStyle={s.emergencyListScreenBody}>
            <Text style={s.emergencyListScreenText}>{text}</Text>
            <ListItem Name="asdas" Distance="asdsad" Number="54"/>
        </ScrollView>
    )
}
