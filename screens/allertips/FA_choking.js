import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
const s = require('../../styles/styles');

export default function Choking() {
  return (
    <ScrollView style={s.tips}>
      <View>
          <Image
            source={require('../../assets/allertips_images/choking.jpg')}
            style={s.imageTip}
          />
        </View>
      <View style={s.tipBody}>
        <Text style={s.tipTitle}>CHOKING{'\n'}</Text>
        <Text style={s.tipContent}>Choking occurs when a foreign object lodges in the throat or windpipe, blocking the flow of air. In adults, a piece of food often is the culprit. Young children often swallow small objects. Because choking cuts off oxygen to the brain, give first aid as quickly as possible.{'\n'}</Text>
      <Text style={s.tipTitle}>Adult{'\n'}</Text>
      <Text style={s.tipContent}>
        <Text style={{fontWeight: "bold"}}>First aid for an adult with a foreign object in the airways</Text>{'\n'}
        1. Support the person’s body and bend their upper body downwards. Then, slap them firmly between the shoulder blades five times.{'\n'}
        2. If the foreign object is not removed from the throat and you are alone, call 911.{'\n'}
        3. Continue first aid with abdominal thrusts, i.e. the Heimlich manoeuvre. Stand behind the person and place one fist below their diaphragm. Grab your fist with your other hand. Thrust sharply inwards and upwards. Repeat five times, if necessary.{'\n'}
        4. If the obstruction is not removed, alternate between five slaps between the shoulder blades and five thrusts.{'\n'}
        5. Start resuscitation if the person loses consciousness and is not breathing normally. Notify the Emergency Response Centre about the change in the situation. {'\n\n'}
      </Text>
      <Text style={s.tipTitle}>Child{'\n'}</Text>
      <Text style={s.tipContent}>
        <Text style={{fontWeight: "bold"}}>First aid for children over 1 year</Text>{'\n'}
        1. Take the child on your lap on their stomach, with their head lower than their body.{'\n'}
        2. Hit between the shoulder blades firmly, but carefully, five times.{'\n'}
        3. If the hits do not remove the foreign object from the throat, call 112. Put the phone on speaker and continue helping.{'\n'}
        4. Continue with abdominal thrusts (Heimlich maneuver).{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Stand the child up and place yourself behind them.{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Place one fist below their diaphragm and grab it with your other hand.{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Thrust sharply back and upwards.{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> necessary, repeat five times.{'\n'}
        5. If the foreign object does not come out, alternate between five hits and five thrusts.{'\n'}
        6. If the child loses consciousness, begin resuscitation and notify the Emergency Response Centre about the changed situation.{'\n'}
      </Text>
      <Text style={s.tipTitle}>Baby{'\n'}</Text>
      <Text style={s.tipContent}>
        <Text style={{fontWeight: "bold"}}>First aid for babies</Text>{'\n'}
        1. Take the baby on your lap lying on their stomach against your arm with their head lower than their body.{'\n'}
        2. Hit between the shoulder blades firmly, but carefully, five times, supporting the neck.{'\n'}
        3. If the hits do not remove the foreign object from the throat, call 911. Put the phone on speaker and continue helping.{'\n'}
        4. Place the baby on your lap on their back, with the feet against your chest.{'\n'}
        5. Push down on the breastbone with two fingers so that it yields.{'\n'}
        6. If necessary, repeat five times.{'\n'}
        7. If the foreign object does not come out, alternate between five hits and five pushes.{'\n'}
        8. If the baby loses consciousness, begin resuscitation and notify the Emergency Response Centre about the changed situation.{'\n'}
      </Text>
      <Text style={s.tipSource}>Source: Finnish Red Cross</Text>
      </View>
    </ScrollView>
  )
}