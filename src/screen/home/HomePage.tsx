import React from 'react';
import { View } from 'react-native';
import ToolBar from './component/ToolBar';
import Search from './component/Search';
import PopularJob from './component/PopularJob';

export default function HomePage() {
    return (<View>
                  <ToolBar/>
                  <Search/>
                  <PopularJob/>
            </View>)
}