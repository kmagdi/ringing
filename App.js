import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Header} from './components/Header'
import {Radios} from './components/Radios'

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Radios/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(234,242,215,1)',
    
  },
});
