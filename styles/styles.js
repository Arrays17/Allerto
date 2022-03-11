'use strict';
import { StyleSheet, Dimensions } from "react-native";

module.exports = StyleSheet.create({
    // Header Component Styles
    header: {
        paddingTop: 30,
        justifyContent: "center",
        width: '100%',
        backgroundColor: 'orange',
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

    // Service Button Styles

    service: {
        display: "flex",
        minWidth: '45%',
        maxWidth: '45%',
        minHeight: 175,
        maxHeight: 175,
        margin: 5,
        paddingHorizontal: 5,
        alignItems: "center",
        backgroundColor: "gray",
        borderRadius: 20,
        borderWidth: 3,
        shadowColor: 'black',
        shadowOffset: {width: 5, height: -5},
        shadowOpacity: 0.9,
    },
    serviceIconContainer: {
        flex: 0.7,
        alignItems: "center",
        justifyContent: "flex-end",
    },
    serviceTitleContainer: {
        flex: 0.3,
        alignItems: "center",
        justifyContent: 'center',
        fontWeight: "bold",
        color: 'white',
        letterSpacing: 2,
    },
    serviceTitle: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: "bold",
        letterSpacing: 2,
        color: "white",
    },
    serviceIcon: {
        textAlign: 'center',
        fontWeight: "bold",
        letterSpacing: 2,
        color: "white",
    },
    pressed: {
        opacity: 0.6,
        textAlign: 'center',
        fontWeight: "bold",
        letterSpacing: 2,
        color: "orange",
    },

    // 911 Button

    btn_911: {
        display: "flex",
        position: "absolute",
        bottom: Dimensions.get('window').height * .08,
        flex: 1,
        alignContent: "center",
        textAlign: "center",
        justifyContent: 'center',
        height: 92,
        width: 92,
        borderRadius: 46,
        backgroundColor: "gray",
        borderColor: 'orange',
        borderWidth: 5,
    },

    text_911: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        letterSpacing: 3,
        color: 'orange'
    },

    // Emergency List Screen Styles\

    emergencyListScreenBody: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    emergencyListScreenText: {
        fontSize: 20,
        margin: 10
    },
    emergencyListScreenButton: {
        backgroundColor: 'orange',
        padding: 15,
    },
    buttonText: {
        fontWeight: '400',
        fontSize: 16
    },

    // List Items Style

    itemContainer: {
        width: (Dimensions.get('window').width - 15),
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: "orange",
        marginBottom: 10,
        borderRadius: 20
    },
    itemName: {
        fontSize: 20,
        fontWeight: "bold",
    },
    itemDistance: {
        fontSize: 16,
        fontStyle: "italic",
    },
    itemNumber: {
        fontSize: 20,
    },
})