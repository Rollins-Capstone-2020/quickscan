import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import logo from './assets/logo2.png';

export default function App() {
  return (
    <View style={styles.container}>
      
      <StatusBar  
        backgroundColor="#D00000"
        barStyle="light-content"/>

      <Image source={logo} style={styles.logo} />  
      <Text style ={styles.instructions}>
        Welcome! </Text>
      <Text style ={styles.instructions}>
        Login to begin</Text>

     <TouchableOpacity
     onPress={() => alert('Hi there!')}
      style ={styles.button}><Text style ={styles.buttonText}>Log in</Text>
       </TouchableOpacity>   
    </View>
  );
}

//STYLE
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bdc667',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
logo: {
  width: 305,
  height: 159,
  marginBottom: 10,
},
instructions: {
  color: '#888',
  fontSize: 18,
  marginHorizontal: 15,
  marginBottom: 10,
},
buttonText: {
  fontSize: 20,
  color: '#fff',
},

button: {
  backgroundColor: '#383961',
  padding: 20,
  borderRadius: 5,
},
});
