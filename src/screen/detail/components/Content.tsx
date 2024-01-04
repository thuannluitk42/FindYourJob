import React, { useState } from 'react';
import {ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { style } from '../Style';
import { PropRouteDetail } from '../../navigation/Type';
import { useRoute } from '@react-navigation/native';


export type propsContent = {
    content: {
        Qualifications?: [],
        Responsibilities?:[],
        Benefits?: []
    }
}

enum tabSelected {
    DESC = 'Qualifications',
    COMPANY = 'Responsibilities',
    REVIEW = 'Benefits'
}

export default function Content(props: propsContent) {

    // react hook
    const [btnSelected, setBtnSelected] = useState(tabSelected.DESC);

    const jobHight = props.content;
    const [dataContent, setDataContent] = useState([]);
    // const params = useRoute<PropRouteDetail>().params;
    // console.log('Content params: ' + params);

    const onPress = (value: tabSelected) => {
        setBtnSelected(value);
        switch (value){
            case tabSelected.DESC: {
                setDataContent(jobHight.Qualifications ?? []);
                break;
            }
            case tabSelected.COMPANY: {
                setDataContent(jobHight.Responsibilities ?? []);
                break;
            }
            default: {
                setDataContent(jobHight.Benefits ?? []);
                break;
            }
        }
    };
    return (
        <ScrollView style= {style.mt16}>
            <View style= {style.containerContent}>
                <TouchableOpacity style= {[style.btn, style.p16, btnSelected == 'Qualifications' ? style.btnSelected : null]} onPress={() => onPress('Qualifications')}>
                    <Text style={style.textSelected}>Description</Text>
                </TouchableOpacity>
                <TouchableOpacity style= {[style.btn, style.p16, btnSelected == 'Responsibilities' ? style.btnSelected : null]} onPress={() => onPress('Responsibilities')}>
                    <Text>Company</Text>
                </TouchableOpacity>
                <TouchableOpacity style= {[style.btn, style.p16, btnSelected == 'Benefits' ? style.btnSelected : null]} onPress={() => onPress('Benefits')}>
                    <Text>Reviews</Text>
                </TouchableOpacity>
            </View>
            {/* <View style= {[style.containerItemContent, style.mt16, style.ml16, style.mr16]}>
                    <Text style={[style.itemTitle, style.mb16]}>Qualifications</Text>
                    <Text>{props.content}</Text>
                    { props.content.map((value)=>
                        <Text>{value}</Text>
                    )}
            </View> */}
            <View style={[style.containerItemContent, style.mt16, style.ml16, style.mr16]}>
                <Text style={[style.itemTitle, style.mb16]}>{btnSelected}</Text>
                {dataContent.map((value, index) => (
                    <Text key={index}>{value}</Text>
                ))}
            </View>
            <View />
        </ScrollView>

    );
}
