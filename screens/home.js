import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import ServiceButton from '../components/service';
const s = require('../styles/styles');

export default function Home() {
  const title = "Allerto"


  return (
    <View style={s.body}>
      <TouchableOpacity><ServiceButton title="Police" icon='police-badge' /></TouchableOpacity>
      <TouchableOpacity><ServiceButton title="Hospital" icon='hospital-marker' /></TouchableOpacity>
      <TouchableOpacity><ServiceButton title="Fire Station" icon='fire' /></TouchableOpacity>
      <TouchableOpacity><ServiceButton title="Road and Traffic" icon='traffic-cone' /></TouchableOpacity>
      <TouchableOpacity><ServiceButton title="Red Cross" icon='hospital' /></TouchableOpacity>
      <TouchableOpacity><ServiceButton title="National Disaster" icon='bell' /></TouchableOpacity>
    </View>
  );
}