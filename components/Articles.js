import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import firebase from 'firebase'

const Articles = () => {
    return (
        <View style={styles.container}>
            <View style={styles.articleContainer}>
                <Text style={styles.heading}>
                    Welcome to authorized screen
                </Text>
                <Text style={styles.content}>
                    You are logged in from firebase
                </Text>
            </View>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => firebase.auth().signOut()}>
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
      
    },
    articleContainer: {
        padding: 10,
        borderBottomColor: 'rgba(255,255,255,.7)',
        borderBottomWidth: 5,
    },
    heading: {
        fontSize: 20,
        color: 'black',
        marginBottom: 10,
    },
    content: {
        fontSize: 16,
        marginTop: 10,
    },
    buttonText: {
        textAlign: 'center',
        color:'#fff',
        fontWeight:'bold',
        fontSize:20,
    },
    buttonContainer: {
        margin: 10,
        backgroundColor:'#38a1d9',
        padding: 15,
        borderRadius: 8
    }
});

export default Articles
