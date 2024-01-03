import React, { useState } from 'react';
import {ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { style } from '../Style';

export default function Content() {

    // react hook
    const [btnSelected, setBtnSelected] = useState('desc');

    const onPress = (value: string) => {
        setBtnSelected(value);
    };
    return (
        <ScrollView style= {style.mt16}>
            <View style= {style.containerContent}>
                <TouchableOpacity style= {[style.btn, style.p16, btnSelected == 'desc' ? style.btnSelected : null]} onPress={() => onPress('desc')}>
                    <Text style={style.textSelected}>Description</Text>
                </TouchableOpacity>
                <TouchableOpacity style= {[style.btn, style.p16, btnSelected == 'company' ? style.btnSelected : null]} onPress={() => onPress('company')}>
                    <Text>Company</Text>
                </TouchableOpacity>
                <TouchableOpacity style= {[style.btn, style.p16, btnSelected == 'reviews' ? style.btnSelected : null]} onPress={() => onPress('reviews')}>
                    <Text>Reviews</Text>
                </TouchableOpacity>
            </View>
            <View style= {[style.containerItemContent, style.mt16, style.ml16, style.mr16]}>
                    <Text style={[style.itemTitle, style.mb16]}>Qualification</Text>
                    <Text >QualificationQualificationQualificationQualificationQualificationQualificationQualificationQualification</Text>
                    <Text>QualificationQualificationQualificationQualificationQualificationQualificationQualificationQualificationQualificationQualificationQualificationQualificat</Text>
            </View>
            <View />
        </ScrollView>

    );
}
