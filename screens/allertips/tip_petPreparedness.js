import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
const s = require('../../styles/styles');

export default function PetPreparedness() {
  return (
    <ScrollView style={s.tips}>
      <View>
          <Image
            source={require('../../assets/allertips_images/pet.jpg')}
            style={s.imageTip}
          />
        </View>
      <View style={s.tipBody}>
      <Text style={s.tipTitle}>PET DISASTER PREPAREDNESS{'\n'}</Text>
      <Text style={s.tipContent}>
        <Text style={{fontWeight: "bold"}}>Top Tips for Keeping Your Pets Safe During a Disaster</Text>{'\n'}
        1. If it’s not safe for you to stay in your home during an emergency, it’s not safe for them either!{'\n'}
        2. Include supplies for your pet in your emergency kit, or assemble an emergency kit for your pet.{'\n'}
        3. Make an evacuation plan for you and your pets. Many hotels and shelters do not accept animal guests, other than service animals.{'\n'}{'\n'}
      </Text>
      <Text style={s.tipSubTitle}>Pet Emergency Kit{'\n'}</Text>
      <Text style={s.tipContent}>
        Keep items in an accessible place and store them in sturdy containers so that they can be carried easily.{'\n'}
        Your kit should include:{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Sturdy leashes, harnesses and/or carriers to transport pets safely and ensure that they can’t escape.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Food, drinking water, bowls, cat litter/pan and a manual can opener if you pet eats canned food.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Medications and copies of medical records stored in a waterproof container.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> A first aid kit.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Current photos of you with your pet(s) in case they get lost. Since many pets look alike, this will help to eliminate mistaken identity and confusion.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Information on feeding schedules, medical conditions, behavior problems, and the name and number of your veterinarian in case you have to foster or board your pets.{'\n'}
        <Text style={{color: 'orange'}}>&#8226;</Text> Pet beds and toys, if easily transportable.{'\n\n'}
      </Text>
      <Text style={s.tipSubTitle}>Pet Emergency Plan{'\n'}</Text>
      <Text style={s.tipContent}>
      <Text style={{color: 'orange'}}>&#8226;</Text> Know which hotels and motels along your evacuation route will accept pets in an emergency. Call ahead for reservations if you know you may need to evacuate. Ask if no pet policies could be waived in an emergency.{'\n'}
      <Text style={{color: 'orange'}}>&#8226;</Text> Know which friends, relatives, boarding facilities, animal shelters or veterinarians can care for your animals in an emergency. Prepare a list with phone numbers.{'\n'}
      <Text style={{color: 'orange'}}>&#8226;</Text> Although your animals may be more comfortable together, be prepared to house them separately.{'\n'}
      <Text style={{color: 'orange'}}>&#8226;</Text> Include your pets in evacuation drills so that they become used to entering and traveling in their carriers calmly.{'\n'}
      <Text style={{color: 'orange'}}>&#8226;</Text> Make sure that your pet’s vaccinations are current and that all dogs and cats are wearing collars with securely fastened, up-to-date identification. Many pet shelters require proof of current vaccinations to reduce the spread of disease.{'\n'}
      </Text>
      <Text style={s.tipSubTitle}>Livestock Safety{'\n'}</Text>
      <Text style={s.tipContent}>
      <Text style={{color: 'orange'}}>&#8226;</Text> Consider a precautionary evacuation of your animals, especially any large or numerous animals. Waiting until the last minute could be fatal for them and dangerous for you. {'\n'}
      <Text style={{color: 'orange'}}>&#8226;</Text> Where possible, move livestock to higher ground. If using a horse or other trailer to evacuate your animals, move sooner rather than later.{'\n'}
      <Text style={{color: 'orange'}}>&#8226;</Text> Bring your companion animals indoors and maintain direct control of them. Be sure that your pet emergency kit is ready to go in case of evacuation.{'\n'}{'\n'}
      </Text>
      <Text style={s.tipSubTitle}>Help Pets Recover{'\n'}</Text>
      <Text style={s.tipContent}>
      Your pet’s behavior may change dramatically after a disaster, becoming aggressive or defensive. Be aware of their well being and protect them from hazards to ensure the safety of other people and animals.{'\n'}
      <Text style={{color: 'orange'}}>&#8226;</Text> Watch your animals closely and keep them under your direct control as fences and gates may have been damaged.{'\n'}
      <Text style={{color: 'orange'}}>&#8226;</Text> Pets may become disoriented, particularly if the disaster has affected scent markers that normally allow them to find their home.{'\n'}
      <Text style={{color: 'orange'}}>&#8226;</Text> Be aware of hazards at nose and paw or hoof level, particularly debris, spilled chemicals, fertilizers and other substances that might not seem to be dangerous to humans.{'\n'}
      <Text style={{color: 'orange'}}>&#8226;</Text> Consult your veterinarian if any behavior problems persist.{'\n'}{'\n'}
      </Text>
      <Text style={s.tipSource}>Source: American Red Cross</Text>
      </View>
    </ScrollView>
  )
}