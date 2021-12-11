import React from "react";
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default ServiceButton = (props) => {
    return (
        <Pressable onPress={props.onPress}
            style={({pressed}) => [{
                borderColor: pressed ? "red" : 'white',
                opacity: pressed ? 0.6 : 1
            },
            styles.service
            ]}>
                {({ pressed }) => (
                    <View>
                        <View style={styles.serviceIconContainer}>
                            <Icon style={pressed ? styles.pressed : styles.serviceIcon} name={props.icon} size={props.title == "Red Cross" ? 130 : 90}/>
                        </View>
                        <View style={styles.serviceTitleContainer}>
                            <Text style={pressed ? styles.pressed : styles.serviceTitle}>{props.title}</Text>
                        </View>
                    </View>
                )}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    service: {
        display: "flex",
        minWidth: '45%',
        maxWidth: '45%',
        minHeight: 175,
        maxHeight: 175,
        margin: 5,
        paddingHorizontal: 5,
        alignItems: "center",
        backgroundColor: "gray",
        borderRadius: 20,
        borderWidth: 3,
        shadowColor: 'black',
        shadowOffset: {width: 5, height: -5},
        shadowOpacity: 0.9,
    },
    serviceIconContainer: {
        flex: 0.7,
        alignItems: "center",
        justifyContent: "flex-end",
    },
    serviceTitleContainer: {
        flex: 0.3,
        alignItems: "center",
        justifyContent: 'center',
        fontWeight: "bold",
        color: 'white',
        letterSpacing: 2,
    },
    serviceTitle: {
        fontSize: 14,
        textAlign: 'center',
        fontWeight: "bold",
        letterSpacing: 2,
        color: "white",
    },
    serviceIcon: {
        textAlign: 'center',
        fontWeight: "bold",
        letterSpacing: 2,
        color: "white",
    },
    pressed: {
        opacity: 0.6,
        textAlign: 'center',
        fontWeight: "bold",
        letterSpacing: 2,
        color: "red",
    }
})