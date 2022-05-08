import React from 'react';
import { View } from 'react-native';
import ServiceButton from '../../components/service';
import Button911 from '../../components/btn_911';
const s = require('../../styles/styles');

export default function Emergency({navigation}) {
    return (
      <View style={s.body}>
        <ServiceButton onPress={()=>navigation.navigate("EmergencyList", 
          {
          headerTitle: "Police Stations",
          keyword: "police"
          }
          )} title="Police" icon='police-badge' />
        <ServiceButton onPress={()=>navigation.navigate("EmergencyList", 
          {
          headerTitle: "Hospital",
          keyword: "hospital"
          }
          )} title="Hospital" icon='hospital-marker' />
        <ServiceButton onPress={()=>navigation.navigate("EmergencyList", 
          {
            headerTitle: "Fire Stations",
            keyword: "fire_station"
          }
          )} title="Fire Station" icon='fire' />
        <ServiceButton onPress={()=>navigation.navigate("EmergencyList", 
          {headerTitle: "Road and Traffic"})} title="Road and Traffic" icon='traffic-cone' />
        <ServiceButton onPress={()=>navigation.navigate("EmergencyList", 
          {headerTitle: "Red Cross Hotlines"})} title="Red Cross" icon='hospital' />
        <ServiceButton onPress={()=>navigation.navigate("EmergencyList", 
          {headerTitle: "Disaster Hotlines"})} title="National Disaster" icon='bell' />
        <Button911/>
      </View>
    );
  }