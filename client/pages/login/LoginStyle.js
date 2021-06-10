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
        width: vw(28),
        height: vw(12),
    },
    inputView: {
        backgroundColor: "#9e9c9c",
        borderRadius: vw(20),
        width: vw(40),
        height: vh(10),
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
        height: vh(10),
    },
    loginBtn: {
        width: vw(40),
        borderRadius: vw(20),
        height: vh(10),
        alignItems: "center",
        justifyContent: "center",
        marginTop: vh(5),
        backgroundColor: "#444343",
    },
});

export default styles;