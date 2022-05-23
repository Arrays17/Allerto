import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'

import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const s = require('../styles/styles');

export default function AuthScreen({navigation}) {
    const [confirm, setConfirm] = useState(null);
    const [code, setCode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    async function signInWithPhoneNumber(phoneNumber) {
        console.log(phoneNumber)
        const phoneWithAreaCode = phoneNumber.replace(/^0+/, '+63');
        console.log(phoneWithAreaCode)
        const confirmation = await auth().signInWithPhoneNumber(phoneWithAreaCode, true).catch(error => console.log(error));
        setConfirm(confirmation);
    }

    async function saveUser(user) {
        try {
            const userDetails = JSON.stringify(user)
            console.log(userDetails)
            await AsyncStorage.setItem('user', userDetails)
        } catch (e) {

        }
    }

    async function confirmCode() {
        try {
          const user = await confirm.confirm(code);
          console.log(user)
          if (user) {
              saveUser(user)
              navigation.navigate('Home')
          }
        } catch (error) {
          console.log('Invalid code.');
        }
    }

    function onChanged (text) {
        if (!confirm)
            setPhoneNumber(text.replace(/[^0-9]/g,''))
        else
            setCode(text.replace(/[^0-9]/g,''))
    }

    if (!confirm) {
        return (
            <KeyboardAvoidingView style={s.authBody}>
                <View style={s.authContainer}>
                    <Text style={s.authText}>
                        Enter your 11-digit phone number.
                    </Text>
                    <Text style={s.subText}>
                        Example: 09XXXXXXXXX
                    </Text>
                    <TextInput 
                        placeholder='Enter Phone Number'
                        keyboardType='number-pad'
                        maxLength={11}
                        style={s.textInput}
                        value={phoneNumber}
                        onChangeText={(text) => onChanged(text)}
                    />
                    <TouchableOpacity 
                        activeOpacity={0.8} 
                        style={s.button}
                        onPress={() => signInWithPhoneNumber(phoneNumber)}
                    >
                        <Text style={s.buttonText}>
                            Send Code
                        </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }

    return (
        <KeyboardAvoidingView style={s.authBody}>
            <View style={s.authContainer}>
                    <Text style={s.authText}>
                        Enter the 6-digit verification number sent to your number.
                    </Text>
                    <TextInput 
                        placeholder='Enter Verification Code'
                        keyboardType='number-pad'
                        maxLength={6}
                        style={s.textInput}
                        value={code}
                        onChangeText={(text) => onChanged(text)}
                    />
                    <TouchableOpacity 
                        activeOpacity={0.8} 
                        style={s.button}
                        onPress={() => confirmCode(code)}
                    >
                        <Text style={s.buttonText}>
                            Confirm Code
                        </Text>
                    </TouchableOpacity>
                </View>
        </KeyboardAvoidingView>
    )
    
}