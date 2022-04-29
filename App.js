import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './screens/home';
import Alerts from './screens/alerts';
import Tracking from './screens/tracking';
import Settings from './screens/settings';
import AllerTips from './screens/allerTips';
const s = require('./styles/styles');

const Module = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Module.Navigator
        initialRouteName='Emergency'
        screenOptions={{
          tabBarActiveTintColor: 'orange',
        }}>
        <Module.Screen
          name="Alerts"
          component={Alerts}
          options={{
            tabBarLabel: 'Alerts',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="alert" color={color} size={size} />
            ),
          }}/>
        <Module.Screen
          name="Track Me"
          component={Tracking}
          options={{
            tabBarLabel: 'Track Me',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="crosshairs-gps" color={color} size={size} />
            ),
          }}/>
        <Module.Screen
          name="Emergency"
          component={Home}
          options={{
            tabBarLabel: 'Emergency',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="phone" color={color} size={size} />
            ),
          }}/>
        <Module.Screen
          name="AllerTIPS"
          component={AllerTips}
          options={{
            tabBarLabel: 'AllerTIPS',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="lightbulb-on" color={color} size={size} />
            ),
          }}/>
        <Module.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cog" color={color} size={size} />
            ),
          }}/>
      </Module.Navigator>
    </NavigationContainer>
  );
}