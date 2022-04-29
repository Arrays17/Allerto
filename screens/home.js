import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Emergency from './emergency';
import EmergencyList from './emergencyContacts';
import Earthquake from './tip_earthquake';
import Landslide from './tip_landslide';
import Fire from './tip_fire';
import Flood from './tip_flood';
import Typhoon from './tip_typhoon';
import VolcanicEruption from './tip_volcanicEruption';
import FirstAid from './tip_firstAid';
import SurvivalKit from './tip_survivalKit';

const AuthStack = createStackNavigator();

export default function Home() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Home" component={Emergency} options={{title: "Allerto",
          headerTitleAlign:'center',
          headerStyle: {backgroundColor: 'orange'},
          headerTitleStyle: {letterSpacing: 5}}}/>
      <AuthStack.Screen name="EmergencyList" component={EmergencyList}
          options={{headerTitleAlign:'center',
          headerStyle: {backgroundColor: 'orange'},
          headerTitleStyle: {letterSpacing: 3}}}/>
      <AuthStack.Screen name="Earthquake" component={Earthquake} options={{
          headerTitleAlign:'center',
          headerStyle: {backgroundColor: 'orange'},
          headerTitleStyle: {letterSpacing: 5}}}/>
      <AuthStack.Screen name="Landslide" component={Landslide} options={{
          headerTitleAlign:'center',
          headerStyle: {backgroundColor: 'orange'},
          headerTitleStyle: {letterSpacing: 5}}}/>
      <AuthStack.Screen name="Fire" component={Fire} options={{
          headerTitleAlign:'center',
          headerStyle: {backgroundColor: 'orange'},
          headerTitleStyle: {letterSpacing: 5}}}/>
      <AuthStack.Screen name="Flood" component={Flood} options={{
          headerTitleAlign:'center',
          headerStyle: {backgroundColor: 'orange'},
          headerTitleStyle: {letterSpacing: 5}}}/>
      <AuthStack.Screen name="Typhoon" component={Typhoon} options={{
          headerTitleAlign:'center',
          headerStyle: {backgroundColor: 'orange'},
          headerTitleStyle: {letterSpacing: 5}}}/>
      <AuthStack.Screen name="VolcanicEruption" component={VolcanicEruption} options={{
          headerTitleAlign:'center',
          headerStyle: {backgroundColor: 'orange'},
          headerTitleStyle: {letterSpacing: 5}}}/>
      <AuthStack.Screen name="FirstAid" component={FirstAid} options={{
          headerTitleAlign:'center',
          headerStyle: {backgroundColor: 'orange'},
          headerTitleStyle: {letterSpacing: 5}}}/>
      <AuthStack.Screen name="SurvivalKit" component={SurvivalKit} options={{
          headerTitleAlign:'center',
          headerStyle: {backgroundColor: 'orange'},
          headerTitleStyle: {letterSpacing: 5}}}/>
    </AuthStack.Navigator>
  );
}