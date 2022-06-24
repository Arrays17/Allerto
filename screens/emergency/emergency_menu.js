import React from 'react';
import { View } from 'react-native';
import ServiceButton from '../../components/service';
import Button911 from '../../components/btn_911';
import { useEffect } from 'react';
const s = require('../../styles/styles');

const LocationController = require('../../controllers/locationController')
const TrackerController = require('../../controllers/trackerController')

export default function Emergency({navigation}) 

  useEffect(async ()=> {
    await LocationController.requestForegroundPermissions()
    await TrackerController.requestContactsPermission()
  }, [])

  return (
    <View style={s.menu}>
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
        {
          headerTitle: "Road and Traffic",
          keyword: "road_traffic"
        }
        )} title="Road and Traffic" icon='traffic-cone' />
      <ServiceButton onPress={()=>navigation.navigate("EmergencyList", 
        {
          headerTitle: "Red Cross Hotlines",
          keyword: "red_cross"
        }
        )} title="Red Cross" icon='hospital' />
      <ServiceButton onPress={()=>navigation.navigate("EmergencyList", 
        {
          headerTitle: "Disaster Hotlines",
          keyword: "disaster"
        }
        )} title="National Disaster" icon='bell' />
      <Button911/>
    </View>
  );
}
