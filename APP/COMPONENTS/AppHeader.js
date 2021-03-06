import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import colors from '../config/colors';
import Logo from '../ASSETS/Huggie.svg';
import { scale,ScaledSheet } from 'react-native-size-matters';


export default function AppHeader() {
    return (
        <View style={styles.AppHeader}>
            <Logo />
        </View>
    )
}

const styles = ScaledSheet.create({
    AppHeader:{
        backgroundColor:colors.brandColor,
        padding:'6@s',
        paddingBottom:'10@s'
    },
})
