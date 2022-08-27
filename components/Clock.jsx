import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';


const nowDate = () => {
  const d = new Date();
  let second = d.getSeconds();
  let minute = d.getMinutes();
  let hour = d.getHours();
  //console.log(d.toLocaleDateString(),hour,minute,second);
  return { s:second, m:minute, h:hour };
};


export const Clock=({setMin,setHour})=> {
  const [currentTime,setCurrentTime ] = useState('');
 
  useEffect(()=> {
   const time=nowDate();
   
   const idref=setInterval(()=>{
        setCurrentTime(`${time.h}:${time.m}:${time.s}`)
        setMin(time.m)
        setHour(time.h)
   },1000)   
return ()=>clearInterval(idref)
  },[currentTime])

  return (
    <View style={styles.container}>
     
        <Text style={styles.text}>{currentTime}</Text>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height:70,
    marginLeft:130,
    marginRight:130
   
  },
  text:{
    textAlign: 'center',
    borderRadius:20,
    borderWidth:1,
    borderColor:'white',
    padding:10,
     backgroundColor:'rgb(250,216,89)'
  }
});