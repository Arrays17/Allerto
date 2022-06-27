import React from 'react';
import { TouchableOpacity, Linking, Platform, Text} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
const s = require('../styles/styles')

export default btn_911 = () => {


    return (
        <LinearGradient colors={['#FF8E00','#D04A07']} style={s.btn_911}>
            <TouchableOpacity style={{flex: 1, width: '100%', height: '100%', justifyContent: 'center'}} activeOpacity={0.7} onPress={()=>call911()}>
                <Text style={s.text_911}>911</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}

function call911() {
    if (Platform.OS !== 'android'){
        Linking.openURL(`telprompt:${911}`)
    }
    else {
        Linking.openURL(`tel:${911}`)
    }

}