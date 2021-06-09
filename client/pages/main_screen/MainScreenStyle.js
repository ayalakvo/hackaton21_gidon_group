import { StyleSheet } from 'react-native';
import { vw, vh } from 'react-native-expo-viewport-units'

const styles = StyleSheet.create({
    video:{
        backgroundColor:'red',
        width: vw(100), 
        height: vh(100)
    }
});
export default styles;