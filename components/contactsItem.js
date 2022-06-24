import React, { useState } from 'react'
import { Image, Pressable, Text, View, Modal, TouchableWithoutFeedback, FlatList } from 'react-native'

const s = require('../styles/styles')

export default ContactsItem = (props) => {
  const [modalVisible, setModalVisible] = useState(false)
  const {familyName, givenName, displayName, phoneNumbers} = props

  let contactNumberText = ''
  let contactImgSrc = ''

  if (props.hasThumbnail) contactImgSrc = props.thumbnailPath

  switch (phoneNumbers.length) {
    case 0:
      contactNumberText = "No number found"
      break;
    case 1:
      contactNumberText = phoneNumbers[0].number
      break;
    case 2:
      contactNumberText = phoneNumbers[0].number + ", " + phoneNumbers[1].number
      break;
    default:
      contactNumberText = phoneNumbers[0].number + ", ... +" + 
        JSON.stringify(phoneNumbers.length-1) + " more"
      break;
  }

  const openModal = () => {
    setModalVisible(true)
  }

  const createImgAlt = () => {
    let imgAlt = (givenName.substring(0, 1)).toUpperCase()

    if (contactNumberText.startsWith(displayName)) return '#'

    if (familyName != '' && familyName != givenName ) {
      return imgAlt += (familyName.substring(0, 1)).toUpperCase()
    }

    let firstName = givenName.split(' ')
    for (let name of firstName) {
      if (name && name != '' && name != firstName[0]) {
        return imgAlt += (name.substring(0,1)).toUpperCase()
      }
    }

    return imgAlt
  }

  const selectNumber = (number) => {
    props.onPress(displayName, number)
    setModalVisible(false)
  }

  return (
    <Pressable 
      onPress={phoneNumbers.length > 1 ? openModal : ()=>selectNumber(phoneNumbers[0].number)}
      style={s.contactsItem}>
        <View style={s.contactDetailsContainer}>
          <Text style={s.itemName} numberOfLines={1}>{displayName}</Text>
          <Text style={s.itemNumber}>{contactNumberText}</Text>
        </View>
        <View style={s.contactImageContainer}>
          {
            (contactImgSrc !== '') ? 
              <Image source={{uri: contactImgSrc}} style={s.contactImg}/>
            : 
              <Text style={s.contactImgAlt}>{createImgAlt()}</Text>
          }
        </View>
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
              <Text style={s.titleText}>{displayName+'\n'}</Text>
            </View>
            {
              phoneNumbers.map((phoneNumber, index)=> {
                return (
                <Pressable onPress={()=>selectNumber(phoneNumber.number)} style={s.modalOption} key={phoneNumber.id}>
                  <Text style={s.text}>{phoneNumber.number}</Text>
                </Pressable>
                )
              })
            }
          </View>
        </View>
      </Modal>
    </Pressable>
  )
}
