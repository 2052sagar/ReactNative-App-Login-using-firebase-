import React, {Component} from 'react'
import {Text, View, StyleSheet, ImageBackground} from 'react-native'
import LoginForm from './LoginForm'
import Articles from './Articles'
import BG from '../images/bg.jpg'
import firebase from 'firebase'
import Loading from './Loading'

export default class App extends Component {

  state ={
    loggedIn: null,
  }

  componentDidMount() {
    var firebaseConfig = {
      apiKey: "AIzaSyCpKZvls9UNKDLszeKPKnImawn0tLv299c",
      authDomain: "login-85116.firebaseapp.com",
      databaseURL: "https://login-85116.firebaseio.com",
      projectId: "login-85116",
      storageBucket: "login-85116.appspot.com",
      messagingSenderId: "946336540861",
      appId: "1:946336540861:web:f2644d2b0ed4b701136fd4",
      measurementId: "G-N48NF48QP8"
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
   }


    firebase.auth().onAuthStateChanged(user => {
      if(user){
       this.setState({
         loggedIn: true
       })
      }else {
        this.setState({
          loggedIn: false
        })

      }
    })
  }

  renderContent = () => {
    switch (this.state.loggedIn) {
      case false:
        return <ImageBackground style={styles.container} source={BG}>
              <LoginForm/>
          </ImageBackground>
          
      case true:
        return <Articles/>
        
      default:
        return <Loading />
       
    }
  }

  render(){
    return(
      <View style={styles.container}>
        { this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      height: '100%',
      width: '100%'
  },
});