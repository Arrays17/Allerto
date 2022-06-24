import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
const s = require('../../styles/styles');

export default function SurvivalKit() {
  return (
    <ScrollView style={s.tips}>
      <View>
          <Image
            source={require('../../assets/allertips_images/survivalkit.jpg')}
            style={s.imageTip}
          />
        </View>
      <View style={s.tipBody}>
        <Text style={s.tipTitle}>SURVIVAL KIT{'\n'}</Text>
        <Text style={s.tipContent}>Being prepared means being equipped with the proper supplies you may need in the event of an emergency or disaster. Keep your supplies in an easy-to-carry emergency preparedness kit that you can use at home or take with you in case you must evacuate.{'\n\n'}</Text>
        <Text style={s.tipSubTitle}>What Do You Need In A Survival Kit?{'\n'}</Text>
        <Text style={s.tipContent}>
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Water: one gallon per person, per day (3-day supply for evacuation, 2-week supply for home) {'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Food: non-perishable, easy-to-prepare items (3-day supply for evacuation, 2-week supply for home) {'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Flashlight {'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Battery-powered or hand-crank radio {'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Extra batteries {'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> First aid kit {'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Medications (7-day supply) and medical items {'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Multi-purpose tool {'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Sanitation and personal hygiene items{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Copies of personal documents (medication list and pertinent medical information, proof of address, deed/lease to home, passports, birth certificates, insurance policies){'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Cell phone with chargers{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Family and emergency contact information{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Extra cash{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Emergency blanket{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Map(s) of the area{'\n'}
      </Text>

      <Text style={s.tipContent}>
      <Text style={{fontWeight: "bold"}}>Consider the needs of all family members and add supplies to your kit:</Text>{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Medical supplies (hearing aids with extra batteries, glasses, contact lenses, syringes, etc){'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Baby supplies (bottles, formula, baby food, diapers){'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Games and activities for children{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Pet supplies (collar, leash, ID, food, carrier, bowl){'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Two-way radios{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Extra set of car keys and house keys{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Manual can opener{'\n'}
      </Text>

      <Text style={s.tipContent}>
      <Text style={{fontWeight: "bold"}}>Additional supplies to keep at home or in your survival kit based on the types of disasters common to your area:</Text>{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Whistle{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> N95 or surgical masks{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Matches{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Rain gear{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Towels{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Work gloves{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Tools/supplies for securing your home{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Extra clothing, hat and sturdy shoes{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Plastic sheeting{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Duct tape{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Scissors{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Household liquid bleach{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Entertainment items{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Blankets or sleeping bags{'\n'}{'\n'}
      </Text>
      <Text style={s.tipSource}>Source: American Red Cross</Text>
      </View>
    </ScrollView>
  )
}