import { Text, ScrollView } from 'react-native';
import React from 'react';
const s = require('../../styles/styles');

export default function volcanicEruption() {
  return (
    <ScrollView style={s.tips}>
      <Text style={s.tipTitle}>Before{'\n'}</Text>
      <Text style={s.tipContent}>
        <Text style={{fontWeight: "bold"}}>Prepare</Text>{'\n'}
        &#8226; Talk about volcanoes with your family so that everyone knows what to do in case of a volcanic eruption. Discussing ahead of time helps reduce fear, particularly for younger children. {'\n'}
        &#8226; Make sure you have access to radio broadcasts.{'\n'}
        &#8226; Keep handy a pair of goggles and a dust mask for each member of your household in case of ashfall.{'\n'}
        &#8226; Prepare a pet emergency kit for your companion animals.{'\n'}
        &#8226; Make a list of items to bring inside in the event of ashfall.{'\n'}{'\n'}
      </Text>
      <Text style={s.tipTitle}>During{'\n'}</Text>
      <Text style={s.tipContent}>
        <Text style={{fontWeight: "bold"}}>Staying Safe During a Volcanic Eruption</Text>{'\n'}
        &#8226; Listen to a local station on a portable, battery-operated radio or television for updated emergency information and instructions. Local officials will give the most appropriate advice for your particular situation.{'\n'}
        &#8226; Follow any evacuation orders issued by authorities, and put your emergency plan into action. Although it may seem safe to stay at home and wait out an eruption, if you are in a hazard zone, doing so could be very dangerous.{'\n'}
        &#8226; If indoors, close all window, doors, and dampers to keep volcanic ash from entering.{'\n'}
        &#8226; Put all machinery inside a garage or barn to protect it from volcanic ash. If buildings are not available, cover machinery with large tarps.{'\n'}
        &#8226; Bring animals and livestock into closed shelters to protect them from breathing volcanic ash.{'\n'}{'\n'}
       <Text style={{fontWeight: "bold"}}>If You Are Outdoors</Text>{'\n'}
        &#8226; Seek shelter indoors if possible.{'\n'}
        &#8226; Stay out of designated restricted zones. Effects of a volcanic eruption can be experienced many miles from a volcano.{'\n'}
        &#8226; Avoid low-lying areas, areas downwind of the volcano, and river valleys downstream of the volcano. Debris and ash will be carried by wind and gravity. Stay in areas where you will not be further exposed to volcanic eruption hazards. Trying to watch an erupting volcano up close is a deadly idea.{'\n'}{'\n'}
        <Text style={{fontWeight: "bold"}}>If You Are Outdoors</Text>{'\n'}
        1. Wear a dust mask designed to protect against lung irritation from small particles.{'\n'}
        2. Protect your eyes by wearing goggles. Wear eyeglasses, not contact lenses.{'\n'}
        3. Keep as much of your skin covered as possible.{'\n'}
      </Text>
      <Text style={s.tipTitle}>After{'\n'}</Text>
      <Text style={s.tipContent}>
        <Text style={{fontWeight: "bold"}}>Staying Safe After a Volcanic Eruption</Text>{'\n'}
        1. Let friends and family know you’re safe. The American Red Cross can help you reconnect with family members.{'\n'}
        2. If evacuated, return only when authorities say it is safe to do so.{'\n'}
        3. Continue listening to local news for updated information and instructions.{'\n'}
        4. If people around you are injured, practice CHECK, CALL, CARE. Check the scene to be sure it’s safe for you to approach, call for help, and if you are trained, provide first aid to those in need until emergency responders can arrive.{'\n'}{'\n'}
        <Text style={{fontWeight: "bold"}}>Caring for yourself & loved ones</Text>{'\n'}
        &#8226; Stay indoors and away from volcanic ashfall areas if possible. The fine, glassy particles of volcanic ash can increase the health risks for children and people with respiratory conditions, such as asthma, chronic bronchitis, or emphysema.{'\n'}
        &#8226; Whether you are indoors or outdoors:{'\n'}
        {'\t\t'}&#8259; Wear a dust mask designed to protect against lung irritation from small particles{'\n'}
        {'\t\t'}&#8259; Protect your eyes by wearing goggles. Wear eyeglasses, not contact lenses.{'\n'}
        {'\t\t'}&#8259; Keep as much of your skin covered as possible.{'\n'}
        &#8226; Take time to ensure your emotional recovery by following our tips.{'\n'}
        &#8226; Keep animals away from ashfall and areas of possible hot spots. Wash animals’ paws and fur or skin to prevent their ingesting or inhaling ash while grooming themselves.{'\n'}
        &#8226; Help people who require additional assistance—infants, elderly people, those without transportation, large families who may need additional help in an emergency situation, people with disabilities, and the people who care for them.{'\n'}{'\n'}
        <Text style={{fontWeight: "bold"}}>Returning home safely</Text>{'\n'}
        &#8226; Avoid driving in heavy ashfall. Driving will stir up volcanic ash that can clog engines and stall vehicles. Abrasion can damage moving parts, including bearings, brakes, and transmissions.{'\n'}
        &#8226; Follow these tips for inspecting your home’s structure and utilities & systems after a volcano.{'\n'}
        &#8226; Take pictures of home damage, both of the buildings and its contents, for insurance purposes.{'\n'}{'\n'}
        <Text style={{fontWeight: "bold"}}>Cleaning and repairing your home</Text>{'\n'}
        &#8226; Wear protective clothing, including long pants, a long-sleeved shirt and sturdy shoes, and be cautious.{'\n'}
        &#8226; As soon as it is safe to do so, clear your roof of ashfall. Ash is very heavy and can cause buildings to collapse, especially if made wet by rain. Exercise great caution when working on a roof.{'\n'}
        &#8226; Learn more about how to clean up after a volcano, including the supplies you’ll need and how to handle fire hazards such as gas, electricity and chemicals.{'\n'}{'\n'}
      </Text>
      <Text style={s.tipSource}>Source: American Red Cross</Text>
    </ScrollView>
  )
}