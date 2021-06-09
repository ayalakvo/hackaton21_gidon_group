import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { vh } from 'react-native-expo-viewport-units';

//styles:
// import styles from './MainScreenStyle'

const MainScreen = ({ route, navigation }) => {
    return (
        <View>
            <Text>Login</Text>
            <TouchableOpacity onPress={() => {navigation.navigate("Login")}} style={{alignSelf: "center", marginTop: vh(5)}}>
                <Text>
                    Move to login
                </Text>
            </TouchableOpacity>
        </View>
    )
}
export default MainScreen