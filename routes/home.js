import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Emergency from './emergency';
import Alerts from '../screens/alerts';
import Tracking from '../screens/tracking';
import Settings from '../screens/settings';
import AllerTips from '../routes/allertips';

const Module = createBottomTabNavigator();

export default function Home() {
  return (
      <Module.Navigator
        initialRouteName='Emergency'
        backBehavior='history'
        screenOptions={{
          tabBarActiveTintColor: 'darkorange',
          headerShown: false
        }}>
        <Module.Screen
          name="Alerts"
          component={Alerts}
          options={{
            headerShown: true,
            headerTitle: "Disaster Alerts and Notifications",
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'darkorange',
            },
            tabBarLabel: 'Alerts',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="alert" color={color} size={size} />
            ),
          }}/>
        <Module.Screen
          name="Track Me"
          component={Tracking}
          options={{
            headerShown: true,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'darkorange',
            },
            tabBarLabel: 'Track Me',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="crosshairs-gps" color={color} size={size} />
            ),
          }}/>
        <Module.Screen
          name="Emergency"
          component={Emergency}
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
            headerShown: true,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'darkorange',
            },
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cog" color={color} size={size} />
            ),
          }}/>
      </Module.Navigator>
  );
}