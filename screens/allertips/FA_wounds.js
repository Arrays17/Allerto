import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
const s = require('../../styles/styles');

export default function Wounds() {
  return (
    <ScrollView style={s.tips}>
      <View>
          <Image
            source={require('../../assets/allertips_images/wound.jpg')}
            style={s.imageTip}
          />
        </View>
      <View style={s.tipBody}>
      <Text style={s.tipTitle}>WOUNDS{'\n'}</Text>
      <Text style={s.tipContent}>
        A wound is a damage in the skin or mucous membrane, which may be associated with profuse bleeding. The right kind of first aid can reduce bleeding and help a wound heal.{'\n'}
        The healing of the wound is affected by its size and location, cleanliness, and the injury mechanism (wound type). Tattered or dirty wounds or wounds on mobile areas heal slower.{'\n\n'}
        <Text style={{fontWeight: "bold"}}>Some common causes of wounds:</Text>{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Scratch, or flesh wound: graze, falling.{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Puncture wound: needle, nail, or other sharp object.{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Cut: paper, knife.{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Bruise: falling, being hit, being squeezed.{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Bite: the bite of a human or animal.{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Gunshot wound: firearm, nailer, or similar.{'\n\n'}
        Symptoms of a wound inlude bleeding, tattered or neat edges of the wound and a foreign object or dirt in the tissue.{'\n\n'}
        <Text style={{fontWeight: "bold"}}>First aid for wounds</Text>{'\n'}
        1. Stop the visible bleeding by applying pressure to the wound.{'\n'}
        2. Clean the wound under cool running water.{'\n'}
        3. If the wound is a small cut (made by a knife or paper, for example) press the edges together and close the wound with surgical tape.{'\n'}
        4. If there is a foreign object attached to the tissue (for example a splinter or a knife), do not remove it.{'\n'}
        5. Cover the wound with a protective bandage.{'\n'}
        6. Ensure that your tetanus vaccine is valid.{'\n\n'}
        <Text style={{fontWeight: "bold"}}>Seek medical care as soon as possible, if</Text>{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> the wound is tattered, deep, or several centimetres long{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> bone, muscle, or other tissue is visible in the wound{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> there is a foreign object in the wound{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> bleeding cannot be stopped{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> there is dirt in the wound and you are unable to clean it{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> the wound is a bite wound{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> you need a tetanus vaccination{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> the wound is in a joint area or on the face{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> the wound is infected{'\n\n'}
      </Text>
      <Text style={s.tipSource}>Source: Finnish Red Cross</Text>
      </View>
    </ScrollView>
  )
}