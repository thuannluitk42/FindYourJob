import React from 'react';
import {ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { style } from '../Style';

export default function Content() {
    return (
        <ScrollView style= {style.mt16}>
            <View style= {style.containerContent}>
                <TouchableOpacity style= {[style.btn, style.p16, style.btnSelected]}>
                    <Text style={style.textSelected}>Description</Text>
                </TouchableOpacity>
                <TouchableOpacity style= {[style.btn, style.p16]}>
                    <Text>Company</Text>
                </TouchableOpacity>
                <TouchableOpacity style= {[style.btn, style.p16]}>
                    <Text>Reviews</Text>
                </TouchableOpacity>
            </View>
            <View style= {[style.containerItemContent, style.mt16, style.ml16, style.mr16]}>
                    <Text style={style.itemTitle}>Qualification</Text>
                    <Text>QualificationQualificationQualificationQualificationQualificationQualificationQualificationQualificationQualificationQualificationQualificationQualificationQualificationQualificationQualificationQualificationQualificationQualificationQualificationQualificationQualificationQualificationQualificationQualificationQualificationQualificationQualificationQualificationQualificationQualificationQualificationQualification</Text>
            </View>
        </ScrollView>

    );
}