import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
const s = require('../../styles/styles');

export default function VolcanicEruption() {
  return (
    <ScrollView style={s.tips}>
      <View>
          <Image
            source={require('../../assets/allertips_images/eruption.jpg')}
            style={s.imageTip}
          />
        </View>
      <View style={s.tipBody}>
        <Text style={s.tipTitle}>VOLCANIC ERUPTION{'\n'}</Text>
        <Text style={s.tipContent}>An erupting volcano can blast ash, lava, solid rocks and gases into the air, creating hazards that can kill people, disrupt air travel and destroy property many miles away. If you live near a known volcano, active or dormant, following these tips will help you keep your loved ones safe.{'\n\n'}</Text>
        <Text style={s.tipTitle2}>What to Do...{'\n'}</Text>
      <Text style={s.tipSubTitle}>Before{'\n'}</Text>
      <Text style={s.tipContent}>
        <Text style={{fontWeight: "bold"}}>Prepare</Text>{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Talk about volcanoes with your family so that everyone knows what to do in case of a volcanic eruption. Discussing ahead of time helps reduce fear, particularly for younger children. {'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Make sure you have access to radio broadcasts.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Keep handy a pair of goggles and a dust mask for each member of your household in case of ashfall.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Prepare a pet emergency kit for your companion animals.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Make a list of items to bring inside in the event of ashfall.{'\n'}{'\n'}
      </Text>
      <Text style={s.tipSubTitle}>During{'\n'}</Text>
      <Text style={s.tipContent}>
        <Text style={{fontWeight: "bold"}}>Staying Safe During a Volcanic Eruption</Text>{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Listen to a local station on a portable, battery-operated radio or television for updated emergency information and instructions. Local officials will give the most appropriate advice for your particular situation.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Follow any evacuation orders issued by authorities, and put your emergency plan into action. Although it may seem safe to stay at home and wait out an eruption, if you are in a hazard zone, doing so could be very dangerous.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> If indoors, close all window, doors, and dampers to keep volcanic ash from entering.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Put all machinery inside a garage or barn to protect it from volcanic ash. If buildings are not available, cover machinery with large tarps.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Bring animals and livestock into closed shelters to protect them from breathing volcanic ash.{'\n'}{'\n'}
       <Text style={{fontWeight: "bold"}}>If You Are Outdoors</Text>{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Seek shelter indoors if possible.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Stay out of designated restricted zones. Effects of a volcanic eruption can be experienced many miles from a volcano.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Avoid low-lying areas, areas downwind of the volcano, and river valleys downstream of the volcano. Debris and ash will be carried by wind and gravity. Stay in areas where you will not be further exposed to volcanic eruption hazards. Trying to watch an erupting volcano up close is a deadly idea.{'\n'}{'\n'}
        <Text style={{fontWeight: "bold"}}>If You Are Outdoors</Text>{'\n'}
        1. Wear a dust mask designed to protect against lung irritation from small particles.{'\n'}
        2. Protect your eyes by wearing goggles. Wear eyeglasses, not contact lenses.{'\n'}
        3. Keep as much of your skin covered as possible.{'\n\n'}
      </Text>
      <Text style={s.tipSubTitle}>After{'\n'}</Text>
      <Text style={s.tipContent}>
        <Text style={{fontWeight: "bold"}}>Staying Safe After a Volcanic Eruption</Text>{'\n'}
        1. Let friends and family know you’re safe. The American Red Cross can help you reconnect with family members.{'\n'}
        2. If evacuated, return only when authorities say it is safe to do so.{'\n'}
        3. Continue listening to local news for updated information and instructions.{'\n'}
        4. If people around you are injured, practice CHECK, CALL, CARE. Check the scene to be sure it’s safe for you to approach, call for help, and if you are trained, provide first aid to those in need until emergency responders can arrive.{'\n'}{'\n'}
        <Text style={{fontWeight: "bold"}}>Caring for yourself & loved ones</Text>{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Stay indoors and away from volcanic ashfall areas if possible. The fine, glassy particles of volcanic ash can increase the health risks for children and people with respiratory conditions, such as asthma, chronic bronchitis, or emphysema.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Whether you are indoors or outdoors:{'\n'}
        {'\t\t'}&#8259; Wear a dust mask designed to protect against lung irritation from small particles{'\n'}
        {'\t\t'}&#8259; Protect your eyes by wearing goggles. Wear eyeglasses, not contact lenses.{'\n'}
        {'\t\t'}&#8259; Keep as much of your skin covered as possible.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Take time to ensure your emotional recovery by following our tips.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Keep animals away from ashfall and areas of possible hot spots. Wash animals’ paws and fur or skin to prevent their ingesting or inhaling ash while grooming themselves.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Help people who require additional assistance—infants, elderly people, those without transportation, large families who may need additional help in an emergency situation, people with disabilities, and the people who care for them.{'\n'}{'\n'}
        <Text style={{fontWeight: "bold"}}>Returning home safely</Text>{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Avoid driving in heavy ashfall. Driving will stir up volcanic ash that can clog engines and stall vehicles. Abrasion can damage moving parts, including bearings, brakes, and transmissions.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Follow these tips for inspecting your home’s structure and utilities & systems after a volcano.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Take pictures of home damage, both of the buildings and its contents, for insurance purposes.{'\n'}{'\n'}
        <Text style={{fontWeight: "bold"}}>Cleaning and repairing your home</Text>{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Wear protective clothing, including long pants, a long-sleeved shirt and sturdy shoes, and be cautious.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> As soon as it is safe to do so, clear your roof of ashfall. Ash is very heavy and can cause buildings to collapse, especially if made wet by rain. Exercise great caution when working on a roof.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Learn more about how to clean up after a volcano, including the supplies you’ll need and how to handle fire hazards such as gas, electricity and chemicals.{'\n'}{'\n'}
      </Text>
      <Text style={s.tipSource}>Source: American Red Cross</Text>
      </View>
    </ScrollView>
  )
}