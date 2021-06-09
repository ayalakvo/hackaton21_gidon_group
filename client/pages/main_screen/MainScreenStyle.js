import { StyleSheet, Dimensions, StatusBar } from 'react-native';
import { vw, vh } from 'react-native-expo-viewport-units'
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("screen");

const styles = StyleSheet.create({
    video: {
        backgroundColor:'black',
        width: SCREEN_WIDTH - StatusBar.currentHeight,
        height: SCREEN_HEIGHT,
    },
    container: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "yellow",
        // zIndex: 10
    },
    button: {
        // backgroundColor: 'red',
        textAlign: 'center',
        textAlignVertical: 'center',
        width: vw(20),
        height: vh(10),
        color: "white",
        fontWeight: "bold",
        fontSize: vh(5.5)
    }

});
export default styles;