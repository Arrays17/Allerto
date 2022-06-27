import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Menu from '../screens/emergency/emergency_menu';
import EmergencyList from '../routes/emergency_contactList';


const AuthStack = createStackNavigator();

export default function Emergency() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Home" component={Menu} 
        options={{
          title: "Allerto",
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: '#FD7702' },
          headerTitleStyle: {
            color: 'white',
            letterSpacing: 5
          }
        }}
      />
      <AuthStack.Screen name="EmergencyList" component={EmergencyList}
        options={{
          title: "Emergency",
          headerTitleAlign:'center',
          headerStyle: {backgroundColor: '#FD7702'},
          headerTitleStyle: {
            color: 'white',
            letterSpacing: 5
          }
        }}
      />
    </AuthStack.Navigator>
  );
}