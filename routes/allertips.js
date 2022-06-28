import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Menu from '../screens/allertips/allertips_Menu';
import Earthquake from '../screens/allertips/tip_earthquake';
import Landslide from '../screens/allertips/tip_landslide';
import Fire from '../screens/allertips/tip_fire';
import Flood from '../screens/allertips/tip_flood';
import Typhoon from '../screens/allertips/tip_typhoon';
import VolcanicEruption from '../screens/allertips/tip_volcanicEruption';
import RoadSafety from '../screens/allertips/tip_roadSafety';
import FirstAid from '../screens/allertips/tip_firstAid';
import PetPreparedness from '../screens/allertips/tip_petPreparedness';
import SurvivalKit from '../screens/allertips/tip_survivalKit';
// firstaid
import FirstAidBasics from '../screens/allertips/FA_basics';
import CPR from '../screens/allertips/FA_CPR'
import AED from '../screens/allertips/FA_AED';
import BLS from '../screens/allertips/FA_BLS';
import Choking from '../screens/allertips/FA_choking';
import ChestPain from '../screens/allertips/FA_chestPain';
import Fainting from '../screens/allertips/FA_fainting';
import Burns from '../screens/allertips/FA_burns';
import Poisoning from '../screens/allertips/FA_poisoning';
import Fractures from '../screens/allertips/FA_fractures';
import Seizures from '../screens/allertips/FA_seizures';
import Nosebleed from '../screens/allertips/FA_nosebleed';
import Wounds from '../screens/allertips/FA_wounds';
import Psychological from '../screens/allertips/FA_psychological';

const AuthStack = createStackNavigator();

