'use strict';
import { StyleSheet, Dimensions } from "react-native";

module.exports = StyleSheet.create({
    // Common Components Styles

    flatList: {
        paddingVertical: 10
    },

    switchContainer: {
        width: Dimensions.get('window').width,
        backgroundColor: 'white',
        position: 'absolute',
        top: 0,
        padding: 15,
        flexDirection: 'row',
        alignItems: "center"
    },

    switchText: {
        fontSize: 16,
    },

    switch: {
        transform: [{
            scaleX: 1.25}, 
            {scaleY: 1.25
        }],
        position: 'absolute',
        right: 10,
    },

    body: {
        flex: 1,
        color: 'white',
        backgroundColor: '#212121',
        alignItems: 'center',
        justifyContent: 'center',
    },

    menu: {
        flexDirection: "row",
        height: '100%',
        paddingVertical: 10,
        flexWrap: 'wrap',
        backgroundColor: '#212121',
        justifyContent: 'center',
    },

    text: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    },

    button: {
        padding: 15,
        marginVertical: 15,
        backgroundColor: 'orange',
        borderColor: 'orange',
        borderWidth: 1,
        borderRadius: 99,
    },

    buttonDisabled: {
        padding: 15,
        marginVertical: 15,
        backgroundColor: 'gray',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 20,
    },

    textInput: {
        padding: 10,
        marginTop: 10,
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 10,
    },

    titleText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 1,
        textAlign: 'center'
    }, 

    statusText: {
        color: 'white',
        fontSize: 16,
        fontStyle: 'italic',
        textAlign: 'center',
        paddingHorizontal: 50,
    },

    // Auth Screen Styles

    authBody: {
        padding: 10,
    },

    authText: {
        color: "black",
        fontSize: 16,
    },

    subText: {
        color: "gray",
        fontSize: 16,
    },

    errorText: {
        color: "red",
        fontSize: 14
    },

    // Service Button Styles

    service: {
        display: "flex",
        minWidth: '45%',
        maxWidth: '45%',
        minHeight: Dimensions.get('window').height * 0.21,
        maxHeight: Dimensions.get('window').height * 0.21,
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
        bottom: Dimensions.get('window').height * .01,
        flex: 1,
        alignContent: "center",
        textAlign: "center",
        justifyContent: 'center',
        height: Dimensions.get('window').height * .13,
        width: Dimensions.get('window').height * .13,
        borderRadius: Dimensions.get('window').height * .13 / 2,
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
        backgroundColor: '#212121',
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    emergencyListScreenText: {
        color: 'white',
        fontSize: 20,
        margin: 10
    },
    emergencyListScreenButton: {
        backgroundColor: 'darkorange',
        padding: 15,
        margin: 20,
    },
    buttonText: {
        fontWeight: "bold",
        fontSize: 16,
        color: 'white',
        textAlign: "center",
    },

    // Modal Style

    modalOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },

    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: '50%',
        marginHorizontal: '10%',
    },

    modalBody: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'space-evenly',
        backgroundColor: "#252525",
    },

    modalTitle: {
        width: '100%',
        paddingHorizontal: '25%',
    },

    modalOption: {
        width: '100%',
        padding: 20,
        borderTopColor: 'orange',
        borderBottomColor: 'orange',
        borderLeftColor: "#252525",
        borderRightColor: "#252525",
        borderWidth: 1
    },

    // List Items Style

    itemContainer: {
        width: Dimensions.get('window').width,
        maxHeight: 85,
        paddingHorizontal: 15,
        paddingVertical: 5,
        color: 'white',
        backgroundColor: "orange",
        marginBottom: 10,
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

    // tips
    tips: {
        paddingHorizontal: 20,
        marginVertical: 20,
    },
    tipTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    tipContent: {
        textAlign: 'justify',
        lineHeight: 25,
    },
    tipSource:{
        fontStyle: "italic",
        textAlign: "right",
    },

})