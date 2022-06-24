import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
const s = require('../../styles/styles');

export default function Psychological() {
  return (
    <ScrollView style={s.tips}>
      <View>
          <Image
            source={require('../../assets/allertips_images/psychological.jpg')}
            style={s.imageTip}
          />
        </View>
      <View style={s.tipBody}>
      <Text style={s.tipTitle}>PSYCHOLOGICAL FIRST AID{'\n'}</Text>
      <Text style={s.tipContent}>
        People are often shocked at the scene of an accident. Accidents, getting severely injured or falling severely ill can often cause people to be mentally hurt, in addition to physical injuries.{'\n\n'}
        The objective of psychological first aid is to calm down, comfort and process what happened. This way, the victim and their family members are helped to cope and move on after the event. Calm and determined actions by the helper will provide a feeling of safety.{'\n\n'}
        <Text style={{fontWeight: "bold"}}>How to give psychological first aid at the scene of an accident</Text>{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Behave calmly.{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Talk to the injured person.{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Listen to them.{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Stay with the person you are helping, do not leave them alone.{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Take care of the injured person and touch them calmingly, if you feel comfortable doing so.{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Tell them honestly what has happened and what will happen next.{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Keep outsiders further away.{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Remember that even you as a helper can need help.{'\n\n'}
        <Text style={{fontWeight: "bold"}}>When is professional help needed for recovery?</Text>{'\n'}
        Most come through shocking experiences by themselves and with the help of their friends and loved ones. Family, friends, and colleagues are crucial for a person’s coping.{'\n'}
        Sometimes, however, professional help is needed. The need may arise after a longer period of time and take the following forms, for example:{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Difficulties sleeping.{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Difficulties concentrating.{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Unexplained physical symptoms (headache, stomach symptoms, etc.).{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Isolation and loneliness.{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Difficulties with everyday routines.{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Excessive use of alcohol and medication.{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Suicidal thoughts.{'\n\n'}
        Help is available through helplines, the health centre, or a hospital, for example. Never leave the person in need of help alone with their injuries or symptoms.{'\n\n'}
      </Text>
      <Text style={s.tipSource}>Source: Finnish Red Cross</Text>
      </View>
    </ScrollView>
  )
}