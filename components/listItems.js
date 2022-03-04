import React from "react";
import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native';

export default ListItem = (props) => {
    return (
        <Pressable>
            <View style={styles.itemContainer}>
                <Text style={styles.itemName}>{props.name}</Text>
                <Text style={styles.itemDistance}>{props.distance.kilometers}km away</Text>
                <Text style={styles.itemNumber}>{props.number ? props.number : props.address}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
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