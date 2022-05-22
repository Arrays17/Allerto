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
        const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
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

    if (!confirm) {
        return (
            <KeyboardAvoidingView>
                <View style={s.authContainer}>
                    <TextInput 
                        placeholder='Enter Phone Number'
                        style={s.textInput}
                        value={phoneNumber}
                        onChangeText={text => setPhoneNumber(text)}
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
        <KeyboardAvoidingView>
            <View style={s.authContainer}>
                    <TextInput 
                        placeholder='Enter Verification Code'
                        style={s.textInput}
                        value={code}
                        onChangeText={text => setCode(text)}
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