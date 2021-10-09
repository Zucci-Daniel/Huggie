import React from 'react'
import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import Icons from 'react-native-vector-icons/MaterialIcons';


export default function AppIcon({name,size,extraStyle,onPress,color}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Icons name={name?name:'camera'} size={size?size:50} style={[extraStyle]} color={color?color:'#ccc'} />
        </TouchableOpacity>   
    )
}

