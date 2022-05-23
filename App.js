import React, { useEffect, useState} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Home from './routes/home';
import AuthScreen from './screens/authScreen';

const AuthStack = createStackNavigator();

export default function App() {
  const [user, setUser] = useState(null)

  async function getUser() {
    const user = await AsyncStorage.getItem('user')
    if (user !== null) {
      setUser(user)
    }
  }

  useEffect(() => {
    getUser();
    console.log(user)
  }, [])

  if (user !== null) {
    return (
      <NavigationContainer>
        <AuthStack.Navigator
          screenOptions={{
            headerShown: false
          }}>
          <AuthStack.Screen
            name="Home"
            component={Home}
            options={{
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: 'orange',
              },
            }}/>
        </AuthStack.Navigator>
      </NavigationContainer>
    );
  }
  
  return (
    <NavigationContainer>
      <AuthStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <AuthStack.Screen
          name="AuthScreen"
          component={AuthScreen}
          options={{
            headerBackImage: "none",
            headerShown: true,
            headerTitle: "Register Phone Number",
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'orange',
            },
          }}/>
        <AuthStack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'orange',
            },
          }}/>
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}