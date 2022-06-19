import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
const s = require('../../styles/styles');

export default function Typhoon() {
  return (
    <ScrollView style={s.tips}>
      <View>
          <Image
            source={require('../../assets/allertips_images/typhoon.jpg')}
            style={s.imageTip}
          />
        </View>
      <View style={s.tipBody}>
        <Text style={s.tipTitle}>TYPHOON{'\n'}</Text>
        <Text style={s.tipContent}>A typhoon is a type of large storm system having a circular or spiral system of violent winds, typically hundreds of kilometers or miles in diameter. The winds spiral around a region of low atmospheric pressure. "Typhoon" is the name of these storms that occur in the Western Pacific. "Hurricane" is the name given to these storms in the Atlantic Ocean and Eastern Pacific.{'\n'}</Text>
        <Text style={s.tipTitle2}>What to Do...{'\n'}</Text>
      <Text style={s.tipSubTitle}>Before{'\n'}</Text>
      <Text style={s.tipContent}>
        <Text style={{fontWeight: "bold"}}>Plan to Evacuate</Text>{'\n'}
        If advised to evacuate, do so immediately and go to a safe place.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Know where you will go, how you will get there, and where you will stay. {'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Plan well in advance if you will need help leaving or use public transportation.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Mobile/manufactured/trailer homes and recreational vehicles (RVs) cannot provide safe shelter from tropical-storm or hurricane-force winds.{'\n'}{'\n'}
        <Text style={{fontWeight: "bold"}}>Plan to Shelter Safely</Text>{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Be ready to live without power, water, gas, phone, and internet for a long time.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Practice going to a designated safe shelter for high winds. The next best protection is a small, interior, windowless room in a sturdy building on the lowest level that is not likely to flood.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> If you are in an area that is likely to flood, designate a location on higher ground that you can move to before floodwaters reach you.{'\n'}{'\n'}
        <Text style={{fontWeight: "bold"}}>Gather Emergency Supplies</Text>{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Gather food, water, and medicine.  Organize supplies into a Go-Kit and a Stay-at-Home Kit.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Go-Kit: 3 days of supplies that you can carry with you. Include backup batteries and chargers for your devices (cell phone, CPAP, wheelchair, etc.){'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Stay-at-Home Kit: 2 weeks of supplies. Stores and pharmacies might be closed.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Have a 1-month supply of medication in a child-proof container.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Keep personal, financial, and medical records safe.{'\n'}{'\n'}
        <Text style={{fontWeight: "bold"}}>Plan to Stay Connected</Text>{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Sign up for free emergency alerts from your local government.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Have a way to charge your cell phone.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Have a battery-powered radio.{'\n'}{'\n'}
        <Text style={{fontWeight: "bold"}}>Learn Emergency Skills</Text>{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Learn First Aid and CPR.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Be ready to live without power.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Learn how to use a generator safely.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Plan how you will use powered medical equipment.{'\n'}{'\n'}
        <Text style={{fontWeight: "bold", fontStyle: "italic"}}>How Can You Protect Your Home Before a Typhoon?</Text>{'\n'}
        <Text style={{fontWeight: "bold"}}>Prepare for Wind</Text>{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Secure items outside, such as lawn furniture and trash cans, that could be picked up by high winds and hurt someone.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Anchor objects that would be unsafe to bring inside, such as gas grills and propane tanks.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Trim or remove trees close enough to fall on your home. Review insurance policies.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Protect windows with permanent storm shutters or pre-cut plywood. {'\n\n'}
        <Text style={{fontWeight: "bold"}}>Prepare for Flooding</Text>{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Clean out drains, gutters and downspouts.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Stockpile protective materials such as plastic sheeting and sandbags.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Consider installing a sump pump with battery backup.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Consider elevating the heating system, water heater, and electric panel.{'\n'}
      </Text>
      <Text style={s.tipSubTitle}>During{'\n'}</Text>
      <Text style={s.tipContent}>
        <Text style={{fontWeight: "bold"}}>Evacuating</Text>{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> If local authorities advise you to evacuate, go right away.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Bring your Go Kit.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Follow evacuation routes and do not try to take shortcuts because they may be blocked.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Check with local officials for shelter locations.{'\n'}{'\n'}
       <Text style={{fontWeight: "bold"}}>Staying at Home</Text>{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Determine your best protection for high winds and flooding.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Take shelter in a designated storm shelter or an interior room for high winds.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Stay away from glass windows and doors.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Move to higher ground before flooding begins.{'\n'}{'\n'}
      </Text>
      <Text style={s.tipSubTitle}>After{'\n'}</Text>
      <Text style={s.tipContent}>
        <Text style={{fontWeight: "bold"}}>Safety Basics</Text>{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Wait for officials to say it is safe before going back home.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Avoid damaged or fallen power lines, poles, and downed wires. They can electrocute you.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Do not touch floodwaters because they may contain sewage, bacteria and chemicals that can make you ill.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Prevent carbon monoxide poisoning. Gasoline, propane, natural gas, or charcoal-burning devices should never be used inside a home, basement, garage, tent, or camper – or even outside near an open window. Carbon monoxide can't be seen or smelled, but it can kill you fast. If you start to feel sick, dizzy, or weak, get to fresh air right away – do not delay.{'\n'}{'\n'}
        <Text style={{fontWeight: "bold"}}>How to Clean Up Safely</Text>{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Wear appropriate protective equipment including gloves, goggles and boots.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Clean and disinfect everything that got wet.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> When cleaning heavy debris, work with a partner. Make sure that you have proper training before using equipment, such as chainsaws.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Heart attacks are a leading cause of deaths after a hurricane. Be mindful of overworking.{'\n'}{'\n'}
      </Text>
      <Text style={s.tipSource}>Source: American Red Cross</Text>
      </View>
    </ScrollView>
  )
}