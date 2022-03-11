import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/home';
import EmergencyList from './screens/emergencyContacts';
const s = require('./styles/styles');

const AuthStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen name="Home" component={Home} options={{title: "Allerto",
            headerTitleAlign:'center', 
            headerStyle: {backgroundColor: 'orange'},
            headerTitleStyle: {letterSpacing: 5}}}/>
        <AuthStack.Screen name="EmergencyList" component={EmergencyList} 
            options={{headerTitleAlign:'center', 
            headerStyle: {backgroundColor: 'orange'},
            headerTitleStyle: {letterSpacing: 3}}}/>
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}