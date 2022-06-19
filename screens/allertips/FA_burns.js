import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
const s = require('../../styles/styles');

export default function Burns() {
  return (
    <ScrollView style={s.tips}>
      <View>
          <Image
            source={require('../../assets/allertips_images/burns.jpg')}
            style={s.imageTip}
          />
        </View>
      <View style={s.tipBody}>
      <Text style={s.tipTitle}>BURNS{'\n'}</Text>
      <Text style={s.tipContent}>
        A burn is tissue damage caused by heat or a corrosive chemical substance, in which damage is caused to the skin and possibly the tissues beneath it. If the skin is not cooled, the injury will spread to the deeper layers.{'\n\n'}
        Tissue damage can be caused by a hot object, liquid or steam. Other causes include a corrosive substance, radiation and electricity.{'\n\n'}
        <Text style={{fontWeight: "bold"}}>Symptoms</Text>{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Superficial burn injury: the skin is red, dry, swollen, and sore{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Deep burn injury: the skin is red and swollen, blisters form in the area. Extremely badly burned skin is dry, hard, charred, and numb.{'\n\n'}
        <Text style={{fontWeight: "bold"}}>First aid for a burn</Text>{'\n'}
        1. Cool the burn immediately with cool water for approximately 10 minutes.{'\n'}
        2. If the injured area is extensive or the injured person is a child, be sure not to cool too much and keep the injured person otherwise warm.{'\n'}
        3. A burn can be covered lightly using a clean bandage. Do not break the blisters. Superficial burns usually heal by themselves in a few weeks.{'\n\n'}
        <Text style={{fontWeight: "bold"}}>Medical care is needed if the burn is</Text>{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> extensive or deep{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> blistered and larger than the palm of the injured person{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> on the face, joint areas, mucous membranes, or in the respiratory tracts{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> caused by electricity, a chemical substance, radiation or steam{'\n\n'}
      </Text>
      <Text style={s.tipSource}>Source: Finnish Red Cross</Text>
      </View>
    </ScrollView>
  )
}