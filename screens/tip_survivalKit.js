import { Text, ScrollView } from 'react-native';
import React from 'react';
const s = require('../styles/styles');

export default function survivalKit() {
  return (
    <ScrollView style={s.tips}>
      <Text style={s.tipTitle}>What Do You Need In A Survival Kit?{'\n'}</Text>
      <Text style={s.tipContent}>
        {'\t'} &#8226; Water: one gallon per person, per day (3-day supply for evacuation, 2-week supply for home) {'\n'}
        {'\t'} &#8226; Food: non-perishable, easy-to-prepare items (3-day supply for evacuation, 2-week supply for home) {'\n'}
        {'\t'} &#8226; Flashlight {'\n'}
        {'\t'} &#8226; Battery-powered or hand-crank radio {'\n'}
        {'\t'} &#8226; Extra batteries {'\n'}
        {'\t'} &#8226; First aid kit {'\n'}
        {'\t'} &#8226; Medications (7-day supply) and medical items {'\n'}
        {'\t'} &#8226; Multi-purpose tool {'\n'}
        {'\t'} &#8226; Sanitation and personal hygiene items{'\n'}
        {'\t'} &#8226; Copies of personal documents (medication list and pertinent medical information, proof of address, deed/lease to home, passports, birth certificates, insurance policies){'\n'}
        {'\t'} &#8226; Cell phone with chargers{'\n'}
        {'\t'} &#8226; Family and emergency contact information{'\n'}
        {'\t'} &#8226; Extra cash{'\n'}
        {'\t'} &#8226; Emergency blanket{'\n'}
        {'\t'} &#8226; Map(s) of the area{'\n'}
      </Text>

      <Text style={s.tipContent}>
      <Text style={{fontWeight: "bold"}}>Consider the needs of all family members and add supplies to your kit:</Text>{'\n'}
        {'\t'} &#8226; Medical supplies (hearing aids with extra batteries, glasses, contact lenses, syringes, etc){'\n'}
        {'\t'} &#8226; Baby supplies (bottles, formula, baby food, diapers){'\n'}
        {'\t'} &#8226; Games and activities for children{'\n'}
        {'\t'} &#8226; Pet supplies (collar, leash, ID, food, carrier, bowl){'\n'}
        {'\t'} &#8226; Two-way radios{'\n'}
        {'\t'} &#8226; Extra set of car keys and house keys{'\n'}
        {'\t'} &#8226; Manual can opener{'\n'}
      </Text>

      <Text style={s.tipContent}>
      <Text style={{fontWeight: "bold"}}>Additional supplies to keep at home or in your survival kit based on the types of disasters common to your area:</Text>{'\n'}
        {'\t'} &#8226; Whistle{'\n'}
        {'\t'} &#8226; N95 or surgical masks{'\n'}
        {'\t'} &#8226; Matches{'\n'}
        {'\t'} &#8226; Rain gear{'\n'}
        {'\t'} &#8226; Towels{'\n'}
        {'\t'} &#8226; Work gloves{'\n'}
        {'\t'} &#8226; Tools/supplies for securing your home{'\n'}
        {'\t'} &#8226; Extra clothing, hat and sturdy shoes{'\n'}
        {'\t'} &#8226; Plastic sheeting{'\n'}
        {'\t'} &#8226; Duct tape{'\n'}
        {'\t'} &#8226; Scissors{'\n'}
        {'\t'} &#8226; Household liquid bleach{'\n'}
        {'\t'} &#8226; Entertainment items{'\n'}
        {'\t'} &#8226; Blankets or sleeping bags{'\n'}{'\n'}
      </Text>
      <Text style={s.tipSource}>Source: American Red Cross</Text>
    </ScrollView>
  )
}