import React from 'react';
import { View } from 'react-native';
import ServiceButton from '../components/service';
const s = require('../styles/styles');

export default function Home({navigation}) {
  return (
    <View style={s.body}>
      <ServiceButton onPress={()=>navigation.navigate("EmergencyList")} title="Police" icon='police-badge' />
      <ServiceButton onPress={()=>navigation.navigate("EmergencyList")} title="Hospital" icon='hospital-marker' />
      <ServiceButton onPress={()=>navigation.navigate("EmergencyList")} title="Fire Station" icon='fire' />
      <ServiceButton onPress={()=>navigation.navigate("EmergencyList")} title="Road and Traffic" icon='traffic-cone' />
      <ServiceButton onPress={()=>navigation.navigate("EmergencyList")} title="Red Cross" icon='hospital' />
      <ServiceButton onPress={()=>navigation.navigate("EmergencyList")} title="National Disaster" icon='bell' />
    </View>
  );
}