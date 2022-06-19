import React from "react";
import { View, Text, Pressable } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const s = require('../styles/styles')

export default ServiceButton = (props) => {
    return (
        <LinearGradient colors={['#fe8c00','#f83600']} style={s.service}>
        <Pressable onPress={props.onPress}
            style={({pressed}) => [{
                borderColor: pressed ? "orange" : 'white',
                opacity: pressed ? 0.6 : 1
            },
            <LinearGradient colors={['#bdc3c7','#2c3e50']} style={s.service}/>
            ]}>
                {({ pressed }) => (
                    <>
                        <View style={s.serviceIconContainer}>
                            <Icon style={pressed ? s.pressed : s.serviceIcon} name={props.icon} size={props.title == "Red Cross" ? 130 : 90}/>
                        </View>
                        <View style={s.serviceTitleContainer}>
                            <Text style={pressed ? s.pressed : s.serviceTitle}>{props.title}</Text>
                        </View>
                    </>
                )}
        </Pressable>
        </LinearGradient>
    )
}