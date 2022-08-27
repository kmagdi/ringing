import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View, ImageBackground,FlatList } from 'react-native';
import { generateTable } from '../data';

export const Info=({min,hour})=> {
  const [table,setTable]=useState([])
  useEffect(()=>{
    setTable(generateTable(45,10,15))
  },[])
//console.log(table.length)
  return (
    <View>
        <Text>Az idő:{hour}-{min}</Text>
        <View>
          <FlatList
            data={table}
            renderItem={({item})=>(
                <Text>{item.key+1}:{item.start}-{item.end}</Text>
            )}
          />
         
        </View>
    </View>
  )
}
