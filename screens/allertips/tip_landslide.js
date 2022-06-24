import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
const s = require('../../styles/styles');

export default function Landslide() {
  return (
    <ScrollView style={s.tips}>
      <View>
          <Image
            source={require('../../assets/allertips_images/landslide.jpg')}
            style={s.imageTip}
          />
      </View>
      <View style={s.tipBody}>
      <Text style={s.tipTitle}>LANDSLIDE{'\n'}</Text>
      <Text style={s.tipContent}>The term landslide describes downhill earth movements that can move slowly and cause damage gradually, or move rapidly, destroying property and taking lives suddenly and unexpectedly. Most landslides are caused by natural forces or events, such as heavy rain, shaking due to earthquakes, volcanic eruptions and gravity. {'\n\n'}</Text>
      <Text style={s.tipTitle2}>What to Do...{'\n'}</Text>
      <Text style={s.tipSubTitle}>Before{'\n'}</Text>
      <Text style={s.tipContent}>
        <Text style={{color: 'orange'}}>&#8226;</Text> Learn about local emergency response and evacuation plans. {'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Talk to everyone in your household about what to do if a landslide occurs. {'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Create and practice an evacuation plan for your family and your business. {'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Assemble and maintain an emergency preparedness kit. {'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Become familiar with the land around where you live and work so that you understand your risk in different situations. {'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Watch the patterns of storm water drainage on slopes near your home, especially where runoff water converges. {'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Create and practice an evacuation plan for your family and your business. {'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Assemble and maintain an emergency preparedness kit. {'\n\n'}
      </Text>
      <Text style={s.tipSubTitle}>During{'\n'}</Text>
      <Text style={s.tipContent}>
        <Text style={{color: 'orange'}}>&#8226;</Text> If you suspect imminent danger, evacuate immediately. Inform affected neighbors if you can, and contact your public works, fire or police department.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Listen for unusual sounds that might indicate moving debris, such as trees cracking or boulders knocking together.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> If you are near a stream or channel, be alert for any sudden increase or decrease in water flow and notice whether the water changes from clear to muddy. Such changes may mean there is debris flow activity upstream so be prepared to move quickly.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Be especially alert when driving— watch for collapsed pavement, mud, fallen rocks and other indications of possible debris flow.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> If you are ordered or decide to evacuate, take your animals with you.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Consider a precautionary evacuation of large or numerous animals as soon as you are aware of impending danger.{'\n'}{'\n'}
        <Text style={{fontWeight: "bold"}}>During Severe Storms</Text>{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Stay alert and awake. Many deaths from landslides occur while people are sleeping.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Listen to local news stations on a battery-powered radio for warnings of heavy rainfall.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Consider leaving if it is safe to do so.{'\n\n'}
      </Text>
      <Text style={s.tipSubTitle}>After{'\n'}</Text>
      <Text style={s.tipContent}>
        <Text style={{color: 'orange'}}>&#8226;</Text> Stay away from the slide area. There may be danger of additional slides.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Check for injured and trapped persons near the slide, without entering the direct slide area. Direct rescuers to their locations.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Help a neighbor who may require special assistance--infants, elderly people, and people with disabilities. Elderly people and people with disabilities may require additional assistance. People who care for them or who have large families may need additional assistance in emergency situations.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Listen to local radio or television stations for the latest emergency information.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Watch for flooding, which may occur after a landslide or debris flow. Floods sometimes follow landslides and debris flows because they may both be started by the same event.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Look for and report broken utility lines to appropriate authorities. Reporting potential hazards will get the utilities turned off as quickly as possible, preventing further hazard and injury.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Check the building foundation, chimney, and surrounding land for damage. Damage to foundations, chimneys, or surrounding land may help you assess the safety of the area.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Replant damaged ground as soon as possible since erosion caused by loss of ground cover can lead to flash flooding.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Seek the advice of a geotechnical expert for evaluating landslide hazards or designing corrective techniques to reduce landslide risk. A professional will be able to advise you of the best ways to prevent or reduce landslide risk, without creating further hazard.{'\n'}{'\n'}
      </Text>
      <Text style={s.tipSource}>Source: American Red Cross</Text>
      </View>
    </ScrollView>
  )
}