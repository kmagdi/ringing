import React, { useEffect, useState } from 'react'
//import { Formik} from 'formik';
import {StyleSheet,View} from 'react-native'
import {RadioButton,Text } from 'react-native-paper';


export const Radios=()=>{
    const [value,setValue] =useState('45')
    const [pause,setPause] = useState('10')
    const [bigPause,setBigPause] = useState('15')
    const [timepiece,setTimepiece] = useState('')
    const [beginTime,setBeginTime] = useState('')
    const [endTime,setEndTime] = useState('')
    const [actTime,setActTime] = useState('')

    useEffect(()=>{
        console.log('változott:',value,pause,bigPause)
       /* const idRef=setInterval(()=>{dispatch({type:'tick'})},1000)
        return ()=>{
            clearInterval(idRef)
        }*/
    },[value,pause,bigPause])

   /* const showInfo=()=>{

    }*/
  return (
       <View >
        <Text style={styles.text}>Válaszd ki a <Text style={styles.textBold}>tanóra</Text> hosszát:</Text>
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

    <Text style={styles.text}>Add meg a <Text style={styles.textBold}>szünet</Text> hosszát:</Text>
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

    <Text style={styles.text}>Add meg a <Text style={styles.textBold}>NAGY szünet</Text> hosszát:</Text>
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
<Text>
   
</Text>
    
    
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
    fontSize:18
  } ,
  text:{
    textAlign: 'center',
    paddingTop:10
  } ,
  textBold:{
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize:20
  }
})