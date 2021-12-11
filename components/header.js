import React, { useState } from "react";
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const s = require('../styles/styles');

export default Header = () => {
    return (
        <View style={s.header}>
            <Text style={s.headerTitle}>Allerto</Text>
            <Icon name='menu' size={28} style={s.menuIcon} />
        </View>
    )
}