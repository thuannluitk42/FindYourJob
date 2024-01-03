import React from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { style } from '../Style';
import { useNavigation } from '@react-navigation/native';
import { PropStackDetail } from '../../navigation/Type';


export default function Toolbar() {
    const navigation = useNavigation<PropStackDetail>();

    const iconBack = require('../../../assets/icons/arrow.png');
    const iconShare = require('../../../assets/icons/share.png');
    const logoCompany = require('../../../assets/images/avatar.png');
    const iconLocation = require('../../../assets/icons/location.png');

    const onBack = () => {
        navigation.pop();
    };

    return (<SafeAreaView style={[style.ml16, style.mr16]}>
                <View style={[style.toolbarContainer, style.mt16, style.mb16]}>
                    <TouchableOpacity style={style.btn} onPress={onBack}>
                        <Image style={style.icon} source={iconBack} />
                    </TouchableOpacity>
                    <TouchableOpacity style={style.btn}>
                        <Image style={style.icon} source={iconShare} />
                    </TouchableOpacity>
                </View>
                <View style={[style.containerHeader, style.mt16]}>
                    <Image style={style.logoCompany} source={logoCompany} />
                    <Text style={[style.titleJob , style.secondaryColor, style.mt16]}>Lead Project Manager</Text>
                    <View style= {[style.mt16, style.containerLocationCompany]}>
                        <Text style={[style.secondaryColor,style.fontBold]}>Google</Text>
                        <Image style = {style.icon12} source={iconLocation} />
                        <Text style={style.secondaryColor}>Tokyo, Papan</Text>
                    </View>
                </View>
            </SafeAreaView>);
}
