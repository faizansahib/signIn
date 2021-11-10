import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImagePickerIOS, StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import Header from './components/header';
import Center from './components/center';
import End from './components/end'

export default function App() {
  return (
   
   
    <View style={styles.container}>
      

      <Header/>
      <Center/>
      <End/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contan:{

    flex: 1
  }
});
