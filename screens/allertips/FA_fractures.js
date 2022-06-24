import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
const s = require('../../styles/styles');

export default function Fractures() {
  return (
    <ScrollView style={s.tips}>
      <View>
          <Image
            source={require('../../assets/allertips_images/fracture.jpg')}
            style={s.imageTip}
          />
        </View>
      <View style={s.tipBody}>
      <Text style={s.tipTitle}>FRACTURES{'\n'}</Text>
      <Text style={s.tipContent}>
        Some common causes of fractures include falling, falling from a high place and hitting something. Fractures in the lower limbs often occur when a person slips and falls, and a leg is twisted under the body or bends into a malposition. When reaching for support with a hand at the same time, the weight of the body may also cause a fracture in the wrist or arm.{'\n\n'}
        Fractures may be compound fractures or simple fractures. In compound fractures, the skin is broken and the end of the bone sticks out, and immediate medical attention is necessary. Simple fractures may cause internal bleeding.{'\n\n'}
        <Text style={{fontWeight: "bold"}}>Symptoms</Text>{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Pain, swelling{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Abnormal mobility and malposition{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> External bleeding in compound fractures{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Internal bleeding in simple fractures, causing swelling{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> If the thigh bone is fractured, the injured leg is shorter than the healthy one and twists outward, and cannot be moved{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Symptoms of shock{'\n\n'}
        <Text style={{fontWeight: "bold"}}>First aid for fractures</Text>{'\n'}
        1. Stop the external bleeding in compound fractures.{'\n'}
        2. Use your hands to immobilise and support the fracture in a position as painless as possible.{'\n'}
        3. If an upper limb is fractured, the injured person can use their other hand to support the injured arm against their body, or the hand can be immobilised using the hem of a shirt or a triangular bandage, for example.{'\n'}
        4. Keep the injured person warm.{'\n'}
        5. Ensure that the injured person gets further care. Call 911, if necessary.{'\n'}
        6. Do not move the injured person unnecessarily. Never try to correct a malposition. If it is necessary to move the injured person or the professional help takes too long, a fractured lower limb can be supported using the other leg or a temporary tool, such as a solid piece of board or a stick. In this case, the support must reach over a healthy limb on both sides of the fracture.{'\n\n'}
        If the person is not awake but is breathing normally, turn them to the recovery position in order to secure their breathing. If you suspect a fracture in the spine, only move the injured person if necessary in order to save their life (emergency evacuation). {'\n\n'}
      </Text>
      <Text style={s.tipSource}>Source: Finnish Red Cross</Text>
      </View>
    </ScrollView>
  )
}