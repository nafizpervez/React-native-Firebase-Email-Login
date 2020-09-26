import React, { Component } from 'react';
import firebase from 'firebase'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import Articles from './Articles';
import LoginForm from './LoginForm';
import BG from '../img/bg.jpg';

import Loading from './Loading'

class App extends Component{
  
  state={
    loggedIn: null
  }

  componentDidMount(){
     // Your web app's Firebase configuration
     var firebaseConfig = {
      apiKey: "AIzaSyA6HBI_id81CY-QBE5LvZBI-Amys86A1yM",
      authDomain: "lenus-data.firebaseapp.com",
      databaseURL: "https://lenus-data.firebaseio.com",
      projectId: "lenus-data",
      storageBucket: "lenus-data.appspot.com",
      messagingSenderId: "56338835154",
      appId: "1:56338835154:web:ddc4f1b93cdca2f2b32f0b"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
  firebase.auth().onAuthStateChanged(user => {
    if(user){
       this.setState({
         loggedIn:true
       })  }
       else{
      this.setState({
        loggedIn:false
      })
    }
  })
  }

  renderContent = () => {
    switch(this.state.loggedIn){
      case false:
        return <ImageBackground style={styles.container} source={BG} >
          <LoginForm/>
        </ImageBackground>

      case true:
        return <Articles/>

      default:
        return <Loading/>
    }
  }
  
  render(){
    return (
      <View style={styles.container}>
       {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  
  },
});

export default App;