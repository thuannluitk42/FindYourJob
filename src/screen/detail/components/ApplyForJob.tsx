import React from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { style } from '../Style';


export default function ApplyForJob() {
    const iconHeart = require('../../../assets/icons/heart-ol.png');
return (
        <View style = {[style.containerApplyForJob, style.p16]}>
            <TouchableOpacity>
                <Image source={iconHeart}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style = {style.textSelected}>ApplyForJob</Text>
            </TouchableOpacity>
        </View>
        )
}