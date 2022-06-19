import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
const s = require('../../styles/styles');

export default function Fainting() {
  return (
    <ScrollView style={s.tips}>
      <View>
          <Image
            source={require('../../assets/allertips_images/faint.jpg')}
            style={s.imageTip}
          />
        </View>
      <View style={s.tipBody}>
      <Text style={s.tipTitle}>FAINTING{'\n'}</Text>
      <Text style={s.tipContent}>
        Fainting is caused by a momentary decrease in blood flow to the brain.{'\n\n'}
        The brain requires plenty of oxygen, which is supplied to it by the blood in the arteries. If the amount of blood in the brain is reduced, the person faints, or loses consciousness for a moment. Fainting can result from a drop in fluid balance, prolonged standing or extreme emotional reaction.{'\n\n'}
        <Text style={{fontWeight: "bold"}}>Symptoms</Text>{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Rapid deterioration of the hearing, ringing in the ears{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Trouble seeing, blurred vision{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Nausea, dizziness{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Paleness{'\n\n'}
        <Text style={{fontWeight: "bold"}}>First aid for fainting</Text>{'\n'}
        1. Ensure that the person helped is able to wake up and breathe normally immediately after fainting.{'\n'}
        2. Help the person to rest.{'\n'}
        3. Check whether the person hurt themselves.{'\n'}
        4. Monitor their condition.{'\n'}
      </Text>
      <Text style={s.tipSource}>Source: Finnish Red Cross</Text>
      </View>
    </ScrollView>
  )
}