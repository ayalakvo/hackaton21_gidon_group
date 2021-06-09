import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { vw } from 'react-native-expo-viewport-units';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

//styles:
import styles from './MenuScreenStyle'

const MenuScreens = ({ route, navigation }) => {
    let menu = null;

    const setMenuRef = (ref) => {
        menu = ref;
    };

    const hideMenu = () => {
        menu.hide();
    };

    const showMenu = () => {
        menu.show();
    };
    return (
        <View style={styles.container}>
            <Menu
                ref={setMenuRef}
                button={<Text onPress={showMenu} style={styles.button}
                >Camera Menu</Text>}>
                <MenuItem onPress={hideMenu}>Camera 1</MenuItem>
                <MenuDivider />
                <MenuItem onPress={hideMenu}>Camera 2</MenuItem>
                <MenuDivider />
                <MenuItem onPress={hideMenu} disabled>Camera 3</MenuItem>
                <MenuDivider />
                <MenuItem onPress={hideMenu}>Camera 4</MenuItem>
            </Menu>
        </View>
    )
}
export default MenuScreens