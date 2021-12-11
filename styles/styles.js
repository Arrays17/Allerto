'use strict';
import { StyleSheet } from "react-native";

module.exports = StyleSheet.create({
    // Header Component Styles
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
    },

    // Home Page Styles
    
    body: {
        flex: 1,
        paddingTop: 10,
        flexDirection: 'row',
        backgroundColor: '#212121',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
})