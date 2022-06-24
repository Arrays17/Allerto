import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
const s = require('../../styles/styles');

export default function RoadSafety() {
  return (
    <ScrollView style={s.tips}>
      <View>
          <Image
            source={require('../../assets/allertips_images/roadsafety.jpg')}
            style={s.imageTip}
          />
        </View>
      <View style={s.tipBody}>
      <Text style={s.tipTitle}>ROAD SAFETY{'\n'}</Text>
      <Text style={s.tipContent}>
      <Text style={{fontWeight: "bold"}}>Prepare for Driving</Text>{'\n'}
      <Text style={{color: 'orange'}}>&#8226;</Text> Carry a Disaster Supplies Kit in your trunk.{'\n'}
      <Text style={{color: 'orange'}}>&#8226;</Text> Pack high protein snacks, water, First Aid kit, flashlight, small battery-operated radio, an emergency contact card with names and phone numbers, extra prescription medications and important documents or information you may need.{'\n'}
      <Text style={{color: 'orange'}}>&#8226;</Text> Let someone know your destination, your route, and when you expect to arrive. If your car gets stuck along the way, help can be sent along your predetermined route.{'\n'}
      <Text style={{color: 'orange'}}>&#8226;</Text> Find out what disasters may occur in the place where you are traveling, especially if they are disasters you have never experienced before. Find out how you would get information in the event of a disaster (local radio systems, emergency alert systems).{'\n'}
      <Text style={{color: 'orange'}}>&#8226;</Text> Pay attention to the weather forecast for your destination. Travel and weather web sites can help you avoid storms and other regional challenges that could impact your safety.{'\n'}
      <Text style={{color: 'orange'}}>&#8226;</Text> Don’t let your vehicle’s gas tank get too low.{'\n'}
      <Text style={{color: 'orange'}}>&#8226;</Text> If you are taking your pet with you, there are special things you should know to make your trip more enjoyable.{'\n'}{'\n'}
      <Text style={{fontWeight: "bold"}}>On the Highway</Text>{'\n'}
      <Text style={{color: 'orange'}}>&#8226;</Text> Buckle up, slow down, don’t drive impaired.{'\n'}
      <Text style={{color: 'orange'}}>&#8226;</Text> Be well rested and alert.{'\n'}
      <Text style={{color: 'orange'}}>&#8226;</Text> Use caution in work zones.{'\n'}
      <Text style={{color: 'orange'}}>&#8226;</Text> Give your full attention to the road. Avoid distractions such as cell phones.{'\n'}
      <Text style={{color: 'orange'}}>&#8226;</Text> Observe speed limits – driving too fast or too slow can increase your chance of being in a collision.{'\n'}
      <Text style={{color: 'orange'}}>&#8226;</Text> Make frequent stops. During long trips, rotate drivers. If you’re too tired to drive, stop and get some rest.{'\n'}
      <Text style={{color: 'orange'}}>&#8226;</Text> Be respectful of other motorists and follow the rules of the road.{'\n'}
      <Text style={{color: 'orange'}}>&#8226;</Text> Don’t follow another vehicle too closely.{'\n'}
      <Text style={{color: 'orange'}}>&#8226;</Text> If you plan on drinking, designate a driver who won’t drink.{'\n'}
      <Text style={{color: 'orange'}}>&#8226;</Text> Clean your headlights, taillights, signal lights and windows to help you see, especially at night.{'\n'}
      <Text style={{color: 'orange'}}>&#8226;</Text> Turn your headlights on as dusk approaches, or if you are using your windshield wipers due to inclement weather.{'\n'}
      <Text style={{color: 'orange'}}>&#8226;</Text> Don’t overdrive your headlights.{'\n'}
      <Text style={{color: 'orange'}}>&#8226;</Text> If you have car trouble, pull off the road as far as possible.{'\n'}{'\n'}
      </Text>
      <Text style={s.tipSource}>Source: American Red Cross</Text>
      </View>
    </ScrollView>
  )
}