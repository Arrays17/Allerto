import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/home';
import EmergencyList from './screens/emergencyContacts';

const AuthStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen name="Home" component={Home} options={{title: "Allerto"}}/>
        <AuthStack.Screen name="EmergencyList" component={EmergencyList} options={{title: "Stations"}}/>
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}