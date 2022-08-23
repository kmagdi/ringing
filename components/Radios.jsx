import React, { useEffect, useState } from 'react'
//import { Formik} from 'formik';
import {StyleSheet,View} from 'react-native'
import {RadioButton,Text } from 'react-native-paper';

export const Radios=()=>{
    const [value,setValue] =useState('45')
    const [pause,setPause] = useState('10')
    const [bigPause,setBigPause] = useState('15')
    useEffect(()=>{
        console.log('változott:',value,pause,bigPause)
    },[value,pause,bigPause])
  return (
       <View >
        <Text style={styles.text}>Válaszd ki a tanóra hosszát:</Text>
        <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                <View style={styles.radiosHolder}>
                    <RadioButton value='45'></RadioButton>
                    <Text style={styles.label}>45 min</Text>
                </View>
                <View style={styles.radiosHolder}>
                    <RadioButton value='35'></RadioButton>
                    <Text  style={styles.label}>35 min</Text>
                </View>
                <View style={styles.radiosHolder}>
                    <RadioButton value='30'></RadioButton>
                    <Text  style={styles.label}>30 min</Text>
                </View>
    </RadioButton.Group>

    <Text style={styles.text}>Add meg a szünet hosszát:</Text>
    <RadioButton.Group onValueChange={newValue => setPause(newValue)} value={pause}>
            <View style={styles.radiosHolder}>
                <RadioButton value='10'></RadioButton>
                <Text style={styles.label}>10 min</Text>
            </View>
            <View style={styles.radiosHolder}>
                <RadioButton value='5'></RadioButton>
                <Text  style={styles.label}>5 min</Text>
            </View>
    </RadioButton.Group>

    <Text style={styles.text}>Add meg a NAGY szünet hosszát:</Text>
    <RadioButton.Group onValueChange={newValue => setBigPause(newValue)} value={bigPause}>
            <View style={styles.radiosHolder}>
                <RadioButton value='15'></RadioButton>
                <Text style={styles.label}>15 min</Text>
            </View>
            <View style={styles.radiosHolder}>
                <RadioButton value='10'></RadioButton>
                <Text  style={styles.label}>10 min</Text>
            </View>
    </RadioButton.Group>


    </View>
      
  )
}

const styles = StyleSheet.create({
    radiosHolder:{
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
  label:{
    fontSize:24
  } ,
  text:{
    textAlign: 'center',
    paddingTop:10
  } 
})