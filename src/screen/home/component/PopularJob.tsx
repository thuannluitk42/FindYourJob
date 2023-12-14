import { Image, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { style } from '../Style';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { Params, fetchPopularJob } from '../../../api/RapidApi';
import { NAME_NAVIGATION } from '../../common/Const';
import { PropStackDetail } from '../../navigation/Type';
import { useNavigation } from '@react-navigation/native';

export default function PopularJob(){

    const navigation = useNavigation<PropStackDetail>();

    // v1
    // const params: Params = {
    //     query: 'Python developer in Texas, USA',
    //     page: '1',
    //     num_pages: '1',
    // };
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

    console.log(dataApi);

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

    const onPressItem = (item:any) => {
        navigation.push(NAME_NAVIGATION.DETAIL, {title:''})
    };

    const renderItem = (item:any) => (
                <TouchableOpacity onPress={()=>onPressItem(item)} style={[style.ml30,style.mt16]}>
                    <View style={[style.btn, style.bgLightGray]}>
                        <Image source={item.employer_logo} style={style.icon}/>
                    </View>
                    <Text style={[style.titleItemPopular,style.mt8]}>{item.employer_company_type}</Text>
                    <Text style={[style.mainJobTitle,style.mt16]}>{item.job_title}</Text>
                    <Text style={style.colorGray}>{item.job_country}</Text>
                </TouchableOpacity>
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
function PropRouteDtail(): any {
    throw new Error('Function not implemented.');
}

