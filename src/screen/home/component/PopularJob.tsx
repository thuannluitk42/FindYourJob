import { Image, Text, View } from 'react-native';
import React from 'react';
import { style } from '../Style';

export default function PopularJob(){
    const iconSearch = require('../../../assets/icons/search.png');
    return (
            <View style = {style.mt16}>
                <View style={style.containerPopular}>
                    <Text style={style.titlePopular}>Popular jobs</Text>
                    <Text>show all</Text>
                </View>
                <View style={style.mt16}>
                    <View style={[style.btn, style.bgLightGray]}>
                        <Image source={iconSearch} style={style.icon}/>
                    </View>
                    <Text style={[style.titleItemPopular,style.mt8]}>Alphident Technology</Text>
                    <Text style={[style.mainJobTitle,style.mt16]}>Senior NodeJS/React</Text>
                    <Text style={style.colorGray}>US</Text>
                </View>
            </View>

    );
}
