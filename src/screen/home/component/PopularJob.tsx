import { Image, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { style } from '../Style';
import { FlatList } from 'react-native-gesture-handler';
import { Params, fetchPopularJob } from '../../../api/RapidApi';

export default function PopularJob(){
    // v1
    // const params: Params = {
    //     query: 'Python developer in Texas, USA',
    //     page: '1',
    //     num_pages: '1'
    // }
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
    console.log('ahihi: ' + dataApi);

    // const arrayItemJob = [
    //     {
    //         image: require('../../../assets/images/avatar.png'),
    //         companyName: 'Grab Technology',
    //         title: 'Senior NodeJS/React',
    //         country: 'US',
    //     },
    //     {
    //         image: require('../../../assets/images/avatar.png'),
    //         companyName: 'MOMO Technology',
    //         title: 'Senior NodeJS/React',
    //         country: 'Finland',
    //     },
    //     {
    //         image: require('../../../assets/images/avatar.png'),
    //         companyName: 'MERKLE Technology',
    //         title: 'Senior NodeJS/React',
    //         country: 'VietNam',
    //     },
    // ];
    const renderItem = (item:any) => (
                <View style={[style.ml30,style.mt16]}>
                    <View style={[style.btn, style.bgLightGray]}>
                        <Image source={item.image} style={style.icon}/>
                    </View>
                    <Text style={[style.titleItemPopular,style.mt8]}>{item.companyName}</Text>
                    <Text style={[style.mainJobTitle,style.mt16]}>{item.title}</Text>
                    <Text style={style.colorGray}>{item.country}</Text>
                </View>
    );
    return (
            <View style = {[style.mt16, style.ml8, style.mr8]}>
                <View style={style.containerPopular}>
                    <Text style={style.titlePopular}>Popular jobs</Text>
                    <Text>show all</Text>
                </View>
                <FlatList
                        horizontal
                        data={dataApi}
                        renderItem={({item}) => renderItem(item)} />
            </View>

    );
}
