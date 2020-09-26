import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Articles = () => {
  return (
    <View style={styles.container}>
      <View style={styles.articleContainer}>
        <Text style={styles.heading}>
            Welcome to the Authorized Screen
        </Text>
        <Text style={styles.heading}>
            You're Logged In from Firebase
        </Text>
        <TouchableOpacity style={{padding:20}}>
            <Text style={{color:'#1B9CFC'}}>
              Log Out
            </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
   container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
      
       
    },
    articleContainer:{
      padding:10,
      borderBottomColor:'rgba(255,255,255,.7)',
      borderBottomWidth:5
    },
    heading:{
       fontSize:22,
       color:'black',
    
       marginBottom:10
    },
    content:{
      marginTop:10,
      fontSize:19,
      
    }
});

export default Articles;