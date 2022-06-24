import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
const s = require('../../styles/styles');

export default function Poisoning() {
  return (
    <ScrollView style={s.tips}>
      <View>
          <Image
            source={require('../../assets/allertips_images/poison.jpg')}
            style={s.imageTip}
          />
        </View>
      <View style={s.tipBody}>
      <Text style={s.tipTitle}>POISONING{'\n'}</Text>
      <Text style={s.tipContent}>
        Poisoning can be caused by a variety of substances: alcohol and other intoxicants, medication, mushrooms, poisonous berries or domestic detergents and chemicals. Carbon monoxide and other gases can also cause poisoning if inhaled.{'\n\n'}
        The severity and speed of appearance of poisoning symptoms depends on the substance and amount, as well as the method in which it entered the body. Substances can enter the body through the mouth, airways, skin or eyes, or be injected.{'\n\n'}
        <Text style={{fontWeight: "bold"}}>Symptoms</Text>{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Nausea, vomiting{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Skin symptoms{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Disorientation{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Headache, dizziness{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Shortness of breath, increased heartbeat{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Seizures, unconsciousness{'\n\n'}
        <Text style={{fontWeight: "bold"}}>First aid for poisoning</Text>{'\n'}
        1. Call National Poison Management and Control Center, {'\n'}tel. 025241078. In case of severe symptoms, call 911.{'\n'}
        2. Find out which substance caused the symptoms.{'\n'}
        3. Find out how it got into the body.{'\n'}
        4. Find out how much of the substance got into the body.{'\n'}
        5. Find out when the exposure took place.{'\n'}
        6. If you are unable to wake up the person but they are breathing normally, turn them into the recovery position.{'\n'}
        7. If the person cannot be woken up and does not breathe normally, start resuscitation.{'\n\n'}
        <Text style={{fontWeight: "bold"}}>If the person has swallowed poison</Text>{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Clean and rinse the mouth.{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Do not try to make the person vomit.{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> If necessary, give them medicinal charcoal.{'\n\n'}
        <Text style={{fontWeight: "bold"}}>If the person has inhaled poison</Text>{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Move the person to fresh air.{'\n\n'}
        <Text style={{fontWeight: "bold"}}>If the poison is on the skin or in the eyes</Text>{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Rinse the poison off the skin or eyes using plenty of water.{'\n\n'}
      </Text>
      <Text style={s.tipSource}>Source: Finnish Red Cross</Text>
      </View>
    </ScrollView>
  )
}