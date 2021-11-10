import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';


export default function End() {

    return(

        <View style={styles.end}>
           
              <Text style={styles.email}>Email</Text>

              <TextInput style={styles.input1}></TextInput>

              <Text style={styles.paswoard}>Passwoard</Text>

              <TextInput style={styles.input2}></TextInput>

              <View style={styles.last} 
               onPress={() => {
                
                <View style={[styles.container, styles.horizontal]}>
         
             <ActivityIndicator size="large" />
               </View>
              }}
              >
                  <TouchableOpacity style={styles.btn3}>
                      <Text>continue</Text>
                  </TouchableOpacity>
                 
              </View>
              <View style={styles.lastText}>
              <Text style={styles.text3}>forgot your passwoard</Text>
              </View>
        </View>

       
    )
}



const styles = StyleSheet.create({

   end: {

      flex: 3,
      backgroundColor: 'green',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black'
   },

   input1: {

      borderBottomWidth: 1,
      width: 300,
      color: '#fff',
      borderBottomColor: '#fff'
    
    
   },
   input2: {

    borderBottomWidth: 1,
    width: 300,
    borderBottomColor: 'coral'
    
  
  
 },

 email: {
    
    color: '#fff'

 },
 paswoard: {

    marginTop: 40,
   color: '#fff'
 },
 last: {

    backgroundColor: '#fff',
    marginTop: 30,
    
 },
 btn3: {

    borderWidth: 1,
    backgroundColor: '#D96026',
    width: 250,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
   
 },
 lastText:{

    marginTop: 10
 },

 text3:{

    color: '#7597D9'
    
 },
   horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }

});