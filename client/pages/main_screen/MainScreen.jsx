import React, { useState, useEffect } from 'react'
import Menu from '../../components/MenuScreen'
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import VideoPlayer from 'expo-video-player'
import { StatusBar } from 'expo-status-bar';

//styles:
import styles from './MainScreenStyle'

const MainScreen = ({ route, navigation }) => {
    const [now, setNow] = useState(8000)
    useEffect(() => {
        setInterval(() => {
            setNow((prevnow) => prevnow + 1000)
        }, 1000);
    }, [])
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    return (
        <View>
            <StatusBar hidden />
            <Menu />
            <VideoPlayer
                videoProps={{
                    shouldPlay: true,
                    resizeMode: Video.RESIZE_MODE_CONTAIN,
                    source: {
                        uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                    },
                }}
                // fadeInDuration={300}
                hideControlsTimerDuration={3000}
                // playIcon
                // pauseIcon
                inFullscreen={true}
            />
            {/* <TouchableOpacity activeOpacity={1}>
                <Video
                    ref={video}
                    style={styles.video}
                    source={{
                        uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                    }}
                    // rate={
                    useNativeControls
                    // positionMillis={now}//איפה שהעיגול נמצא
                    resizeMode="contain"
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                />
            </TouchableOpacity> */}

        </View>
    )
}
export default MainScreen