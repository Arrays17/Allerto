import React from 'react';
import { View } from 'react-native';
import ServiceButton from '../components/service';
const s = require('../styles/styles');

export default function Home() {
  return (
    <View style={s.body}>
      <ServiceButton title="Police" icon='police-badge' />
      <ServiceButton title="Hospital" icon='hospital-marker' />
      <ServiceButton title="Fire Station" icon='fire' />
      <ServiceButton title="Road and Traffic" icon='traffic-cone' />
      <ServiceButton title="Red Cross" icon='hospital' />
      <ServiceButton title="National Disaster" icon='bell' />
    </View>
  );
}