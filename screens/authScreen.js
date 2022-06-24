import React, { useState, useEffect } from 'react';
import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, Alert } from 'react-native'

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'
import AsyncStorage from '@react-native-async-storage/async-storage';

const s = require('../styles/styles');

export default function AuthScreen({navigation}) {
    const [confirm, setConfirm] = useState(null);
    const [code, setCode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [errorMsg, setErrorMsg] = useState(null);

    async function signInWithPhoneNumber(phoneNumber) {
        const phoneWithAreaCode = phoneNumber.replace(/^0+/, '+63');
        const confirmation = await auth().signInWithPhoneNumber(phoneWithAreaCode, true)
            .catch(error => {
                console.log(error.message)
                setErrorMsg('Invalid Phone Number')
            });
        confirmation ? setErrorMsg(null) : null // Clear Error Message on Verified Phone Number
        setConfirm(confirmation)
    }

    async function saveUser(user) {
        try {
            if (user.additionalUserInfo.isNewUser) {
                const _user = user.user
                await firestore().collection('users').doc(user.user.uid)
                    .set({
                        displayName: _user.displayName,
                        email: _user.email,
                        emailVerified: _user.emailVerified,
                        isAnonymous: _user.isAnonymous,
                        metadata: {
                          creationTime: _user.metadata.creationTime,
                          lastSignInTime: _user.metadata.lastSignInTime,
                        },
                        phoneNumber: _user.phoneNumber,
                        photoURL: _user.photoURL,
                        providerId: _user.providerId,
                        tenantId: _user.tenantId,
                        uid: _user.uid,
                    })
                    .then(() => {
                        console.log("New User Added to Users Database");
                    })
                    .catch((error)=>{
                        console.warn("Adding User to Firestore Failed");
                    })
            }

            const userDetails = JSON.stringify(user.user)
            console.log(userDetails)
            await AsyncStorage.setItem('user', userDetails)
        } catch (e) {
            console.log(e)
        }
    }

    async function confirmCode() {
        try {
          const user = await confirm.confirm(code).catch(error => setErrorMsg(error.message));
            if (user) {
                saveUser(user)
                navigation.replace('Home')
            }
        } catch (error) {
            setErrorMsg('Invalid code.');
        }
    }

    function onChanged (text) {
        if (!confirm)
            setPhoneNumber(text.replace(/[^0-9]/g,''))
        else
            setCode(text.replace(/[^0-9]/g,''))
    }

    function clearInputs() {
        if (!confirm) 
            return setPhoneNumber('')
        return setCode('')
    }

    useEffect(()=> {
        if (!confirm)
            return setPhoneNumber('')
        setCode('')
    }, [errorMsg])

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
                    {
                        errorMsg !== null ? (
                            <Text style={s.errorText}>{errorMsg}</Text>
                        ) : null
                    }
                    <TouchableOpacity 
                        activeOpacity={0.8} 
                        style={phoneNumber.length !== 11 ? s.buttonDisabled : s.button}
                        disabled={phoneNumber.length !== 11 ? true : false}
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
                    {
                        errorMsg !== null ? (
                            <Text style={s.errorText}>{errorMsg}</Text>
                        ) : null
                    }
                    <TouchableOpacity 
                        activeOpacity={0.8} 
                        style={code.length !== 6 ? s.buttonDisabled : s.button}
                        disabled={code.length !== 6 ? true : false}
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