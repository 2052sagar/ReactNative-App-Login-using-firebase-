import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import firebase from 'firebase'

export default class EmailAndPassword extends Component {

    state ={
        email: '',
        password: '',
        error: '',
        loading: false
    }

    onButtonPress = () => {
        this.setState({
            loading: true
        })
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(this.onLoginSuccess)
        .catch(err => {
            this.setState({
                error: err.message,
                loading: false
            })
        })
    }

    onLoginSuccess = () => {
        this.setState({
            error: '',
            loading: false
        })
    }

    showLoading = () => {
        if(this.state.loading){
            return <ActivityIndicator size='large' color='#38a1d9'/>
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput 
                    placeholder="email" 
                    style={styles.input} 
                    value={this.state.email}
                    onChangeText={email => this.setState({email})}
                />
                <TextInput 
                    placeholder="password" 
                    style={styles.input} 
                    secureTextEntry
                    value={this.state.password}
                    onChangeText={password => this.setState({password})}
                />

                <TouchableOpacity style={styles.buttonContainer} onPress={this.onButtonPress}>
                   <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <Text style={styles.errorText}>
                    {this.state.error}
                </Text>
                {this.showLoading()}
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    input:{
        height: 40,
        backgroundColor: 'rgba(242,243,245,.5)',
        paddingLeft: 10,
        marginBottom:15,
        borderRadius: 5,
        fontSize: 15,
    },
    errorText: {
        fontSize: 20,
        color: 'red',
        alignSelf: 'center',
        marginTop: 10
    },
    buttonText: {
        textAlign: 'center',
        color:'#fff',
        fontWeight:'bold',
        fontSize:20,
    },
    buttonContainer: {
        backgroundColor:'#38a1d9',
        padding: 12,
        borderRadius: 8
    }
})
