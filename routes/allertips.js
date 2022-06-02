import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Menu from '../screens/allertips/allertips_menu';
import Earthquake from '../screens/allertips/tip_earthquake';
import Landslide from '../screens/allertips/tip_landslide';
import Fire from '../screens/allertips/tip_fire';
import Flood from '../screens/allertips/tip_flood';
import Typhoon from '../screens/allertips/tip_typhoon';
import VolcanicEruption from '../screens/allertips/tip_volcanicEruption';
import FirstAid from '../screens/allertips/tip_firstAid';
import SurvivalKit from '../screens/allertips/tip_survivalKit';

const AuthStack = createStackNavigator();

export default function AllerTIPS_Nav() {
  return (
    <AuthStack.Navigator>
        <AuthStack.Screen name="Menu" component={Menu} options={{
            title: "AllerTIPS",
            headerTitleAlign:'center',
            headerStyle: {backgroundColor: 'orange'},
            headerTitleStyle: {letterSpacing: 5}}}/>
        <AuthStack.Screen name="Earthquake" component={Earthquake} options={{
            title: "AllerTIPS: Earthquake",
            headerTitleAlign:'center',
            headerStyle: {backgroundColor: 'orange'},
            headerTitleStyle: {letterSpacing: 3}}}/>
        <AuthStack.Screen name="Landslide" component={Landslide} options={{
            title: "AllerTIPS: Landslide",
            headerTitleAlign:'center',
            headerStyle: {backgroundColor: 'orange'},
            headerTitleStyle: {letterSpacing: 3}}}/>
        <AuthStack.Screen name="Fire" component={Fire} options={{
            title: "AllerTIPS: Fire",
            headerTitleAlign:'center',
            headerStyle: {backgroundColor: 'orange'},
            headerTitleStyle: {letterSpacing: 3}}}/>
        <AuthStack.Screen name="Flood" component={Flood} options={{
            title: "AllerTIPS: Flood",
            headerTitleAlign:'center',
            headerStyle: {backgroundColor: 'orange'},
            headerTitleStyle: {letterSpacing: 3}}}/>
        <AuthStack.Screen name="Typhoon" component={Typhoon} options={{
            title: "AllerTIPS: Typhoon",
            headerTitleAlign:'center',
            headerStyle: {backgroundColor: 'orange'},
            headerTitleStyle: {letterSpacing: 3}}}/>
        <AuthStack.Screen name="VolcanicEruption" component={VolcanicEruption} options={{
            title: "AllerTIPS: Volcanic Eruption",
            headerTitleAlign:'center',
            headerStyle: {backgroundColor: 'orange'},
            headerTitleStyle: {letterSpacing: 2}}}/>
        <AuthStack.Screen name="FirstAid" component={FirstAid} options={{
            title: "AllerTIPS: First Aid",
            headerTitleAlign:'center',
            headerStyle: {backgroundColor: 'orange'},
            headerTitleStyle: {letterSpacing: 3}}}/>
        <AuthStack.Screen name="SurvivalKit" component={SurvivalKit} options={{
            title: "AllerTIPS: Survivial Kit",
            headerTitleAlign:'center',
            headerStyle: {backgroundColor: 'orange'},
            headerTitleStyle: {letterSpacing: 3}}}/>
    </AuthStack.Navigator>
  );
}