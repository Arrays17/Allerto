import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
const s = require('../../styles/styles');

export default function BLS() {
  return (
    <ScrollView style={s.tips}>
      <View>
          <Image
            source={require('../../assets/allertips_images/bls.jpg')}
            style={s.imageTip}
          />
        </View>
      <View style={s.tipBody}>
      <Text style={s.tipTitle}>What is BLS?{'\n'}</Text>
      <Text style={s.tipContent}>Basic Life Support, or BLS, generally refers to the type of care that first-responders, healthcare providers and public safety professionals provide to anyone who is experiencing cardiac arrest, respiratory distress or an obstructed airway. It requires knowledge and skills in cardiopulmonary resuscitation (CPR), using automated external defibrillators (AED) and relieving airway obstructions in patients of every age.{'\n'}</Text>
      <Text style={s.tipSubTitle}>Assess, Recognize and Care{'\n'}</Text>
      <Text style={s.tipContent}>
        The Assess, Recognize and Care concept is a systematic, continuous approach for rapid assessment, accurate recognition and immediate care in emergency situations. An acutely ill patient’s condition can change rapidly, and deterioration can follow; therefore, frequent assessment, recognition and care are critical.{'\n\n'}
        The Assess, Recognize and Care concept begins with a rapid assessment, which includes:{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Performing a visual survey to assess for safety, formulate an initial impression of the patient and determine the need for additional resources{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Checking responsiveness{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Opening the airway and simultaneously checking for breathing and a pulse if the patient is unresponsive.{'\n\n'}
        After you complete your rapid assessment, provide care based on the conditions found.{'\n\n'}
      </Text>
      <Text style={s.tipSource}>Source: American Red Cross</Text>
      </View>
    </ScrollView>
  )
}