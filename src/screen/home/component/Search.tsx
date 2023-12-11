import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";
import { style } from "../Style";

export default function Search(){
    const iconSearch = require('../../../assets/icons/search.png');
    const filterContent = [
        {
            title: "Full-time",
            isCheck: true,
        },
        {
            title: "Full-time",
            isCheck: true,
        },
        {
            title: "Full-time",
            isCheck: true,
        },
    ]
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
                        <TouchableOpacity style={style.btnFilter}>
                            <Text>Full-time</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[style.btnFilter,style.visible]}>
                            <Text style={style.textVisible}>Part-time-time</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[style.btnFilter,style.visible]}>
                            <Text style={style.textVisible}>Contractor</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        
    )
}