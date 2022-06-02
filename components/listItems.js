import React, {useEffect, useState} from "react";
import { View, Text, TouchableOpacity, Linking, Platform, Alert, Modal, TouchableWithoutFeedback} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const favoritesController = require('../controllers/favoritesController')
const s = require('../styles/styles')

export default function ListItem(props) {
    const [distanceSettings, setDistanceSettings] = useState(null)
    const [modalVisible, setModalVisible] = useState(false)
    const [isOnFavorites, setIsOnFavorites] = useState(false)
    const storeKey = 'favorites_' + props.keyword
    const number = props.number
    const address = props.address
    const name = props.name
    const distanceKilometers = props.distance.kilometers
    const distanceMiles = props.distance.miles
    const coordinates = props.coordinates
    const data = {
        name: name,
        number: number,
        address: address,
        coordinates: coordinates,
        distance: {
            kilometers: distanceKilometers,
            miles: distanceKilometers
        }
    }
    
    const onRefresh = () => {
        props.refresh()
    } 

    async function getSettings() {
        const settings = await AsyncStorage.getItem('settingsConfig')
        if (settings) {
            let settingsParsed = JSON.parse(settings)
            let distanceSetting = settingsParsed.distancePreference
            setDistanceSettings(distanceSetting)
        }
    }

    async function checkIfOnFavorites() {
        await favoritesController.favoritesContains(storeKey, data)
            .then(result => {
                setIsOnFavorites(result)
            })
    }

    function openModal() {
        checkIfOnFavorites(storeKey, data)
        setModalVisible(true)
    }

    function closeModal() {
        onRefresh()
        setModalVisible(false)
    }

    useEffect(() => {
        getSettings()
        checkIfOnFavorites()
    }, [])

    return (
        <>
            <TouchableOpacity activeOpacity={0.8} onPress={() => callNumber(number)} onLongPress={() => openModal()}>
                <View style={s.itemContainer}>
                    <Text numberOfLines={1} style={s.itemName}>{name}</Text>
                    <Text style={s.itemDistance}>
                        {
                            (distanceSettings === 'miles') ? (distanceMiles + " mi")
                            : (distanceKilometers + " km")} away</Text>
                    <Text style={s.itemNumber}>{number ? number : address}</Text>
                </View>
            </TouchableOpacity>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {setModalVisible(!modalVisible)}}
            >
                <TouchableWithoutFeedback onPress={() => {setModalVisible(false)}}>
                    <View style={s.modalOverlay} />
                </TouchableWithoutFeedback>
                <View style={s.modalContainer}>
                    <View style={s.modalBody}>
                        <View style={s.modalTitle}>
                            <Text style={s.titleText}>{name}</Text>
                        </View>
                        { number ? 
                            (
                                <View style={s.modalOption}>
                                    <TouchableOpacity activeOpacity={0.8} onPress={() => callNumber(number)}>
                                        <Text style={s.text}>Call {number}</Text>
                                    </TouchableOpacity>
                                </View>
                            ) : 
                            (
                                <Text style={s.statusText}>
                                    No Number Found    
                                </Text>
                            )
                        }
                        <View style={s.modalOption}>
                            <TouchableOpacity activeOpacity={0.5} onPress={() => openMaps(name, coordinates.latitude, coordinates.longitude)}>
                                <Text style={s.text}>Open in Maps</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={s.modalOption}>
                            {isOnFavorites ? (
                                    <TouchableOpacity activeOpacity={0.8} onPress={() => {
                                        favoritesController.removeFromFavorites(storeKey, data)
                                        closeModal()
                                        }
                                    }>
                                        <Text style={s.text}>Remove from Favorites</Text>
                                    </TouchableOpacity>
                                ) :
                                    <TouchableOpacity activeOpacity={0.8} onPress={() => {
                                        favoritesController.addToFavorites(storeKey, data)
                                        closeModal()
                                        }
                                    }>
                                        <Text style={s.text}>Add to Favorites</Text>
                                    </TouchableOpacity>
                            }
                        </View>
                    </View>
                </View>
        </Modal>
      </>
    )
}

function callNumber(number) {
    console.log('Calling ' + number)
    let phoneNumber = ''
    if (Platform.OS !== 'android'){
        phoneNumber = `telprompt:${number}`
    }
    else {
        phoneNumber = `tel:${number}`
    }

    Linking.canOpenURL(phoneNumber)
        .then(supported => {
            if (!supported) {
                Alert.alert('Phone number is not supported');
            } 
            else {
                return Linking.openURL(phoneNumber);
            }
        })
        .catch(err => console.log(err));
}

function openMaps(name, lat, lng) {
    const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:' });
    const latLng = `${lat},${lng}`;
    const label = name;
    const url = Platform.select({
        ios: `${scheme}${label}@${latLng}`,
        android: `${scheme}${latLng}?q=${label}`
    })

    console.log(url)

    Linking.canOpenURL(url)
        .then(supported => {
            console.log(supported)
            if (!supported) return Alert.alert("Can't Open Maps...")

            Linking.openURL(url)
        })
        .catch((err) => {
            console.log(err.message)
        })
}