import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import EmailAndPassword from './EmailAndPassword';

import Logo from './Logo';

const LoginForm = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
            <Logo/>
      </View>

      <View style={styles.emailAndPass}>
            <EmailAndPassword/>   
            </View>
    </View>
  );
};

const styles = StyleSheet.create({
container: {
    flex:1,
    
},
logoContainer:{
    flex:1,
    alignItems: 'center',
    justifyContent:'center'
},
emailAndPass:{
    flex:2
}


});

export default LoginForm;