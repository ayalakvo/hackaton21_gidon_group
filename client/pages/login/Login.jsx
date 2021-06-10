import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Image, StatusBar } from 'react-native';
import { vw, vh } from 'react-native-expo-viewport-units'
import Axios from 'axios';
import styles from './LoginStyle';

const Login = ({ route, navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")

    const EMAIL = 'gidon@gmail.com'
    const PASSWORD = '1234'

    const handleLogin = async () => {
        try {
            if (EMAIL == email && PASSWORD == password) {
                setError("")
                navigation.navigate("MainScreen")
            }
            else{
                setError('Unknown user. please try again')
            } 
        } catch (error) {
            console.log('error: ', error);
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Image style={styles.image} source={require("../../assets/sports.jpg")} />

                <StatusBar style="auto" />
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Email"
                        placeholderTextColor="#003f5c"
                        onChangeText={(email) => setEmail(email)}
                    />
                </View>

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Password"
                        placeholderTextColor="#003f5c"
                        secureTextEntry={true}
                        onChangeText={(password) => setPassword(password)}
                    />
                </View>

                <TouchableOpacity>
                    <Text style={styles.forgot_button}>Forgot Password?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
                    <Text style={styles.loginText}>LOGIN</Text>
                </TouchableOpacity>
                <Text>
                    {
                        error ? error : ''
                    }
                </Text>
            </View>
        </TouchableWithoutFeedback>
    )
}
export default Login