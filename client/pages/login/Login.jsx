import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { vw, vh } from 'react-native-expo-viewport-units'

const Login = ({ route, navigation }) => {
    return (
        <View>
            <Text>Login</Text>
            <TouchableOpacity onPress={() => {navigation.navigate("MainScreen")}} style={{alignSelf: "center", marginTop: vh(5)}}>
                <Text>
                    Move to main screen
                </Text>
            </TouchableOpacity>
        </View>
    )
}
export default Login