import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Emergency from './emergency';
import EmergencyList from './emergencyContacts';

const AuthStack = createStackNavigator();

export default function Home() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Home" component={Emergency} options={{title: "Allerto",
          headerTitleAlign:'center',
          headerStyle: {backgroundColor: 'orange', },
          headerTitleStyle: {letterSpacing: 5}}}/>
      <AuthStack.Screen name="EmergencyList" component={EmergencyList}
          options={{headerTitleAlign:'center',
          headerStyle: {backgroundColor: 'orange'},
          headerTitleStyle: {letterSpacing: 3}}}/>
    </AuthStack.Navigator>
  );
}