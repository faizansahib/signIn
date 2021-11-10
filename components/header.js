import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


  export default function Header() {

    return(

        <View style={styles.header}>
            <Text style={styles.text1}>Sign in</Text>
        </View>
    )
  }


  const styles = StyleSheet.create({
   
     header: {

        flex: 1,
        backgroundColor: 'red',
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000'
     },
     text1: {

        color: '#fff',
        
        fontSize: 35

     }

  });