import React from 'react'
import {StyleSheet,Text,View,Image} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

export const Header=()=> {
  return (
    <View style={styles.header}>
         <LinearGradient
            // Background Linear Gradient
            colors={['transparent','rgb(250,216,89)']}
            style={styles.background}>
                <View style={styles.imgTextHolder}>
                    <Image source={require('../assets/myicon.png')} style={{width:50,height:50}}/>
                    <Text style={styles.titleText}>Csengetési rend</Text>
                </View>
           
        </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
    header:{
        height:100,
        marginTop:10
        
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height:100,
        paddingTop:30,
      },
    titleText:{
        fontWeight:'bold',
        fontSize:20,
        textAlign:'center',
        paddingLeft:10,
        paddingTop:10
    },
    imgTextHolder:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
    }
})