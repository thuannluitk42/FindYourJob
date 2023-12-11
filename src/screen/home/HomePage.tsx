import React from 'react';
import { View } from 'react-native';
import ToolBar from './component/ToolBar';
import Search from './component/Search';

export default function HomePage() {
    return (<View>
                  <ToolBar/>
                  <Search/>
            </View>)
}