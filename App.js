import React, { useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PushNotification, {Importance} from 'react-native-push-notification';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Home from './routes/home';
import AuthScreen from './screens/authScreen';

const AuthStack = createStackNavigator();
PushNotification.createChannel({
  channelId: 'allerto-alerts-notification-channel-42069',
  channelName: 'Allerto Notifcation Channel',
  channelDescription: 'Notification Channel for Allerto App',
  playSound: false,
  soundName: 'default',
  importance: Importance.HIGH,
  vibrate: true,
},
(created) => {console.log('Notification Channel Created?', created);}
)

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
                backgroundColor: 'darkorange',
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
              backgroundColor: 'darkorange',
            },
          }}/>
        <AuthStack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'darkorange',
            },
          }}/>
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}