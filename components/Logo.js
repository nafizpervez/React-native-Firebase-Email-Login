import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'

const Logo = () => {
  return (
    <View>
      <Image source={{uri: 'https://seeklogo.com/images/H/hand-heart-logo-C564DAB0BB-seeklogo.com.png'}} style={{height:100, width:90}}/> 
    </View>
  );
};


export default Logo;