import { Image, Text, View } from "react-native";
import React from "react";
import { style } from "../Style";


export default function ToolBar(){
    const iconMenu = require("../../assets/icons/menu.png")
    const iconAvatar = require("../../assets/images/avatar.png")
    return (
        <View style = {style.containerToolBar}>
                <View style = {style.toolbar}>
                        <Image style = {style.icon} source={iconMenu}/>
                        <Image style = {[style.avatar, style.icon]} source={iconAvatar}/>
                </View>
                <Text style = {style.subTitle}>Hello Adrian</Text>
                <Text style = {style.title}>Find Your Perfect Job</Text>
        </View>
    )
}