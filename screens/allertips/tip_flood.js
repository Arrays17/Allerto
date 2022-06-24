import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
const s = require('../../styles/styles');

export default function Flood() {
  return (
    <ScrollView style={s.tips}>
      <View>
          <Image
            source={require('../../assets/allertips_images/flood.jpg')}
            style={s.imageTip}
          />
        </View>
      <View style={s.tipBody}>
      <Text style={s.tipTitle}>FLOOD{'\n'}</Text>
      <Text style={s.tipContent}>Floods are among the most frequent and costly natural disasters. Flooding often occurs following a hurricane, thawing snow, or several days of sustained rain. Flash floods occur suddenly, due to rapidly rising water along a stream or low-lying area.{'\n'}</Text>
      <Text style={s.tipTitle2}>What to Do...{'\n'}</Text>
      <Text style={s.tipSubTitle}>Before{'\n'}</Text>
      <Text style={s.tipContent}>
      <Text style={{fontWeight: "bold"}}>Right Before a Flood</Text>{'\n'}
      <Text style={{color: 'orange'}}>&#8226;</Text> Listen to local area radio or TV stations for the latest information and updates.{'\n'}
      <Text style={{color: 'orange'}}>&#8226;</Text> Be prepared to evacuate quickly and know your routes and destinations. Find a local emergency shelter.{'\n'}
      <Text style={{color: 'orange'}}>&#8226;</Text> Check your emergency kit and replenish any items missing or in short supply, especially medications or other medical supplies. Keep it nearby.{'\n'}{'\n'}
      <Text style={{fontWeight: "bold"}}>Then, If You Can, Do This</Text>{'\n'}
      <Text style={{color: 'orange'}}>&#8226;</Text> Fill plastic bottles with clean water for drinking.{'\n'}
      <Text style={{color: 'orange'}}>&#8226;</Text> Fill bathtubs and sinks with water for flushing the toilet or washing the floor or clothing.{'\n'}
      <Text style={{color: 'orange'}}>&#8226;</Text> Fill your car's gas tank, in case you need to evacuate.{'\n'}
      <Text style={{color: 'orange'}}>&#8226;</Text> Bring outdoor belongings, such as patio furniture, indoors.{'\n'}
      <Text style={{color: 'orange'}}>&#8226;</Text> Turn off propane tanks to reduce the potential for fire.{'\n'}{'\n'}
      <Text style={{fontWeight: "bold"}}>If You Still Have Time, Do This</Text>{'\n'}
      <Text style={{color: 'orange'}}>&#8226;</Text> Move your furniture and valuables to higher floors of your home.{'\n'}
      <Text style={{color: 'orange'}}>&#8226;</Text> Turn off utilities if told to do so by authorities to prevent damage to your home or within the community. If you shut your gas off, a professional is required to turn it back on.{'\n'}
      <Text style={{color: 'orange'}}>&#8226;</Text> Unplug small appliances to reduce potential damage from power surges that may occur.{'\n'}{'\n'}
      <Text style={{fontWeight: "bold"}}>If You Have Pets or Livestock</Text>{'\n'}
      <Text style={{color: 'orange'}}>&#8226;</Text> Consider a precautionary evacuation of your animals, especially any large or numerous animals. Waiting until the last minute could be fatal for them and dangerous for you.{'\n'}
      <Text style={{color: 'orange'}}>&#8226;</Text> Where possible, move livestock to higher ground. If using a horse or other trailer to evacuate your animals, move sooner rather than later.{'\n'}
      <Text style={{color: 'orange'}}>&#8226;</Text> Bring your companion animals indoors and maintain direct control of them. Be sure that your pet emergency kit is ready to go in case of evacuation.{'\n'}{'\n'}
      </Text>
      <Text style={s.tipSubTitle}>During{'\n'}</Text>
      <Text style={s.tipContent}>
      <Text style={{fontWeight: "bold"}}>How to Stay Safe Indoors</Text>{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Turn off the power and water mains if instructed to do so by local authorities.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Boil tap water until water sources have been declared safe.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Avoid contact with floodwater. It may be contaminated with sewage or contain dangerous insects or animals.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Continue listening to local area radio or TV stations for the latest information and updates.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Don’t use gas or electrical appliances that have been flooded.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Dispose of any food that comes into contact with flood water.{'\n'}
      </Text>
      <Text style={s.tipContent}>
      <Text style={{fontWeight: "bold"}}>How to Stay Safe Outdoors</Text>{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Don't walk, swim or drive through floodwater. Just six inches of fast-flowing water can knock you over and two feet will float a car.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> If caught on a flooded road with rapidly rising waters, get out of the car quickly and move to higher ground.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Don't walk on beaches or riverbanks.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Don’t allow children to play in or near flood water.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Avoid contact with floodwater. It may be contaminated with sewage or contain dangerous insects or animals.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Stay out of areas subject to flooding. Underpasses, dips, low spots, canyons, washes, etc. can become filled with water. {'\n\n'}
      </Text>
      <Text style={s.tipSubTitle}>After{'\n'}</Text>
      <Text style={s.tipContent}>
      <Text style={{fontWeight: "bold"}}>After a Flood:</Text>{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Let friends and family know you’re safe. The American Red Cross can help you reconnect with family members.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> If evacuated, return only when authorities say it is safe to do so.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Continue listening to local news for updated information and instructions.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Keep children and pets away from hazardous sites and floodwater.{'\n'}{'\n'}
      </Text>
      <Text style={s.tipSource}>Source: American Red Cross</Text>
      </View>
    </ScrollView>
  )
}