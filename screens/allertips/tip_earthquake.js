import { Text, ScrollView, View, Image } from 'react-native';
import React from 'react';
const s = require('../../styles/styles');

export default function Earthquake() {
  return (
    <ScrollView style={s.tips}>
      <View>
          <Image
            source={require('../../assets/allertips_images/earthquake.jpg')}
            style={s.imageTip}
          />
        </View>
      <View style={s.tipBody}>
        <Text style={s.tipTitle}>EARTHQUAKE{'\n'}</Text>
        <Text style={s.tipContent}>An earthquake is a sudden, rapid shaking of the earth caused by the shifting of rock beneath the earth’s surface. They strike without warning, at any time of year, day or night.{'\n'}</Text>
        <Text style={s.tipTitle2}>What to Do...{'\n'}</Text>
        <Text style={s.tipSubTitle}>Before{'\n'}</Text>
        <Text style={s.tipContent}>
        <Text style={{fontWeight: "bold"}}>Protecting your family</Text>{'\n'}
        <Text style={{color: 'orange'}}><Text style={{color: 'orange'}}>&#8226;</Text></Text> Talk about earthquakes with your family so that everyone knows what to do in case of an earthquake. Discussing ahead of time helps reduce fear, particularly for younger children{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Check at your workplace and your children's schools and day care centers to learn about their earthquake emergency plans.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Pick safe places in each room of your home, workplace and/or school. A safe place could be under a piece of furniture or against an interior wall away from windows, bookcases or tall furniture that could fall on you.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Practice DROP, COVER and HOLD ON in each safe place.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Make sure you have access to radio and TV broadcasts. {'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Keep a flashlight and whistle by each person’s bed.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Prepare a pet emergency kit for your companion animals. {'\n\n'}
        <Text style={{fontWeight: "bold"}}>Protecting your home</Text>{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Bolt and brace water heaters and gas appliances to wall studs. Have a professional install flexible fittings to avoid gas or water leaks.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Do not hang heavy items, such as pictures and mirrors, near beds, couches and anywhere people sleep or sit.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Install strong latches or bolts on cabinets. Large or heavy items should be closest to the floor.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Learn how to shut off the gas valves in your home and keep a wrench handy for that purpose.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Place large and heavy objects and breakable items (bottled foods, glass or china) on lower shelves.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Anchor overhead lighting fixtures to joists.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Anchor top-heavy, tall and freestanding furniture such as bookcases, china cabinets to wall studs to keep these from toppling over.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Ask about home repair and strengthening tips for exterior features, such as porches, decks, sliding glass doors, canopies, carports and garage doors.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Learn about your area’s seismic building standards and land use codes before you begin new construction.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Have a professional make sure your home is securely anchored to its foundation, as well as strengthening tips for exterior features, such as porches, decks, sliding glass doors, canopies, carports and garage doors.{'\n\n'}
      </Text>
      <Text style={s.tipSubTitle}>During{'\n'}</Text>
      <Text style={s.tipContent}>
      <Text style={{fontWeight: "bold"}}>Staying Safe Indoors</Text>{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> DROP, COVER and HOLD ON!{'\n'}
        {'\t\t'}&#8259; Move as little as possible - most injuries during earthquakes occur because of people moving around, falling and suffering sprains, fractures and head injuries.{'\n'}
        {'\t\t'}&#8259; Try to protect your head and torso.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> If you are in bed, stay there, curl up and hold on, and cover your head.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Stay indoors until the shaking stops and you are sure it is safe to exit.{'\n'}
        {'\t\t'}&#8259; If you must leave a building after the shaking stops, use stairs rather than an elevator in case of aftershocks, power outages or other damage.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Be aware that smoke alarms and sprinkler systems frequently go off in buildings during an earthquake, even if there is no fire.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> If you smell gas, get out of the house and move as far away as possible.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Before you leave any building check to make sure that there is no debris from the building that could fall on you.{'\n'}{'\n'}
        <Text style={{fontWeight: "bold"}}>Staying Safe Outdoors</Text>{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Find a clear spot and drop to the ground. Stay there until the shaking stops.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Try to get as far away from buildings, power lines, trees, and streetlights as possible.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> If you're in a vehicle, pull over to a clear location and stop. Avoid bridges, overpasses and power lines if possible.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Stay inside with your seatbelt fastened until the shaking stops.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> After the shaking has stopped, drive on carefully, avoiding bridges and ramps that may have been damaged.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> If a power line falls on your vehicle, do not get out. Wait for assistance.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> If you are in a mountainous area or near unstable slopes or cliffs, be alert for falling rocks and other debris as well as landslides.{'\n'}{'\n'}
      </Text>
      <Text style={s.tipSubTitle}>After{'\n'}</Text>
      <Text style={s.tipContent}>
      <Text style={{fontWeight: "bold"}}>If you do nothing else:</Text>{'\n'}
      1. If away from home, return only when authorities say it is safe to do so.{'\n'}
      2. Check yourself for injuries and get first aid, if necessary, before helping injured or trapped persons.{'\n'}
      3. After an earthquake, the disaster may continue. Expect and prepare for potential aftershocks, landslides or even a tsunami if you live on a coast.{'\n'}
      4. Each time you feel an aftershock, DROP, COVER and HOLD ON. Aftershocks frequently occur minutes, days, weeks and even months following an earthquake.{'\n'}
      5. Look for and extinguish small fires. Fire is the most common hazard after an earthquake.{'\n\n'}
      <Text style={{fontWeight: "bold"}}>Caring for yourself & loved ones</Text>{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> If you are at home, look quickly for damage in and around your home and get everyone out if your home is unsafe.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Listen to a portable, battery­operated or hand­crank radio for updated emergency information and instructions.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Pay attention to how you and your loved ones are experiencing and handling stress. Promote emotional recovery by following these tips.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Watch animals closely and keep them under your direct control.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Help people who require additional assistance—infants, older adults, those without transportation, large families who may need additional help in an emergency situation, people with disabilities, and the people who care for them.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Be careful when driving after an earthquake and anticipate traffic light outages.{'\n'}{'\n'}
        <Text style={{fontWeight: "bold"}}>Returning home safely</Text>{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Stay out of damaged buildings.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Use extreme caution and examine walls, floors, doors, staircases and windows to check for damage.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Watch out for fallen power lines or broken gas lines and report them to the utility company immediately.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> If you smell natural or propane gas or hear a hissing noise, leave immediately and call the fire department.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Open closet and cabinet doors carefully as contents may have shifted.{'\n'}{'\n'}
        <Text style={{fontWeight: "bold"}}>Cleaning and repairing your home</Text>{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Wear protective clothing, including long pants, a long-sleeved shirt and sturdy shoes, and be cautious.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Clean up spilled medications, bleach, gasoline or other flammable liquids immediately.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Learn about your area’s seismic building standards and land use codes before you begin any construction.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Follow our tips on preparing your home for an earthquake.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Learn more about how to clean up after an earthquake, including the supplies you’ll need and how to handle fire hazards such as gas, electricity and chemicals.{'\n\n'}
      </Text>
      <Text style={s.tipSource}>Source: American Red Cross</Text>
      </View>
    </ScrollView>
  )
}