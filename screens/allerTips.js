import React from 'react';
import { View } from 'react-native';
const s = require('../styles/styles');

export default function allerTips({navigation}){
    return (
        <View style={s.body}>
            <ServiceButton onPress={()=>navigation.navigate("Earthquake",
                {headerTitle: "Earthquake"})} title="Earthquake" icon='earth' />
            <ServiceButton onPress={()=>navigation.navigate("Landslide",
                {headerTitle: "Landslide"})} title="Landslide" icon='slope-downhill' />
            <ServiceButton onPress={()=>navigation.navigate("Fire",
                {headerTitle: "Fire"})} title="Fire" icon='fire' />
            <ServiceButton onPress={()=>navigation.navigate("Flood",
                {headerTitle: "Flood"})} title="Flood" icon='waves' />
            <ServiceButton onPress={()=>navigation.navigate("Typhoon",
                {headerTitle: "Typhoon"})} title="Typhoon" icon='weather-lightning-rainy' />
            <ServiceButton onPress={()=>navigation.navigate("VolcanicEruption",
                {headerTitle: "Volcanic Eruption"})} title="Volcanic Eruption" icon='lava-lamp' />
            <ServiceButton onPress={()=>navigation.navigate("FirstAid",
                {headerTitle: "First Aid"})} title="First Aid" icon='medical-bag' />
            <ServiceButton onPress={()=>navigation.navigate("SurvivalKit",
                {headerTitle: "Survival Kit"})} title="Survival Kit" icon='bag-personal' />
        </View>
    )
}