import React,{useState} from 'react'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Header} from './components/Header'
import {Radios} from './components/Radios'
import {Clock} from './components/Clock'
import {Info} from './components/Info'

export default function App() {
  const [hour,setHour]=useState('')
  const [min,setMin]=useState('')
  return (
    <View style={styles.container}>
      <Header/>
      <Radios/>
      <Clock setMin={setMin} setHour={setHour}/>
      <Info min={min} hour={hour}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(234,242,215,1)',
    
  },
});
