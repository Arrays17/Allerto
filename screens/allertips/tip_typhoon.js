import { Text, ScrollView } from 'react-native';
import React from 'react';
const s = require('../../styles/styles');

export default function Typhoon() {
  return (
    <ScrollView style={s.tips}>
      <Text style={s.tipTitle}>Before{'\n'}</Text>
      <Text style={s.tipContent}>
        <Text style={{fontWeight: "bold"}}>Plan to Evacuate</Text>{'\n'}
        If advised to evacuate, do so immediately and go to a safe place.{'\n'}
        &#8226; Know where you will go, how you will get there, and where you will stay. {'\n'}
        &#8226; Plan well in advance if you will need help leaving or use public transportation.{'\n'}
        &#8226; Mobile/manufactured/trailer homes and recreational vehicles (RVs) cannot provide safe shelter from tropical-storm or hurricane-force winds.{'\n'}{'\n'}
        <Text style={{fontWeight: "bold"}}>Plan to Shelter Safely</Text>{'\n'}
        &#8226; Be ready to live without power, water, gas, phone, and internet for a long time.{'\n'}
        &#8226; Practice going to a designated safe shelter for high winds. The next best protection is a small, interior, windowless room in a sturdy building on the lowest level that is not likely to flood.{'\n'}
        &#8226; If you are in an area that is likely to flood, designate a location on higher ground that you can move to before floodwaters reach you.{'\n'}{'\n'}
        <Text style={{fontWeight: "bold"}}>Gather Emergency Supplies</Text>{'\n'}
        &#8226; Gather food, water, and medicine.  Organize supplies into a Go-Kit and a Stay-at-Home Kit.{'\n'}
        &#8226; Go-Kit: 3 days of supplies that you can carry with you. Include backup batteries and chargers for your devices (cell phone, CPAP, wheelchair, etc.){'\n'}
        &#8226; Stay-at-Home Kit: 2 weeks of supplies. Stores and pharmacies might be closed.{'\n'}
        &#8226; Have a 1-month supply of medication in a child-proof container.{'\n'}
        &#8226; Keep personal, financial, and medical records safe.{'\n'}{'\n'}
        <Text style={{fontWeight: "bold"}}>Plan to Stay Connected</Text>{'\n'}
        &#8226; Sign up for free emergency alerts from your local government.{'\n'}
        &#8226; Have a way to charge your cell phone.{'\n'}
        &#8226; Have a battery-powered radio.{'\n'}{'\n'}
        <Text style={{fontWeight: "bold"}}>Learn Emergency Skills</Text>{'\n'}
        &#8226; Learn First Aid and CPR.{'\n'}
        &#8226; Be ready to live without power.{'\n'}
        &#8226; Learn how to use a generator safely.{'\n'}
        &#8226; Plan how you will use powered medical equipment.{'\n'}{'\n'}
        <Text style={{fontWeight: "bold", fontStyle: "italic"}}>How Can You Protect Your Home Before a Typhoon?</Text>{'\n'}
        <Text style={{fontWeight: "bold"}}>Prepare for Wind</Text>{'\n'}
        &#8226; Secure items outside, such as lawn furniture and trash cans, that could be picked up by high winds and hurt someone.{'\n'}
        &#8226; Anchor objects that would be unsafe to bring inside, such as gas grills and propane tanks.{'\n'}
        &#8226; Trim or remove trees close enough to fall on your home. Review insurance policies.{'\n'}
        &#8226; Protect windows with permanent storm shutters or pre-cut plywood. {'\n'}{'\n'}
        <Text style={{fontWeight: "bold"}}>Prepare for Flooding</Text>{'\n'}
        &#8226; Clean out drains, gutters and downspouts.{'\n'}
        &#8226; Stockpile protective materials such as plastic sheeting and sandbags.{'\n'}
        &#8226; Consider installing a sump pump with battery backup.{'\n'}
        &#8226; Consider elevating the heating system, water heater, and electric panel.{'\n'}{'\n'}
      </Text>
      <Text style={s.tipTitle}>During{'\n'}</Text>
      <Text style={s.tipContent}>
        <Text style={{fontWeight: "bold"}}>Evacuating</Text>{'\n'}
        &#8226; If local authorities advise you to evacuate, go right away.{'\n'}
        &#8226; Bring your Go Kit.{'\n'}
        &#8226; Follow evacuation routes and do not try to take shortcuts because they may be blocked.{'\n'}
        &#8226; Check with local officials for shelter locations.{'\n'}{'\n'}
       <Text style={{fontWeight: "bold"}}>Staying at Home</Text>{'\n'}
        &#8226; Determine your best protection for high winds and flooding.{'\n'}
        &#8226; Take shelter in a designated storm shelter or an interior room for high winds.{'\n'}
        &#8226; Stay away from glass windows and doors.{'\n'}
        &#8226; Move to higher ground before flooding begins.{'\n'}{'\n'}
      </Text>
      <Text style={s.tipTitle}>After{'\n'}</Text>
      <Text style={s.tipContent}>
        <Text style={{fontWeight: "bold"}}>Safety Basics</Text>{'\n'}
        &#8226; Wait for officials to say it is safe before going back home.{'\n'}
        &#8226; Avoid damaged or fallen power lines, poles, and downed wires. They can electrocute you.{'\n'}
        &#8226; Do not touch floodwaters because they may contain sewage, bacteria and chemicals that can make you ill.{'\n'}
        &#8226; Prevent carbon monoxide poisoning. Gasoline, propane, natural gas, or charcoal-burning devices should never be used inside a home, basement, garage, tent, or camper – or even outside near an open window. Carbon monoxide can't be seen or smelled, but it can kill you fast. If you start to feel sick, dizzy, or weak, get to fresh air right away – do not delay.{'\n'}{'\n'}
        <Text style={{fontWeight: "bold"}}>How to Clean Up Safely</Text>{'\n'}
        &#8226; Wear appropriate protective equipment including gloves, goggles and boots.{'\n'}
        &#8226; Clean and disinfect everything that got wet.{'\n'}
        &#8226; When cleaning heavy debris, work with a partner. Make sure that you have proper training before using equipment, such as chainsaws.{'\n'}
        &#8226; Heart attacks are a leading cause of deaths after a hurricane. Be mindful of overworking.{'\n'}{'\n'}
      </Text>
      <Text style={s.tipSource}>Source: American Red Cross</Text>
    </ScrollView>
  )
}