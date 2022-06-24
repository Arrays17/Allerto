import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
const s = require('../../styles/styles');

export default function AED() {
  return (
    <ScrollView style={s.tips}>
      <View>
          <Image
            source={require('../../assets/allertips_images/aed.jpg')}
            style={s.imageTip}
          />
        </View>
      <View style={s.tipBody}>
      <Text style={s.tipTitle}>What is AED?{'\n'}</Text>
      <Text style={s.tipContent}>An AED, or automated external defibrillator, is used to help those experiencing sudden cardiac arrest. It's a sophisticated, yet easy-to-use, medical device that can analyze the heart's rhythm and, if necessary, deliver an electrical shock, or defibrillation, to help the heart re-establish an effective rhythm.{'\n'}</Text>
      <Text style={s.tipTitle}>AED Steps{'\n'}</Text>
      <Text style={s.tipContent}>
        <Text style={{fontWeight: "bold"}}>How to Use An AED</Text>{'\n\n'}
        These AED steps should be used when caring for a non-breathing child aged 8 or older who weighs more than 55 pounds, or an adult.{'\n\n'}
        After checking the scene and ensuring that the person needs help, you should ask a bystander to call 911 for help, then:{'\n\n'}
        1. Complete the CHECK and CALL steps{'\n\n'}
        2. As soon as an AED is available, turn it on and follow the voice prompts{'\n\n'}
        3. Remove clothing and attach pads correctly{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Remove all clothing covering the chest. If necessary, wipe the chest dry{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Place one pad on the upper right side of the chest{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Place the other pad on the lower left side of the chest, a few inches below the left armpit{'\n\n'}
        <Text style={{fontWeight: "bold", fontStyle: "italic"}}>Note: If the pads may touch, place one pad in the middle of the chest and the other pad on the back, between the shoulder blades</Text>{'\n\n'}
        4. Plug the pad connector cable into the AED, if necessary {'\n\n'}
        5. Prepare to let the AED analyze the heart’s rhythm {'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Make sure no one is touching the person{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Say, “CLEAR!” in a loud, commanding voice{'\n\n'}
        6. GDeliver a shock, if the AED determines one is needed{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Make sure no one is touching the person{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Say, “CLEAR!” in a loud, commanding voice{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Push the “shock” button to deliver the shock{'\n\n'}
        7. After the AED delivers the shock, or if no shock is advised, immediately start CPR, beginning with compressions {'\n\n'}
      </Text>
      <Text style={s.tipSource}>Source: American Red Cross</Text>
      </View>
    </ScrollView>
  )
}