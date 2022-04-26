import React from "react";
import { View, Text, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const s = require('../styles/styles')

export default ServiceButton = (props) => {
    return (
        <Pressable onPress={props.onPress}
            style={({pressed}) => [{
                borderColor: pressed ? "orange" : 'white',
                opacity: pressed ? 0.6 : 1
            },
            s.service
            ]}>
                {({ pressed }) => (
                    <View>
                        <View style={s.serviceIconContainer}>
                            <Icon style={pressed ? s.pressed : s.serviceIcon} name={props.icon} size={props.title == "Red Cross" ? 130 : 90}/>
                        </View>
                        <View style={s.serviceTitleContainer}>
                            <Text style={pressed ? s.pressed : s.serviceTitle}>{props.title}</Text>
                        </View>
                    </View>
                )}
        </Pressable>
    )
}