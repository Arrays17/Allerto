import React from 'react';
import { View, ScrollView } from 'react-native';
const s = require('../../styles/styles');

export default function AllerTips({navigation}){
    return (
        <View style={{flex: 1}}>
            <ScrollView contentContainerStyle={{flexGrow: 1}} onStartShouldSetResponder={() => true}>
                <View style={s.menu} onStartShouldSetResponder={() => false}>
                    <ServiceButton onPress={()=>navigation.navigate("Earthquake")}
                        title="Earthquake"
                        icon='earth' />
                    <ServiceButton onPress={()=>navigation.navigate("Landslide")}
                        title="Landslide"
                        icon='slope-downhill' />
                    <ServiceButton onPress={()=>navigation.navigate("Fire")}
                        title="Fire"
                        icon='fire' />
                    <ServiceButton onPress={()=>navigation.navigate("Flood")}
                        title="Flood"
                        icon='waves' />
                    <ServiceButton onPress={()=>navigation.navigate("Typhoon")}
                        title="Typhoon"
                        icon='weather-lightning-rainy' />
                    <ServiceButton onPress={()=>navigation.navigate("VolcanicEruption")}
                        title="Volcanic Eruption"
                        icon='lava-lamp' />
                    <ServiceButton onPress={()=>navigation.navigate("RoadSafety")}
                        title="Road Safety"
                        icon='road-variant' />
                    <ServiceButton onPress={()=>navigation.navigate("FirstAid")}
                        title="First Aid"
                        icon='medical-bag' />
                    <ServiceButton onPress={()=>navigation.navigate("PetPreparedness")}
                        title="Pet Disaster Preparedness"
                        icon='paw' />
                    <ServiceButton onPress={()=>navigation.navigate("SurvivalKit")}
                        title="Survival Kit"
                        icon='bag-personal' />
                </View>
            </ScrollView>
        </View>
    )
}