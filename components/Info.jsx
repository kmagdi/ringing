import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export const Info=({min,hour})=> {
  return (
    <View>
        <Text>Az idő:{hour}-{min}</Text>
    </View>
  )
}
