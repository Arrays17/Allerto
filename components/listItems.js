import React from "react";
import { View, Text, Pressable, Linking, Platform } from 'react-native';

const s = require('../styles/styles')

export default ListItem = (props) => {
    return (
        <Pressable onPress={() => callNumber(props.number)} onLongPress={openModal}>
            <View style={s.itemContainer}>
                <Text style={s.itemName}>{props.name}</Text>
                <Text style={s.itemDistance}>{props.distance.kilometers}km away</Text>
                <Text style={s.itemNumber}>{props.number ? props.number : props.address}</Text>
            </View>
        </Pressable>
    )
}

function callNumber(number) {
    console.log('Calling ' + number)
    number = '(802) 287-9702' //for testing only, delete for production
    let phoneNumber = ''
    if (Platform.OS !== 'android'){
        phoneNumber = `telprompt:${number}`
    }
    else {
        phoneNumber = `tel:${number}`
    }

    Linking.canOpenURL(phoneNumber)
        .then(supported => {
            if (!supported) {
                Alert.alert('Phone number is not available');
            } 
            else {
                return Linking.openURL(phoneNumber);
            }
        })
        .catch(err => console.log(err));
}

function openModal() {
    console.log('Open Modal')
}