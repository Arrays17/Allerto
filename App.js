import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ServiceButton from './components/service';

export default function App() {
  return (
    <View style={styles.body}>
      <TouchableOpacity><ServiceButton title="Police" url={require('./assets/police.png')}></ServiceButton></TouchableOpacity>
      <TouchableOpacity><ServiceButton title="Hospital" url={require('./assets/icon.png')}></ServiceButton></TouchableOpacity>
      <TouchableOpacity><ServiceButton title="Fire Station" url={require('./assets/police.png')}></ServiceButton></TouchableOpacity>
      <TouchableOpacity><ServiceButton title="Road and Traffic" url={require('./assets/icon.png')}></ServiceButton></TouchableOpacity>
      <TouchableOpacity><ServiceButton title="Red Cross" url={require('./assets/police.png')}></ServiceButton></TouchableOpacity>
      <TouchableOpacity><ServiceButton title="National Disaster" url={require('./assets/icon.png')}></ServiceButton></TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingTop: 50,
    flexDirection: 'row',
    backgroundColor: '#212121',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
});
