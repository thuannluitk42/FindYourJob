import React from 'react';
import { Image, SafeAreaView, TouchableOpacity, View } from 'react-native';
import { style } from '../Style';
import { useNavigation } from '@react-navigation/native';
import { PropStackDetail } from '../../navigation/Type';


export default function Toolbar() {
    const navigation = useNavigation<PropStackDetail>();

    const iconBack = require('../../../assets/icons/arrow.png');
    const iconShare = require('../../../assets/icons/share.png');

    const onBack = () => {
        navigation.pop();
    };

    return (<SafeAreaView style = {[style.ml16, style.mr16]}>
                    <View style = {[style.toolbarContainer, style.mt16 ]}>
                        <TouchableOpacity style = {style.btn} onPress={onBack}>
                            <Image style = {style.icon} source={iconBack} />
                        </TouchableOpacity>
                        <TouchableOpacity style = {style.btn}>
                            <Image style = {style.icon} source={iconShare} />
                        </TouchableOpacity>


                    </View>
            </SafeAreaView>);
}
