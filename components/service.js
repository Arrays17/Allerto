import React from "react";
import { View, Text, Pressable } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const s = require('../styles/styles')

export default ServiceButton = (props) => {
    return (
        <LinearGradient colors={['#FF8E00','#D04A07']} style={s.service}>
            <Pressable onPress={props.onPress}
                style={({pressed}) => [{
                    opacity: pressed ? 0.8 : 1,
                    width: '100%',
                    height: '100%'
                }
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