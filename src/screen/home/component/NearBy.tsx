import { Image, Text, View } from 'react-native';
import React from 'react';
import { style } from '../Style';
import { FlatList } from 'react-native-gesture-handler';

export default function NearBy(){
    const arrayItems = [
        {
            image: require('../../../assets/images/avatar.png'),
            title: 'React Developer',
            type: 'Fulltime',
        },
        {
            image: require('../../../assets/images/avatar.png'),
            title: 'Java Developer',
            type: 'Part-time',
        },
        {
            image: require('../../../assets/images/avatar.png'),
            title: 'NodeJS Developer',
            type: 'Contractor',
        },
        {
            image: require('../../../assets/images/avatar.png'),
            title: 'Python Developer',
            type: 'Contractor',
        },
        {
            image: require('../../../assets/images/avatar.png'),
            title: 'Python Developer',
            type: 'Contractor',
        },
    ];
    const _renderNearByJobItem = (item:any) =>  (
        <View style = {[style.containerItem, style.mt16]}>
            <View style={[style.btn, style.bgLightGray]}>
                <Image source={item.image} style = {style.icon}/>
            </View>
            <View style={[style.ml8]}>
                <Text style = {[style.titleItemNearBy]}>{item.title}</Text>
                <Text style = {style.mt8}>{item.type}</Text>
            </View>
        </View>
    );
    return (
            <View style = {[style.mt16, style.ml8, style.mr8,style.heightNearByJob]}>
                <View style={[style.containerNearBy, style.mt16]}>
                    <Text style={style.titleNearBy}>Nearby jobs</Text>
                    <Text>show all</Text>
                </View>
                {/* item */}
                <FlatList
                        data={arrayItems}
                        renderItem={({item}) => _renderNearByJobItem(item)}
                        />
            </View>
    );
}
