import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
const s = require('../../styles/styles');

export default function Fire() {
  return (
    <ScrollView style={s.tips}>
      <View>
          <Image
            source={require('../../assets/allertips_images/fire.jpg')}
            style={s.imageTip}
          />
      </View>
      <View style={s.tipBody}>
      <Text style={s.tipTitle}>FIRE{'\n'}</Text>
      <Text style={s.tipContent}>A fire can become life-threatening in just two minutes. A residence can be engulfed in flames in five minutes.{'\n\n'}</Text>
      <Text style={s.tipSubTitle}>Home Fire Preparedness{'\n'}</Text>
      <Text style={s.tipContent}>
      <Text style={{fontWeight: "bold"}}>7 Ways to Prepare for a Home Fire</Text>{'\n'}
        1. Install the right number of smoke alarms. Test them once a month and replace the batteries at least once a year. Purchase smoke alarms here. {'\n'}
        2. Teach children what smoke alarms sound like and what to do when they hear one. {'\n'}
        3. Ensure that all household members know two ways to escape from every room of your home and know the family meeting spot outside of your home.{'\n'}
        4. Establish a family emergency communications plan and ensure that all household members know who to contact if they cannot find one another.{'\n'}
        5. Practice escaping from your home at least twice a year. Press the smoke alarm test button or yell “Fire“ to alert everyone that they must get out.{'\n'}
        6. Make sure everyone knows how to call 9-1-1.{'\n'}
        7. Teach household members to STOP, DROP and ROLL if their clothes catch on fire.  {'\n'}
      </Text>
      <Text style={s.tipContent}>
      <Text style={{fontWeight: "bold"}}>Remember These DOs and DON'Ts</Text>{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> DO keep items that can catch on fire at least three feet away from anything that gets hot, such as space heaters.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> DO take precautions: Smoke outside; choose fire-safe cigarettes; use deep, sturdy ashtrays and douse cigarette and cigar butts with water before disposal.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> DON'T ever smoke in bed, when drowsy or medicated, or if anyone in the home is using oxygen.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> DO talk to children regularly about the dangers of fire, matches and lighters and keep them out of reach.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> DO turn portable heaters off when you leave the room or go to sleep.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> DO use flashlights when the power is out, not candles.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> DON'T leave a burning candle unattended, even for a minute.{'\n'}
      </Text>
      <Text style={s.tipContent}>
      <Text style={{fontWeight: "bold"}}>Safeguard Your Home</Text>{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Install smoke alarms on every level of your home and outside every sleeping area. {'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Install a carbon monoxide alarm in a central location outside each separate sleeping area. {'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Make sure your house number is easily readable from the street, even at night.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Make sure your home heating sources are clean and in working order. Many home fires are started by poorly maintained furnaces or stoves, cracked or rusted furnace parts, or chimneys with creosote buildup. {'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Use kerosene heaters only if permitted by law. Refuel kerosene heaters only outdoors and after they have cooled.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Check electrical wiring in your home:{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Fix or replace frayed extension cords, exposed wires, or loose plugs.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Make sure wiring is not under rugs, attached by nails, or in high traffic areas.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Make sure electrical outlets have cover plates and no exposed wiring.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Avoid overloading outlets or extension cords.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Purchase only appliances and electrical devices (including space heaters) that bear the label of an independent testing laboratory.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Store combustible materials in open areas away from heat sources. Place rags used to apply flammable household chemicals in metal containers with tight-fitting lids.
      </Text>
      <Text style={s.tipContent}>
      <Text style={{fontWeight: "bold"}}>Guard Against Kitchen Fires</Text>{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Stay in the kitchen when frying, grilling or broiling food. Stay in the home while simmering, baking, roasting or boiling food.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Keep pets off cooking surfaces and countertops.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Keep the stove area clean and clear of things that can catch fire, such as pot holders, towels, curtains, bags, and other appliances.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> If you are cooking and a fire starts in a pan, slide a lid over the burning pan and turn off the burner. Leave the lid in place until the pan is completely cool. Moving the pan can cause serious injury or spread the fire. Never pour water on grease fires.{'\n'}
      </Text>
      <Text style={s.tipSubTitle}>What To Do if a Fire Starts{'\n'}</Text>
      <Text style={s.tipContent}>
      <Text style={{fontWeight: "bold"}}>If a Fire Starts:</Text>{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Know how to safely operate a fire extinguisher{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Remember to GET OUT, STAY OUT and CALL 9-1-1 or your local emergency phone number.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Yell "Fire!" several times and go outside right away. If you live in a building with elevators, use the stairs. Leave all your things where they are and save yourself.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> If closed doors or handles are warm or smoke blocks your primary escape route, use your second way out. Never open doors that are warm to the touch.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> If you must escape through smoke, get low and go under the smoke to your exit. Close doors behind you.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> If smoke, heat or flames block your exit routes, stay in the room with doors closed. Place a wet towel under the door and call the fire department or 9-1-1. Open a window and wave a brightly colored cloth or flashlight to signal for help.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Once you are outside, go to your meeting place and then send one person to call the fire department. If you cannot get to your meeting place, follow your family emergency communication plan.{'\n'}{'\n'}
        <Text style={{fontWeight: "bold"}}>If your clothes catch on fire:</Text>{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Stop what you’re doing.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Drop to the ground and cover your face if you can.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Roll over and over or back and forth until the flames go out. Running will only make the fire burn faster.{'\n'}{'\n'}
        <Text style={{fontWeight: "bold"}}>Once the flames are out, cool the burned skin with water for three to five minutes. Call for medical attention.</Text>{'\n'}
      </Text>
      <Text style={s.tipSubTitle}>Recovering After a Fire{'\n'}</Text>
      <Text style={s.tipContent}>
      <Text style={{fontWeight: "bold"}}>4 Steps to Take Immediately After a Home Fire</Text>{'\n'}
        1. Call 9-1-1. Give first aid where needed; cool and cover burns to reduce the chance of further injury or infection.{'\n'}
        2. Let friends and family know you’re safe.{'\n'}
        3. People and animals that are seriously injured or burned should be transported to professional medical or veterinary help immediately.{'\n'}
        4. Stay out of fire-damaged homes until local fire authorities say it is safe to re-enter.{'\n'}{'\n'}
      <Text style={{fontWeight: "bold"}}>Caring for Yourself & Loved Ones After a Fire</Text>{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Pay attention to how you and your loved ones are experiencing and handling stress. Promote emotional recovery by following these tips.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Discard any food that has been exposed to heat, smoke or soot.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Watch pets closely and keep them under your direct control.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Help people who require additional assistance- infants and children, older adults, those without transportation, large families who may need additional help in an emergency situation, people with disabilities, and the people who care for them.{'\n'}{'\n'}
      </Text>

      <Text style={s.tipSource}>Source: American Red Cross</Text>
      </View>
    </ScrollView>
  )
}