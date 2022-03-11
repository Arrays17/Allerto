import React from "react";
import { View, Text, StyleSheet, Dimensions, Pressable, Linking, Platform } from 'react-native';

export default ListItem = (props) => {
    return (
        <Pressable onPress={() => callNumber(props.number)} onLongPress={openModal}>
            <View style={styles.itemContainer}>
                <Text style={styles.itemName}>{props.name}</Text>
                <Text style={styles.itemDistance}>{props.distance.kilometers}km away</Text>
                <Text style={styles.itemNumber}>{props.number ? props.number : props.address}</Text>
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

const styles = StyleSheet.create({
    itemContainer: {
        width: (Dimensions.get('window').width - 15),
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: "orange",
        marginBottom: 10,
        borderRadius: 20
    },
    itemName: {
        fontSize: 20,
        fontWeight: "bold",
    },
    itemDistance: {
        fontSize: 16,
        fontStyle: "italic",
    },
    itemNumber: {
        fontSize: 20,
    },
})