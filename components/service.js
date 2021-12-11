import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default ServiceButton = (props) => {
    return (
        <View style={styles.service}>
            <View style={styles.serviceIconContainer}>
                <Icon style={styles.serviceIcon} name={props.icon} size={90}/>
            </View>
            <View style={styles.serviceTitleContainer}>
                <Text style={styles.serviceTitle}>{props.title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    service: {
        display: "flex",
        minWidth: '45%',
        minHeight: 175,
        margin: 5,
        padding: 20,
        alignItems: "center",
        backgroundColor: "gray",
        borderRadius: 20,
        borderColor: 'white',
        borderWidth: 3,
        shadowColor: 'black',
        shadowOffset: {width: 5, height: -5},
        shadowOpacity: 0.9,
    },
    serviceIconContainer: {
        flex: 0.8,
        alignItems: "center",
        justifyContent: 'center',
        color: 'white',
    },
    serviceIcon: {
        flex: 1,
        color: 'white',
    },
    serviceTitleContainer: {
        flex: 0.2,
        alignItems: "center",
        justifyContent: 'center',
        fontWeight: "bold",
        color: 'white',
        letterSpacing: 2,
    },
    serviceTitle: {
        flex: 1,
        fontWeight: "bold",
        color: 'white',
        letterSpacing: 2,
    }
})