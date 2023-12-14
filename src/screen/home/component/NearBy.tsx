import { Image, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { style } from '../Style';
import { FlatList } from 'react-native-gesture-handler';
import { Params, fetchPopularJob } from '../../../api/RapidApi';
import { NAME_NAVIGATION } from '../../common/Const';
import { PropStackDetail } from '../../navigation/Type';
import { useNavigation } from '@react-navigation/native';

export default function NearBy(){

    const navigation = useNavigation<PropStackDetail>();

    //use for testing
    const params: Params = {
        q: 'software engineer',
        page: '1',
        country: 'us',
        city: 'Seattle',
    };

    const [dataApi, setDataApi] = useState();

    useEffect(()=> {
        fetchPopularJob(params).then(data => {
            setDataApi(data);
        });
    },[]);

    // const arrayItems = [
    //     {
    //         image: require('../../../assets/images/avatar.png'),
    //         title: 'React Developer',
    //         type: 'Fulltime',
    //     },
    //     {
    //         image: require('../../../assets/images/avatar.png'),
    //         title: 'Java Developer',
    //         type: 'Part-time',
    //     },
    //     {
    //         image: require('../../../assets/images/avatar.png'),
    //         title: 'NodeJS Developer',
    //         type: 'Contractor',
    //     },
    //     {
    //         image: require('../../../assets/images/avatar.png'),
    //         title: 'Python Developer',
    //         type: 'Contractor',
    //     },
    //     {
    //         image: require('../../../assets/images/avatar.png'),
    //         title: 'Python Developer',
    //         type: 'Contractor',
    //     },
    // ];

    const onPressItem = (item:any) => {
        navigation.push(NAME_NAVIGATION.DETAIL, {title:''});
    };

    const _renderNearByJobItem = (item:any) =>  (
        <TouchableOpacity onPress={()=>onPressItem(item)} style = {[style.containerItem, style.mt16]}>
            <View style={[style.btn, style.bgLightGray]}>
                <Image source={item.image} style = {style.icon}/>
            </View>
            <View style={[style.ml8]}>
                <Text style = {[style.titleItemNearBy]}>{item.title}</Text>
                <Text style = {style.mt8}>{item.type}</Text>
            </View>
        </TouchableOpacity>
    );
    return (
            <View style = {[style.mt16, style.ml8, style.mr8,style.heightNearByJob]}>
                <View style={[style.containerNearBy, style.mt16]}>
                    <Text style={style.titleNearBy}>Nearby jobs</Text>
                    <Text>show all</Text>
                </View>
                {/* item */}
                <FlatList
                        data={dataApi}
                        renderItem={({item}) => _renderNearByJobItem(item)}
                        />
            </View>
    );
}
