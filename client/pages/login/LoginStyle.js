import { StyleSheet, Dimensions } from 'react-native';
import { vw, vh } from 'react-native-expo-viewport-units'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        marginBottom: vh(5),
        width: vw(65),
        height: vw(40),
    },
    inputView: {
        backgroundColor: "#afdee1",
        borderRadius: vw(20),
        width: "70%",
        height: vh(7),
        marginBottom: vh(3),
        alignItems: "center",
        justifyContent: "center"
    },
    TextInput: {
        textAlign: "center",
        width: "90%",
        height: "90%",
    },
    forgot_button: {
        height: vh(5),
    },
    loginBtn: {
        width: "80%",
        borderRadius: vw(20),
        height: vh(8),
        alignItems: "center",
        justifyContent: "center",
        marginTop: vh(5),
        backgroundColor: "#84cbb4",
    },
});

export default styles;