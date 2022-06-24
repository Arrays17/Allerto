import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
const s = require('../../styles/styles');

export default function Seizures() {
  return (
    <ScrollView style={s.tips}>
      <View>
          <Image
            source={require('../../assets/allertips_images/seizure.jpg')}
            style={s.imageTip}
          />
        </View>
      <View style={s.tipBody}>
      <Text style={s.tipTitle}>SEIZURES{'\n'}</Text>
      <Text style={s.tipContent}>
        Dysfunctions in the brain may cause unintentional muscle spasms and seizures. A person may be seizing for several reasons: high fever, poisoning, head injury, epilepsy, cerebral haemorrhage or low blood sugar in diabetics.{'\n\n'}
        Seizures can also be linked to cardiac arrest.{'\n\n'}
        <Text style={{fontWeight: "bold"}}>Symptoms</Text>{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> The person loses consciousness and falls, and their limbs and body seize.{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> The seizure usually only lasts for 1–2 minutes.{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> The person often wakes up immediately but may be incoherent.{'\n\n'}
        <Text style={{fontWeight: "bold"}}>First aid for seizures</Text>{'\n'}
        1. Call 911 immediately. If you know that the victim suffers from epilepsy, call 911 if the seizure lasts for more than five minutes or repeats.{'\n'}
        2. Do not try to prevent the seizure movement, but ensure that the victim does not hit their head or otherwise hurt themselves.{'\n'}
        3. When the seizure allows you to, turn the victim onto their side.{'\n'}
        4. When the seizure is over, check whether the victim is breathing normally, and turn them into the recovery position.{'\n'}
        5. In case of a child’s fever-related seizure, contact a doctor.{'\n'}
        6. If the seizure passes by itself, ensure that the victim has entirely recovered before leaving them.{'\n\n'}
      </Text>
      <Text style={s.tipSource}>Source: Finnish Red Cross</Text>
      </View>
    </ScrollView>
  )
}