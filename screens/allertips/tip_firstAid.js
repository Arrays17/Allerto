import React from 'react';
import { View, ScrollView } from 'react-native';
const s = require('../../styles/styles');

export default function AllerTips({navigation}){
    return (
        <View style={{flex: 1}}>
            <ScrollView contentContainerStyle={{flexGrow: 1}} onStartShouldSetResponder={() => true}>
                <View style={s.menu} onStartShouldSetResponder={() => false}>
                    <ServiceButton onPress={()=>navigation.navigate("FirstAidBasics")}
                        title="First Aid Basics"
                        icon='medical-bag' />
                    <ServiceButton onPress={()=>navigation.navigate("CPR")}
                        title="CPR"
                        icon='lifebuoy' />
                    <ServiceButton onPress={()=>navigation.navigate("AED")}
                        title="AED"
                        icon='lifebuoy' />
                    <ServiceButton onPress={()=>navigation.navigate("BLS")}
                        title="BLS"
                        icon='lifebuoy' />
                    <ServiceButton onPress={()=>navigation.navigate("Burns")}
                        title="Burns"
                        icon='fire' />
                    <ServiceButton onPress={()=>navigation.navigate("ChestPain")}
                        title="Chest Pain"
                        icon='heart-flash' />
                    <ServiceButton onPress={()=>navigation.navigate("Choking")}
                        title="Choking"
                        icon='lifebuoy' />
                    <ServiceButton onPress={()=>navigation.navigate("Fainting")}
                        title="Fainting"
                        icon='brush' />
                    <ServiceButton onPress={()=>navigation.navigate("Fractures")}
                        title="Fractures"
                        icon='bone' />
                    <ServiceButton onPress={()=>navigation.navigate("Nosebleed")}
                        title="Nosebleed"
                        icon='water' />
                    <ServiceButton onPress={()=>navigation.navigate("Poisoning")}
                        title="Poisoning"
                        icon='bottle-tonic-skull' />
                    <ServiceButton onPress={()=>navigation.navigate("Seizures")}
                        title="Seizures"
                        icon='lightning-bolt' />
                    <ServiceButton onPress={()=>navigation.navigate("Wounds")}
                        title="Wounds"
                        icon='bandage' />
                    <ServiceButton onPress={()=>navigation.navigate("Psychological")}
                        title="Psychological First Aid"
                        icon='head-cog' />
                </View>
            </ScrollView>
        </View>
    )
}