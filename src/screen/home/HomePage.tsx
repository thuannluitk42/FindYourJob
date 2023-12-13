import React from 'react';
import { View } from 'react-native';
import ToolBar from './component/ToolBar';
import Search from './component/Search';
import PopularJob from './component/PopularJob';
import NearBy from './component/NearBy';

export default function HomePage() {
    return (<View>
                  <ToolBar/>
                  <Search/>
                  <PopularJob/>
                  <NearBy/>
            </View>);
}
