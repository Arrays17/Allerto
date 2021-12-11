import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
            <Icon name='menu' size={28} style={styles.menuIcon} />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        justifyContent: "center",
        width: '100%',
        height: '10%',
        backgroundColor: 'black',
    },
    headerTitle: {
        color: 'white',
        textAlign: "center",
        fontSize: 16,
        letterSpacing: 2,
    },
    menuIcon: {
        position: "absolute",
        right: 12,
    }
})