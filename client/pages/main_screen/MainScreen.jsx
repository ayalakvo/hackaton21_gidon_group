import React, { useState, useEffect, useRef } from 'react'
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Animated, Image } from 'react-native';
import { Video } from 'expo-av';
import { StatusBar } from 'expo-status-bar';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { PacmanIndicator } from 'react-native-indicators'

//styles:
import styles from './MainScreenStyle'
import { vh, vw } from 'react-native-expo-viewport-units';


const MainScreen = ({ route, navigation }) => {
    const [showLoading, setShowLoading] = useState(false)
    const [showMen, setShowMen] = useState(true)
    const [camera, setCamera] = useState({ num: 1, time: 0 })
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({ shouldPlay: true });
    const opacityAnim = useRef(new Animated.Value(0)).current
    const timer = React.useRef(false)
    const closeMen = () => {
        setShowMen(false)
    }
    useEffect(() => {
        if (showMen) {
            clearTimeout(timer.current)
            timer.current = setTimeout(closeMen, 5000);
            Animated.timing(opacityAnim, {
                toValue: 0.8,
                duration: 1000,
                useNativeDriver: true
            }).start()
        } else {
            hideMenu()
            Animated.timing(opacityAnim, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true
            }).start()
            clearTimeout(timer.current)
        }
        return () => {
            opacityAnim.stopAnimation()
        }
    }, [showMen])
    let menu = null;
    const setMenuRef = (ref) => {
        menu = ref;
    };
    const hideMenu = () => {
        menu.hide();
    };
    const showMenu = () => {
        clearTimeout(timer.current)
        if (showMen)
            menu.show();
    };
    const changeCamera = (num) => {
        hideMenu();
        (async () => {
            let n = await video.current.getStatusAsync()
            timer.current = setTimeout(closeMen, 5000);
            setCamera({ num: num,  time: n.positionMillis });
        })();
    }
    return (
        <TouchableWithoutFeedback onPress={() => { setShowMen(prev => !prev); }}>
            <View style={{ alignItems: "center" }}>
                <StatusBar hidden />
                <Animated.View style={{ opacity: opacityAnim, position: "absolute", zIndex: 1, }}>
                    <View style={{ backgroundColor: "black", flexDirection: "row", width: vw(110), height: vh(12), alignItems: "center", justifyContent: "center", paddingHorizontal: vw(3), paddingRight: vw(10), }}>
                        <Menu
                            ref={setMenuRef}
                            button={<View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}><Text onPress={showMenu} style={styles.button}
                            >Camera {camera.num}</Text><Image source={require('../../assets/arrow4.png')} style={{ width: vh(8), height: vh(9), zIndex: 10, position: "absolute", left: vw(18) }} /></View>}
                            style={{ marginTop: vh(9), marginLeft: vh(-2) }}
                        >
                            <MenuItem onPress={() => { changeCamera(1) }}>Camera 1</MenuItem>
                            <MenuDivider />
                            <MenuItem onPress={() => { changeCamera(2) }}>Camera 2</MenuItem>
                            <MenuDivider />
                            <MenuItem onPress={() => { changeCamera(3) }}>Camera 3</MenuItem>
                            <MenuDivider />
                            <MenuItem onPress={() => { changeCamera(4) }}>Camera 4</MenuItem>
                        </Menu>
                    </View>
                    <View style={{ alignSelf: "flex-end", marginRight: vw(2.5), marginTop: vw(3) }}>
                        <TouchableOpacity>
                            <Image source={require('../../assets/facebook.png')} style={{ width: vw(6), height: vw(6), marginBottom: vw(2), borderRadius: vw(2), backgroundColor: "white" }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../../assets/instagram.png')} style={{ width: vw(6), height: vw(6), borderRadius: vw(2) }} />
                        </TouchableOpacity>
                    </View>
                </Animated.View>
                {camera.num === 1 && <Video
                    onLoad={() => setShowLoading(false)}
                    onLoadStart={() => setShowLoading(true)}
                    ref={video}
                    style={styles.video}
                    source={require('../../assets/Movie1.mp4')}
                    useNativeControls
                    resizeMode="contain"
                    shouldPlay={true}
                    positionMillis={camera.num == 1 ? camera.time : null}
                    onPlaybackStatusUpdate={status => setStatus(() => { return { shouldPlay: true } })}
                />}
                {camera.num === 2 && <Video
                    onLoad={() => setShowLoading(false)}
                    onLoadStart={() => setShowLoading(true)}
                    ref={video}
                    style={styles.video}
                    source={require('../../assets/Movie2.mp4')}
                    positionMillis={camera.num == 2 ? camera.time : null}
                    useNativeControls
                    resizeMode="contain"
                    shouldPlay={true}
                    onPlaybackStatusUpdate={status => setStatus(() => { return { shouldPlay: true } })}
                />}
                {camera.num === 3 && <Video
                    onLoad={() => setShowLoading(false)}
                    onLoadStart={() => setShowLoading(true)}
                    ref={video}
                    positionMillis={camera.num == 3 ? camera.time : null}
                    style={styles.video}
                    source={require('../../assets/Movie3.mp4')}
                    useNativeControls
                    resizeMode="contain"
                    shouldPlay={true}
                    onPlaybackStatusUpdate={status => setStatus(() => { return { shouldPlay: true } })}
                />}
                {camera.num === 4 && <Video
                    onLoad={() => setShowLoading(false)}
                    onLoadStart={() => setShowLoading(true)}
                    ref={video}
                    positionMillis={camera.num == 4 ? camera.time : null}
                    style={styles.video}
                    source={require('../../assets/Movie4.mp4')}
                    useNativeControls
                    resizeMode="contain"
                    shouldPlay={true}
                    onPlaybackStatusUpdate={status => setStatus(() => { return { shouldPlay: true } })}
                />}
                {showLoading && <PacmanIndicator style={{ position: 'absolute', left: vw(47), height: vh(95) }} color="white" />}
            </View>
        </TouchableWithoutFeedback>

    )
}
export default MainScreen