import React, {useEffect, useState} from 'react'
import { View, ScrollView } from 'react-native'
//import * as Location from 'expo-location'

export default function emergencyContacts({route, navigation}) {
    const {headerTitle, keyword} = route.params;
    const [location, setLocation] = useState(null);

    useEffect(() => {
        navigation.setOptions({title: headerTitle});
        }, [])

    return (
        <ScrollView>

        </ScrollView>
    )
}
