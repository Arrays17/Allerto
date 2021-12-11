import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {Header} from '../components/header';
import ServiceButton from '../components/service';

export default function Home() {
  return (
    <View style={styles.body}>
      <TouchableOpacity><ServiceButton title="Police" icon='police-badge' /></TouchableOpacity>
      <TouchableOpacity><ServiceButton title="Hospital" icon='hospital-marker' /></TouchableOpacity>
      <TouchableOpacity><ServiceButton title="Fire Station" icon='fire' /></TouchableOpacity>
      <TouchableOpacity><ServiceButton title="Road and Traffic" icon='traffic-cone' /></TouchableOpacity>
      <TouchableOpacity><ServiceButton title="Red Cross" icon='hospital' /></TouchableOpacity>
      <TouchableOpacity><ServiceButton title="National Disaster" icon='bell' /></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingTop: 10,
    flexDirection: 'row',
    backgroundColor: '#212121',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
});
