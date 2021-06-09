import { StyleSheet } from 'react-native';
import { vw, vh } from 'react-native-expo-viewport-units'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: 'red',
        textAlign: 'center',
        textAlignVertical: 'center',
        width: vw(20),
        height: vh(10)
    }
});
export default styles;