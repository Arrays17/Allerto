import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
const s = require('../../styles/styles');

export default function CPR() {
  return (
    <ScrollView style={s.tips}>
      <View>
          <Image
            source={require('../../assets/allertips_images/cpr.jpg')}
            style={s.imageTip}
          />
        </View>
      <View style={s.tipBody}>
      <Text style={s.tipTitle}>Adult CPR{'\n'}</Text>
      <Text style={s.tipContent}>
        <Text style={{fontWeight: "bold"}}>Giving CPR</Text>{'\n\n'}
        1. CHECK the scene for safety, form an initial impression and use personal protective equipment (PPE){'\n\n'}
        2. If the person appears unresponsive, CHECK for responsiveness, breathing, life-threatening bleeding or other life-threatening conditions using shout-tap-shout. {'\n\n'}
        3. If the person does not respond and is not breathing or only gasping, CALL 9-1-1 and get equipment, or tell someone to do so.{'\n\n'}
        4. Place the person on their back on a firm, flat surface. {'\n\n'}
        5. Give 30 chest compressions. {'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Hand position: Two hands centered on the chest{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Body position: Shoulders directly over hands; elbows locked{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Depth: At least 2 inches{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Rate: 100 to 120 per minute{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Allow chest to return to normal position after each compression{'\n'}
        6. Give 2 breaths{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Open the airway to a past-neutral position using the head-tilt/chin-lift technique{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Ensure each breath lasts about 1 second and makes the chest rise; allow air to exit before giving the next breath{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Call 9-1-1 if needed, and give care based on the condition found and your level of training{'\n\n'}
        <Text style={{fontWeight: "bold", fontStyle: "italic"}}>Note: If the 1st breath does not cause the chest to rise, retilt the head and ensure a proper seal before giving the 2nd breath If the 2nd breath does not make the chest rise, an object may be blocking the airway</Text>{'\n\n'}
        7. Continue giving sets of 30 chest compressions and 2 breaths. Use an AED as soon as one is available! {'\n\n'}
      </Text>
      <Text style={s.tipTitle}>Hands-Only CPR{'\n'}</Text>
      <Text style={s.tipContent}>
        <Text style={{fontWeight: "bold"}}>Before Giving CPR</Text>{'\n\n'}
        1. Check the scene and the person. Check to make sure the scene is safe, tap the person on the shoulder to see if they're OK, and look for signs of rhythmic, normal breathing.{'\n\n'}
        2. Call 911 for assistance. If there's no response from the victim when asked if he or she is OK, call 911, or ask a bystander to call for help. {'\n\n'}
        3. Begin compressions. If the person is unresponsive, perform hands-only CPR.{'\n\n'}
        <Text style={{fontWeight: "bold"}}>How to Perform Hands-Only CPR</Text>{'\n\n'}
        1. Ensure the person is on their back on a firm, flat surface {'\n\n'}
        2. Kneel beside the person. {'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Your knees should be near the person’s body and spread about shoulder width apart{'\n\n'}
        3. Use correct hand placement {'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Place the heel of one hand in the center of their chest, with your other hand on top{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Interlace your fingers and make sure they are up off the chest{'\n\n'}
        4. Use correct body position {'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Position your body so that your shoulders are directly over your hands{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Lock your elbows to keep your arms straight{'\n\n'}
        5. Give continuous compressions{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Push hard and fast (at least 2 inches; 100 to 120 compressions per minute){'\n\n'}
        6. Allow chest to return to its normal position after each compression {'\n\n'}
      </Text>
      <Text style={s.tipTitle}>Child & Baby CPR{'\n'}</Text>
      <Text style={s.tipContent}>
        <Text style={{fontWeight: "bold"}}>Before Giving Child or Baby CPR</Text>{'\n\n'}
        1. Check the scene for safety, form an initial impression, obtain consent from the parent or guardian, and use personal protective equipment (PPE).{'\n\n'}
        2. If the child or baby appears unresponsive, check the child or baby for responsiveness (shout-tap-shout). {'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> For a child, shout to get the child’s attention, using the child’s name if you know it. If the child does not respond, tap the child’s shoulder and shout again while checking for breathing, life-threatening bleeding or another obvious life-threatening condition.{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> For a baby, shout to get the baby’s attention, using the baby’s name if you know it. If the baby does not respond, tap the bottom of the baby’s foot and shout again while checking for breathing, life-threatening bleeding or another obvious life-threatening condition.{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Check for no more than 10 seconds.{'\n\n'}
        3. If the child or baby does not respond and is not breathing or only gasping, CALL 9-1-1 and get equipment, or tell someone to do so.{'\n\n'}
        <Text style={{fontWeight: "bold"}}>Performing Child & Baby CPR</Text>{'\n\n'}
        1. Place the child or baby on their back on a firm, flat surface {'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> For a child, kneel beside the child{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> For a baby, stand or kneel to the side of the baby, with your hips at a slight angle{'\n\n'}
        2. Give 30 compressions. {'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> For a child, place the heel of one hand in the center of the child’s chest, with your other hand on top and your fingers interlaced and off the child’s chest{'\n'}
        {'\t\t'} - Position your shoulders directly over your hands and lock your elbows{'\n'}
        {'\t\t'} - Keep your arms straight{'\n'}
        {'\t\t'} - Push down hard and fast about 2 inches at a rate of 100 to 120 per minute{'\n'}
        {'\t\t'} - Allow the chest to return to normal position after each compression{'\n\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> For a small child, use a one-handed CPR technique{'\n'}
        {'\t\t'} - Place the heel of one hand in the center of the child’s chest{'\n'}
        {'\t\t'} - Push down hard and fast about 2 inches at a rate of 100 to 120 per minute{'\n\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> For a baby, place both thumbs (side-by-side) on the center of the baby’s chest, just below the nipple line{'\n'}
        {'\t\t'} - Use the other fingers to encircle the baby’s chest toward the back, providing support{'\n'}
        {'\t\t'} - Using both thumbs at the same time, push hard down and fast about 1 ½ inches at a rate of 100 to 120 per minute{'\n'}
        {'\t\t'} - Allow the chest to return to its normal position after each compression{'\n\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Alternatively, for a baby, use the two-finger technique{'\n'}
        {'\t\t'} - Use two fingers placed parallel to the chest in the center of the chest{'\n\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> For a baby, if you can’t reach the depth of 1 ½ inches, consider using the one-hand technique{'\n\n'}
        3. Give 2 breaths {'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> For a child, open the airway to a slightly past-neutral position using the head-tilt/chin-lift technique{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> For a baby, open the airway to a neutral position using the head-tilt/chin-lift technique{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Blow into the child or baby’s mouth for about 1 second{'\n'}
        {'\t\t'} - Ensure each breath makes the chest rise{'\n'}
        {'\t\t'} - Allow the air to exit before giving the next breath{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> If the first breath does not cause the chest to rise, retilt the head and ensure a proper seal before giving the second breath. If the second breath does not make the chest rise, an object may be blocking the airway{'\n\n'}
        4. Continue giving sets of 30 chest compressions and 2 breaths until: {'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> You notice an obvious sign of life{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> An AED is ready to use{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> Another trained responder is available to take over compressions{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> EMS personnel arrive and begin their care{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> You are alone and too tired to continue{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> The scene becomes unsafe{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> You have performed approximately 2 minutes of CPR (5 sets of 30:2), you are alone and caring for baby, and you need to call 9-1-1 {'\n\n'}
      </Text>
      <Text style={s.tipTitle}>Pet CPR{'\n'}</Text>
      <Text style={s.tipContent}>
        <Text style={{fontWeight: "bold"}}>Cat & Dog CPR</Text>{'\n'}
        1. <Text style={{fontWeight: "bold"}}>Check for breathing and a heartbeat…</Text>{'\n\n'}
        Check to see if the pet is breathing and check for a heartbeat. If you do not see your pet’s chest moving and cannot find a heartbeat, begin CPR with chest compressions.{'\n\n'}
        2. <Text style={{fontWeight: "bold"}}>Give chest compressions…</Text>{'\n'}
        Place your hands on your pet as follows: {'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> For cats, small dogs and deep chested dogs, place the heel of one of your hands directly over the pet’s heart and place your other hand directly over the first hand.{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> For deep chested dogs, place the heel of one hand over the widest part of the chest and place your other hand directly over the first hand.{'\n'}
        {'\t'} <Text style={{color: 'orange'}}>&#8226;</Text> For barrel chested dogs, place the dog on its back, place one hand over the widest part of the sternum, and place your other hand directly over the first hand. Lock your elbows and make sure your shoulders are directly above your hands.{'\n\n'}
        Then, push hard and push fast at a rate of 100-120 compressions per minute, compressing 1/3 to 1/2 the width of your pet’s chest. Make sure the chest comes back fully (recoils) before compressing again.{'\n\n'}
        Perform 30 chest compressions. {'\n\n'}
        3. <Text style={{fontWeight: "bold"}}>Then give rescue breaths…</Text>{'\n'}
        To give rescue breaths, gently close the pet’s mouth and extend the pet’s neck to open the airway. Cover your pet’s nose with your mouth and exhale until you see the pet’s chest rise. Give a second rescue breath.{'\n\n'}
        4. <Text style={{fontWeight: "bold"}}>Continue CPR…</Text>{'\n'}
        Continue giving CPR with a cycle of 30 chest compressions and 2 rescue breaths until your dog or cat begins breathing again on its own. {'\n\n'}
        5. <Text style={{fontWeight: "bold"}}>Check again for breathing and a heartbeat…</Text>{'\n'}
        Briefly check for breathing and a heartbeat every 2 minutes.{'\n\n'}
        6. <Text style={{fontWeight: "bold"}}>Get help…</Text>{'\n'}
        Continue CPR until you reach a veterinary hospital.{'\n\n'}
      </Text>
      <Text style={s.tipSource}>Source: American Red Cross</Text>
      </View>
    </ScrollView>
  )
}