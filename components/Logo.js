import React from 'react'
import { View, Text, Image } from 'react-native'

const Logo = () => {
    return (
        <View>
            <Image source={{uri: 'https://uilogos.co/img/logotype/circle.png'}} style={{height: 150, width: 150}} />
        </View>
    )
}

export default Logo
