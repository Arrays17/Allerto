import { Text, ScrollView } from 'react-native';
import React from 'react';
const s = require('../../styles/styles');

export default function flood() {
  return (
    <ScrollView style={s.tips}>
      <Text style={s.tipTitle}>Before{'\n'}</Text>
      <Text style={s.tipContent}>
      <Text style={{fontWeight: "bold"}}>Right Before a Flood</Text>{'\n'}
      &#8226; Listen to local area radio or TV stations for the latest information and updates.{'\n'}
      &#8226; Be prepared to evacuate quickly and know your routes and destinations. Find a local emergency shelter.{'\n'}
      &#8226; Check your emergency kit and replenish any items missing or in short supply, especially medications or other medical supplies. Keep it nearby.{'\n'}{'\n'}
      <Text style={{fontWeight: "bold"}}>Then, If You Can, Do This</Text>{'\n'}
      &#8226; Fill plastic bottles with clean water for drinking.{'\n'}
      &#8226; Fill bathtubs and sinks with water for flushing the toilet or washing the floor or clothing.{'\n'}
      &#8226; Fill your car's gas tank, in case you need to evacuate.{'\n'}
      &#8226; Bring outdoor belongings, such as patio furniture, indoors.{'\n'}
      &#8226; Turn off propane tanks to reduce the potential for fire.{'\n'}{'\n'}
      <Text style={{fontWeight: "bold"}}>If You Still Have Time, Do This</Text>{'\n'}
      &#8226; Move your furniture and valuables to higher floors of your home.{'\n'}
      &#8226; Turn off utilities if told to do so by authorities to prevent damage to your home or within the community. If you shut your gas off, a professional is required to turn it back on.{'\n'}
      &#8226; Unplug small appliances to reduce potential damage from power surges that may occur.{'\n'}{'\n'}
      <Text style={{fontWeight: "bold"}}>If You Have Pets or Livestock</Text>{'\n'}
      &#8226; Consider a precautionary evacuation of your animals, especially any large or numerous animals. Waiting until the last minute could be fatal for them and dangerous for you.{'\n'}
      &#8226; Where possible, move livestock to higher ground. If using a horse or other trailer to evacuate your animals, move sooner rather than later.{'\n'}
      &#8226; Bring your companion animals indoors and maintain direct control of them. Be sure that your pet emergency kit is ready to go in case of evacuation.{'\n'}{'\n'}
      </Text>
      <Text style={s.tipTitle}>During{'\n'}</Text>
      <Text style={s.tipContent}>
      <Text style={{fontWeight: "bold"}}>How to Stay Safe Indoors</Text>{'\n'}
        &#8226; Turn off the power and water mains if instructed to do so by local authorities.{'\n'}
        &#8226; Boil tap water until water sources have been declared safe.{'\n'}
        &#8226; Avoid contact with floodwater. It may be contaminated with sewage or contain dangerous insects or animals.{'\n'}
        &#8226; Continue listening to local area radio or TV stations for the latest information and updates.{'\n'}
        &#8226; Don’t use gas or electrical appliances that have been flooded.{'\n'}
        &#8226; Dispose of any food that comes into contact with flood water.{'\n'}
      </Text>
      <Text style={s.tipContent}>
      <Text style={{fontWeight: "bold"}}>How to Stay Safe Outdoors</Text>{'\n'}
        &#8226; Don't walk, swim or drive through floodwater. Just six inches of fast-flowing water can knock you over and two feet will float a car.{'\n'}
        &#8226; If caught on a flooded road with rapidly rising waters, get out of the car quickly and move to higher ground.{'\n'}
        &#8226; Don't walk on beaches or riverbanks.{'\n'}
        &#8226; Don’t allow children to play in or near flood water.{'\n'}
        &#8226; Avoid contact with floodwater. It may be contaminated with sewage or contain dangerous insects or animals.{'\n'}
        &#8226; Stay out of areas subject to flooding. Underpasses, dips, low spots, canyons, washes, etc. can become filled with water. {'\n'}
      </Text>
      <Text style={s.tipTitle}>After{'\n'}</Text>
      <Text style={s.tipContent}>
      <Text style={{fontWeight: "bold"}}>After a Flood:</Text>{'\n'}
        &#8226; Let friends and family know you’re safe. The American Red Cross can help you reconnect with family members.{'\n'}
        &#8226; If evacuated, return only when authorities say it is safe to do so.{'\n'}
        &#8226; Continue listening to local news or a NOAA Weather Radio for updated information and instructions.{'\n'}
        &#8226; Keep children and pets away from hazardous sites and floodwater.{'\n'}{'\n'}
      </Text>
      <Text style={s.tipSource}>Source: American Red Cross</Text>
    </ScrollView>
  )
}