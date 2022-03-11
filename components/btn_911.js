import React from 'react';
import { TouchableOpacity, Linking, Platform, Text} from 'react-native';
const s = require('../styles/styles')

export default btn_911 = () => {


    return (
        <TouchableOpacity activeOpacity={0.7} onLongPress={()=>call911()} style={s.btn_911}>
            <Text style={s.text_911}>911</Text>
        </TouchableOpacity>
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