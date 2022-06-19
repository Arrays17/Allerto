import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
const s = require('../../styles/styles');

export default function Nosebleed() {
  return (
    <ScrollView style={s.tips}>
      <View>
          <Image
            source={require('../../assets/allertips_images/nosebleed.jpg')}
            style={s.imageTip}
          />
        </View>
      <View style={s.tipBody}>
      <Text style={s.tipTitle}>NOSEBLEED{'\n'}</Text>
      <Text style={s.tipContent}>
        A nosebleed can be caused by the excessive blowing of one's nose, dry mucous membranes in the nose or a blow to the nose. Symptoms of a nosebleed include bleeding from one or both nostrils and nausea.{'\n\n'}
        <Text style={{fontWeight: "bold"}}>First aid for nosebleed</Text>{'\n'}
        1. Ask the person helped to sit down and lean forward. This prevents the blood from flowing to the throat. {'\n'}
        2. Ask the person to blow their nose clear of any clotted blood.{'\n'}
        3. Push the bleeding nostril to the nasal cartilage for approximately 15 minutes.{'\n'}
        4. If the bleeding does not stop, help the person to medical care.{'\n\n'}
      </Text>
      <Text style={s.tipSource}>Source: Finnish Red Cross</Text>
      </View>
    </ScrollView>
  )
}