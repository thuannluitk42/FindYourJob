/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View } from 'react-native';
import Content from './components/Content';
import ApplyForJob from './components/ApplyForJob';
import { useRoute } from '@react-navigation/native';
import { PropRouteDetail } from '../navigation/Type';
import Toolbar from './components/Toolbar';

export default function DetailPage() {
    const params = useRoute<PropRouteDetail>().params;
    console.log('DetailPage params: ' + params);
    return (<View style = {{flex:1}}>
                <Toolbar url = {params.employer_logo } country = {params.job_country} jobtitle = {params.job_title} location = {params.job_publisher} level=''/>
                <Content content= {params.job_highlights} />
                <ApplyForJob/>
            </View>);
}
