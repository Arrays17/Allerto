import { Text, ScrollView } from 'react-native';
import React from 'react';
const s = require('../../styles/styles');

export default function landslide() {
  return (
    <ScrollView style={s.tips}>
      <Text style={s.tipTitle}>Before{'\n'}</Text>
      <Text style={s.tipContent}>
      <Text style={{fontWeight: "bold"}}>What should I do if I live in an area at risk from landslides or mudslides?</Text>{'\n'}
        &#8226; Learn about local emergency response and evacuation plans. {'\n'}
        &#8226; Talk to everyone in your household about what to do if a landslide occurs. {'\n'}
        &#8226; Create and practice an evacuation plan for your family and your business. {'\n'}
        &#8226; Assemble and maintain an emergency preparedness kit. {'\n'}
        &#8226; Become familiar with the land around where you live and work so that you understand your risk in different situations. {'\n'}
        &#8226; Watch the patterns of storm water drainage on slopes near your home, especially where runoff water converges. {'\n'}
        &#8226; Create and practice an evacuation plan for your family and your business. {'\n'}
        &#8226; Assemble and maintain an emergency preparedness kit. {'\n'}
      </Text>
      <Text style={s.tipTitle}>During{'\n'}</Text>
      <Text style={s.tipContent}>
      <Text style={{fontWeight: "bold"}}>What should I do if a landslide or mudslide is occurring or likely to occur?</Text>{'\n'}
        &#8226; If you suspect imminent danger, evacuate immediately. Inform affected neighbors if you can, and contact your public works, fire or police department.{'\n'}
        &#8226; Listen for unusual sounds that might indicate moving debris, such as trees cracking or boulders knocking together.{'\n'}
        &#8226; If you are near a stream or channel, be alert for any sudden increase or decrease in water flow and notice whether the water changes from clear to muddy. Such changes may mean there is debris flow activity upstream so be prepared to move quickly.{'\n'}
        &#8226; Be especially alert when driving— watch for collapsed pavement, mud, fallen rocks and other indications of possible debris flow.{'\n'}
        &#8226; If you are ordered or decide to evacuate, take your animals with you.{'\n'}
        &#8226; Consider a precautionary evacuation of large or numerous animals as soon as you are aware of impending danger.{'\n'}{'\n'}
        <Text style={{fontWeight: "bold"}}>During Severe Storms</Text>{'\n'}
        &#8226; Stay alert and awake. Many deaths from landslides occur while people are sleeping.{'\n'}
        &#8226; Listen to local news stations on a battery-powered radio for warnings of heavy rainfall.{'\n'}
        &#8226; Consider leaving if it is safe to do so.{'\n'}
      </Text>
      <Text style={s.tipTitle}>After{'\n'}</Text>
      <Text style={s.tipContent}>
      <Text style={{fontWeight: "bold"}}>What should I do after a landslide or mudslide?</Text>{'\n'}
        &#8226; Stay away from the slide area. There may be danger of additional slides.{'\n'}
        &#8226; Check for injured and trapped persons near the slide, without entering the direct slide area. Direct rescuers to their locations.{'\n'}
        &#8226; Help a neighbor who may require special assistance--infants, elderly people, and people with disabilities. Elderly people and people with disabilities may require additional assistance. People who care for them or who have large families may need additional assistance in emergency situations.{'\n'}
        &#8226; Listen to local radio or television stations for the latest emergency information.{'\n'}
        &#8226; Watch for flooding, which may occur after a landslide or debris flow. Floods sometimes follow landslides and debris flows because they may both be started by the same event.{'\n'}
        &#8226; Look for and report broken utility lines to appropriate authorities. Reporting potential hazards will get the utilities turned off as quickly as possible, preventing further hazard and injury.{'\n'}
        &#8226; Check the building foundation, chimney, and surrounding land for damage. Damage to foundations, chimneys, or surrounding land may help you assess the safety of the area.{'\n'}
        &#8226; Replant damaged ground as soon as possible since erosion caused by loss of ground cover can lead to flash flooding.{'\n'}
        &#8226; Seek the advice of a geotechnical expert for evaluating landslide hazards or designing corrective techniques to reduce landslide risk. A professional will be able to advise you of the best ways to prevent or reduce landslide risk, without creating further hazard.{'\n'}{'\n'}
      </Text>
      <Text style={s.tipSource}>Source: American Red Cross</Text>
    </ScrollView>
  )
}