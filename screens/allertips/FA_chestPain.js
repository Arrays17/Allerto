import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
const s = require('../../styles/styles');

export default function ChestPain() {
  return (
    <ScrollView style={s.tips}>
      <View>
          <Image
            source={require('../../assets/allertips_images/chestpain.jpg')}
            style={s.imageTip}
          />
        </View>
      <View style={s.tipBody}>
      <Text style={s.tipTitle}>CHEST PAIN{'\n'}</Text>
      <Text style={s.tipContent}>
        Chest pain can be caused by coronary thrombosis, often called a heart attack, which is caused by blockage of the coronary arteries. An angina pectoris attack might also lead to chest pain.{'\n\n'}
        <Text style={{fontWeight: "bold"}}>Symptoms of chest pain</Text>{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Pain in the upper body, which may radiate to the left armpit, arm, and neck.{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> The person is often in a cold sweat, may be nauseous, and may have trouble breathing.{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Particularly women display intense tiredness, nausea, vomiting, or back pain.{'\n\n'}
        <Text style={{fontWeight: "bold"}}>First aid for someone experiencing chest pain</Text>{'\n'}
        1. Calm the person down and help them to rest, for example in a semi-seated position.{'\n'}
        2. Call 911 immediately. If the person is carrying their own nitrate medication (Nitro®), help them to take it. If the medication does not help within a few minutes, call 112.{'\n'}
        3. Give the person 250 mg of a medicine containing acetylsalicylic acid (Disperin®, Aspirin®) to be chewed if they are not allergic to the medicine.{'\n'}
        4. Monitor their breathing and circulation.{'\n'}
        5. If the person goes lifeless, start resuscitation with 30 presses and 2 blows, and notify the Emergency Response Centre about the change in the situation.{'\n\n'}
      </Text>
      <Text style={s.tipSource}>Source: Finnish Red Cross</Text>
      </View>
    </ScrollView>
  )
}