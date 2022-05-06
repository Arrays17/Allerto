import { Text, ScrollView } from 'react-native';
import React from 'react';
const s = require('../../styles/styles');

export default function firstAid() {
  return (
    <ScrollView style={s.tips}>
      <Text style={s.tipTitle}>Child & Baby First Aid{'\n'}</Text>
      <Text style={s.tipContent}>
        <Text style={{fontWeight: "bold"}}>Before Giving Child or Baby First Aid</Text>{'\n'}
        1. Check the scene for safety, form an initial impression, obtain consent from the parent or guardian, and use personal protective equipment (PPE){'\n'}{'\n'}
        <Text style={{fontWeight: "bold"}}>Giving First Aid</Text>{'\n'}
        1. If the child or baby appears unresponsive, check the child or baby for responsiveness (shout-tap-shout){'\n'}
        {'\t'} &#8226; For a child, shout to get the child’s attention, using the child’s name if you know it. If the child does not respond, tap the child’s shoulder and shout again while checking for breathing, life-threatening bleeding or another obvious life-threatening condition.{'\n'}
        {'\t'} &#8226; For a baby, shout to get the baby’s attention, using the baby’s name if you know it. If the baby does not respond, tap the bottom of the baby’s foot and shout again while checking for breathing, life-threatening bleeding or another obvious life-threatening condition.{'\n'}
        {'\t'} &#8226; CHECK for no more than 10 seconds.{'\n\n'}
        2. If the child or baby does not respond, responds but is not fully awake, is not breathing or is only gasping, or has life-threatening bleeding or another obvious life-threatening condition, immediately call 9-1-1 and give care based on the condition found and your level of training. {'\n'}
        {'\t'} &#8226; If the child or baby does not respond and is not breathing or only gasping, immediately begin CPR, starting with compressions. Continue giving sets of 30 chest compressions and 2 breaths until:{'\n'}
        {'\t\t'}&#8259; You notice an obvious sign of life{'\n'}
        {'\t\t'}&#8259; An AED is ready to use{'\n'}
        {'\t\t'}&#8259; Another trained responder is available to take over compressions{'\n'}
        {'\t\t'}&#8259; EMS personnel arrive and begin their care{'\n'}
        {'\t\t'}&#8259; You are alone and too tired to continue{'\n'}
        {'\t\t'}&#8259; The scene becomes unsafe{'\n'}
        {'\t\t'}&#8259; You have performed approximately 2 minutes of CPR (5 sets of 30:2), you are alone and caring for baby, and you need to call 9-1-1 {'\n\n'}
        3. If the child or baby is responsive or responds to stimulation and is fully awake and does not appear to have a life-threatening condition:{'\n'}
        {'\t'} &#8226; Interview the child, parent or guardian{'\n'}
        {'\t'} &#8226; Do a focused check based on what the child, parent or guardian told you, how the child or baby is acting and what you see{'\n'}
        {'\t'} &#8226; Call 9-1-1 if needed, and give care based on the condition found and your level of training{'\n\n'}
      </Text>
      <Text style={s.tipTitle}>First Aid Steps{'\n'}</Text>
      <Text style={s.tipContent}>
        <Text style={{fontWeight: "bold"}}>Checking an Injured or Ill Person</Text>{'\n'}
        1. CHECK the scene for safety, form an initial impression, obtain consent, and use personal protective equipment (PPE).{'\n\n'}
        2. If the person appears unresponsive, CHECK for responsiveness, breathing, life-threatening bleeding or other life-threatening conditions using shout-tap-shout.{'\n\n'}
        <Text style={{fontWeight: "bold", fontStyle: "italic"}}>Note: CHECK for no more than 10 seconds</Text>{'\n\n'}
        3A. If the person does not respond, responds but is not fully awake, is not breathing or is only gasping, or has life-threatening bleeding or another obvious life-threatening condition, CALL 9-1-1 and get equipment, or tell someone to do so. Then, give CARE based on the condition found and your level of training and continue your check to determine if additional care is needed.{'\n\n'}
        <Text style={{fontWeight: "bold", fontStyle: "italic"}}>Note: For a person who is unresponsive and not breathing, start CPR and use an AED immediately</Text>{'\n\n'}
        3B. If the person is responsive or responds to stimulation and is fully awake and does not appear to have a life-threatening condition:{'\n'}
        {'\t'} &#8226; Interview the person (or bystanders, if necessary), ask questions about signs and symptoms, allergies, and medications and medical conditions (SAM){'\n'}
        {'\t'} &#8226; Do a focused check based on what the person told you, how the person is acting and what you see{'\n\n'}
        <Text style={{fontWeight: "bold", fontStyle: "italic"}}>Note: Do not ask the person to move if you suspect a head, neck or spinal injury. Do not ask the person to move any area of the body that causes discomfort or pain</Text>{'\n\n'}
        <Text style={{fontWeight: "bold", fontStyle: "italic"}}>Note: As you check the person, take note of any medical identification tags</Text>{'\n\n'}
        4. After completing the CHECK step, CALL 9-1-1 and get equipment, or tell someone to do so (if needed). Then, give CARE based on the condition found and your level of training. {'n'}
      </Text>
      <Text style={s.tipSource}>Source: American Red Cross</Text>
    </ScrollView>
  )
}