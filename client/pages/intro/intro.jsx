
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, Animated, Easing } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { vw, vh } from 'react-native-expo-viewport-units'
import logo from '../../assets/title.png'
import ball from '../../assets/football.png'

const Intro = ({ navigation }) => {
    const anim = new Animated.Value(0)
    const anim2 = new Animated.Value(0)
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login')
        }, 3000);
        Animated.timing(anim, {
            toValue: 2,
            duration: 1000,
            useNativeDriver: true,
            // easing: Easing.
        }).start()
        Animated.timing(anim2, {
            toValue: 2,
            duration: 600,
            delay: 900,
            useNativeDriver: true,
            // easing: Easing.quad
        }).start()


    }, [])
    return (
        <View>
            <Animated.Image
                source={logo}
                style={{
                    transform: [{
                        translateX: anim.interpolate({
                            inputRange: [0, 1, 1.3, 2],
                            outputRange: [0, -70, -70, 0]
                        })
                    }, {
                        translateY: anim.interpolate({
                            inputRange: [0, 0.8, 1, 1.3, 2],
                            outputRange: [0, -20, -30, -30, 0]
                        })
                    }],
                    position: 'absolute',
                    top: vh(30),
                    left: vw(25),
                    marginBottom: vh(5),
                    width: vw(50),
                    height: vw(25),
                }}
            />
            <Animated.Image
                source={ball}
                style={{
                    transform: [{
                        translateX: anim2.interpolate({
                            inputRange: [0, 2],
                            outputRange: [0, 300]
                        })
                    }, {
                        translateY: anim2.interpolate({
                            inputRange: [0, 1.5, 2],
                            outputRange: [0, -80, -200]
                        })
                    }],
                    position: 'absolute',
                    top: vh(40),
                    left: vw(69),
                    marginBottom: vh(5),
                    width: vw(15),
                    height: vw(15),
                }}
            />
        </View>

    );
}


const Styles = StyleSheet.create({
    title: {
        fontSize: 25,
    },
});

export default Intro;