export default function AllerTIPS_Nav() {
  return (
    <AuthStack.Navigator>
        <AuthStack.Screen name="Menu" component={Menu} options={{
            title: "AllerTIPS",
            headerTitleAlign:'center',
            headerStyle: {backgroundColor: '#FD7702'},
            headerTitleStyle: {
              color: 'white',
              letterSpacing: 3
            }}}/>
        <AuthStack.Screen name="FirstAid" component={FirstAid} options={{
            title: "AllerTIPS: First Aid",
            headerTitleAlign:'center',
            headerStyle: {backgroundColor: '#FD7702'},
            headerTitleStyle: {
              color: 'white',
              letterSpacing: 3
            }}}/>
        <AuthStack.Screen name="Earthquake" component={Earthquake} options={{
            title: "AllerTIPS: Earthquake",
            headerTitleAlign:'center',
            headerStyle: {backgroundColor: '#FD7702'},
            headerTitleStyle: {
              color: 'white',
              letterSpacing: 3
            }}}/>
        <AuthStack.Screen name="Landslide" component={Landslide} options={{
            title: "AllerTIPS: Landslide",
            headerTitleAlign:'center',
            headerStyle: {backgroundColor: '#FD7702'},
            headerTitleStyle: {
              color: 'white',
              letterSpacing: 3
            }}}/>
        <AuthStack.Screen name="Fire" component={Fire} options={{
            title: "AllerTIPS: Fire",
            headerTitleAlign:'center',
            headerStyle: {backgroundColor: '#FD7702'},
            headerTitleStyle: {
              color: 'white',
              letterSpacing: 3
            }}}/>
        <AuthStack.Screen name="Flood" component={Flood} options={{
            title: "AllerTIPS: Flood",
            headerTitleAlign:'center',
            headerStyle: {backgroundColor: '#FD7702'},
            headerTitleStyle: {
              color: 'white',
              letterSpacing: 3
            }}}/>
        <AuthStack.Screen name="Typhoon" component={Typhoon} options={{
            title: "AllerTIPS: Typhoon",
            headerTitleAlign:'center',
            headerStyle: {backgroundColor: '#FD7702'},
            headerTitleStyle: {
              color: 'white',
              letterSpacing: 3
            }}}/>
        <AuthStack.Screen name="VolcanicEruption" component={VolcanicEruption} options={{
            title: "AllerTIPS: Volcanic Eruption",
            headerTitleAlign:'center',
            headerStyle: {backgroundColor: '#FD7702'},
            headerTitleStyle: {
              color: 'white',
              letterSpacing: 3
            }}}/>
        <AuthStack.Screen name="RoadSafety" component={RoadSafety} options={{
            title: "AllerTIPS: Road Safety",
            headerTitleAlign:'center',
            headerStyle: {backgroundColor: '#FD7702'},
            headerTitleStyle: {
              color: 'white',
              letterSpacing: 3
            }}}/>
        <AuthStack.Screen name="PetPreparedness" component={PetPreparedness} options={{
            title: "AllerTIPS: Pet Preparedness",
            headerTitleAlign:'center',
            headerStyle: {backgroundColor: '#FD7702'},
            headerTitleStyle: {
              color: 'white',
              letterSpacing: 3
            }}}/>
        <AuthStack.Screen name="SurvivalKit" component={SurvivalKit} options={{
            title: "AllerTIPS: Survivial Kit",
            headerTitleAlign:'center',
            headerStyle: {backgroundColor: '#FD7702'},
            headerTitleStyle: {
              color: 'white',
              letterSpacing: 3
            }}}/>
        <AuthStack.Screen name="FirstAidBasics" component={FirstAidBasics} options={{
            title: "First Aid: Basics",
            headerTitleAlign:'center',
            headerStyle: {backgroundColor: '#FD7702'},
            headerTitleStyle: {
              color: 'white',
              letterSpacing: 3
            }}}/>
        <AuthStack.Screen name="CPR" component={CPR} options={{
            title: "First Aid: CPR",
            headerTitleAlign:'center',
            headerStyle: {backgroundColor: '#FD7702'},
            headerTitleStyle: {
              color: 'white',
              letterSpacing: 3
            }}}/>
        <AuthStack.Screen name="AED" component={AED} options={{
            title: "First Aid: AED",
            headerTitleAlign:'center',
            headerStyle: {backgroundColor: '#FD7702'},
            headerTitleStyle: {
              color: 'white',
              letterSpacing: 3
            }}}/>
        <AuthStack.Screen name="BLS" component={BLS} options={{
            title: "First Aid: BLS",
            headerTitleAlign:'center',
            headerStyle: {backgroundColor: '#FD7702'},
            headerTitleStyle: {
              color: 'white',
              letterSpacing: 3
            }}}/>
        <AuthStack.Screen name="Choking" component={Choking} options={{
            title: "First Aid: Choking",
            headerTitleAlign:'center',
            headerStyle: {backgroundColor: '#FD7702'},
            headerTitleStyle: {
              color: 'white',
              letterSpacing: 3
            }}}/>
        <AuthStack.Screen name="ChestPain" component={ChestPain} options={{
            title: "First Aid: Chest Pain",
            headerTitleAlign:'center',
            headerStyle: {backgroundColor: '#FD7702'},
            headerTitleStyle: {
              color: 'white',
              letterSpacing: 3
            }}}/>
        <AuthStack.Screen name="Fainting" component={Fainting} options={{
            title: "First Aid: Fainting",
            headerTitleAlign:'center',
            headerStyle: {backgroundColor: '#FD7702'},
            headerTitleStyle: {
              color: 'white',
              letterSpacing: 3
            }}}/>
        <AuthStack.Screen name="Burns" component={Burns} options={{
            title: "First Aid: Burns",
            headerTitleAlign:'center',
            headerStyle: {backgroundColor: '#FD7702'},
            headerTitleStyle: {
              color: 'white',
              letterSpacing: 3
            }}}/>
        <AuthStack.Screen name="Poisoning" component={Poisoning} options={{
            title: "First Aid: Poisoning",
            headerTitleAlign:'center',
            headerStyle: {backgroundColor: '#FD7702'},
            headerTitleStyle: {
              color: 'white',
              letterSpacing: 3
            }}}/>
        <AuthStack.Screen name="Fractures" component={Fractures} options={{
            title: "First Aid: Fractures",
            headerTitleAlign:'center',
            headerStyle: {backgroundColor: '#FD7702'},
            headerTitleStyle: {
              color: 'white',
              letterSpacing: 3
            }}}/>
        <AuthStack.Screen name="Seizures" component={Seizures} options={{
            title: "First Aid: Seizures",
            headerTitleAlign:'center',
            headerStyle: {backgroundColor: '#FD7702'},
            headerTitleStyle: {
              color: 'white',
              letterSpacing: 3
            }}}/>
        <AuthStack.Screen name="Nosebleed" component={Nosebleed} options={{
            title: "First Aid: Nosebleed",
            headerTitleAlign:'center',
            headerStyle: {backgroundColor: '#FD7702'},
            headerTitleStyle: {
              color: 'white',
              letterSpacing: 3
            }}}/>
        <AuthStack.Screen name="Wounds" component={Wounds} options={{
            title: "First Aid: Wounds",
            headerTitleAlign:'center',
            headerStyle: {backgroundColor: '#FD7702'},
            headerTitleStyle: {
              color: 'white',
              letterSpacing: 3
            }}}/>
        <AuthStack.Screen name="Psychological" component={Psychological} options={{
            title: "First Aid: Psychological",
            headerTitleAlign:'center',
            headerStyle: {backgroundColor: '#FD7702'},
            headerTitleStyle: {
              color: 'white',
              letterSpacing: 3
            }}}/>
    </AuthStack.Navigator>
  );
}