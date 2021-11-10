import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image, Alert } from 'react-native';


export default function Center() {

    return(

        <View style={styles.div1}>

            <TouchableOpacity  style={styles.bt1} onPress={()=> {Alert.alert('Google')}}>
                <Text style={styles.btn1}>
                    <Image source={require('../assets/2.png')}></Image>
                    
                    continue with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bt2} onPress={() => {Alert.alert('Facebook')}}>
                <Text style={styles.btn2}> <Image source={require('../assets/1.png')}></Image>
                    continue with Facebook</Text>
            </TouchableOpacity>
        </View>

    )
}


const styles = StyleSheet.create({

   div1:{
       flex: 2,
       backgroundColor: '#292624',
       width: '100%',
       justifyContent: 'center',
       alignItems: 'center',
       
   },
   btn1: {

    borderWidth: 1,
    backgroundColor: '#C4C4C4',
    width: 300,
    height: 50,
    borderRadius: 5,
    
    
   },
   btn2: {

    borderWidth: 1,
    backgroundColor: '#45619D',
    width: 300,
    height: 50,
    marginTop: 20,
    borderRadius: 5,
    justifyContent:"center",
    alignItems: 'center'
   },

  bt1:{

    // justifyContent:"center",
    // alignItems: 'center'
  }
});