import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import EmergencyContactList from '../screens/emergency/emergency_contactList';
import Favorites from '../screens/emergency/emergency_favorites';

const Tab = createMaterialTopTabNavigator();

export default function Emergency_ContactList({route}) {
  const {headerTitle, keyword} = route.params

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#d04a07',
        tabBarStyle: {backgroundColor: '#ffdec4'},
        tabBarIndicatorStyle: {backgroundColor: '#d04a07'}}}
    >
        <Tab.Screen name="EmergencyContactList" 
           children={()=><EmergencyContactList  keyword={keyword}/>}
           options={{
              tabBarLabel: headerTitle,}}
        />
        <Tab.Screen name="Favorites"
           children={()=><Favorites  keyword={keyword}/>}
           options={{ 
              tabBarLabel: 'Favorites',
              lazy: true,
            }}
        />
    </Tab.Navigator>
  );
}