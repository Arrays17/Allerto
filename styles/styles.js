'use strict';
import { StyleSheet } from "react-native";

module.exports = StyleSheet.create({
    // Header Component Styles
    header: {
        paddingTop: 30,
        justifyContent: "center",
        width: '100%',
        height: 75,
        backgroundColor: 'black',
    },
    headerTitle: {
        color: 'white',
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold",
        letterSpacing: 3,
    },
    menuIcon: {
        position: "absolute",
        color: 'white',
        right: 16,
        top: 40,
    },

    // Home Page Styles
    
    body: {
        flex: 1,
        height: "100%",
        paddingTop: 10,
        flexDirection: 'row',
        backgroundColor: '#212121',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
})