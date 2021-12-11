import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

export default Item = (props) => {
    return (
        <Pressable>
            <View style={styles.itemContainer}>
                <Text style={styles.itemName}>{props.Name}"\n"</Text>
                <Text style={styles.itemDistance}>{props.Distance} away"\n"</Text>
                <Text style={styles.itemNumber}>{props.Number}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    itemName: {
        fontSize: '1.5rem',
        fontWeight: "bold",
    },
    itemDistance: {
        fontSize: "0.75rem",
        fontStyle: "italic",
    },
    itemNumber: {
        fontSize: "1rem",
    },
})