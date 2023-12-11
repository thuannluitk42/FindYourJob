import { Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { style } from '../Style';

export default function Search(){
    const iconSearch = require('../../../assets/icons/search.png');
    const filterContent = [
        {
            title: 'Full-time',
            isCheck: true,
        },
        {
            title: 'Part-time',
            isCheck: false,
        },
        {
            title: 'Contractor',
            isCheck: false,
        },
    ];
    const renderFilter = () => filterContent.map((item, index) =>
                                <TouchableOpacity key={index} style={[style.btnFilter, item.isCheck ? null : style.visible]}>
                                    <Text style={item.isCheck ? null : style.textVisible}>{item.title}</Text>
                                </TouchableOpacity>
                        );
    return (
            <View>
                    {/* Search*/}
                    <View style={style.containerSearch}>
                            <TextInput placeholder="Where are you looking for ?" style = {[style.inputSearch, style.ml8, style.mr8]} />
                            <TouchableOpacity style={style.btn}>
                                <Image source={iconSearch} style={style.icon}/>
                            </TouchableOpacity>
                    </View>
                    {/* Filter*/}
                    <View style={style.containerFilter}>
                        {renderFilter()}
                    </View>
            </View>

    );
}
