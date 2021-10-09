import React from 'react'
import { StyleSheet, TouchableNativeFeedback, View } from 'react-native'
import colors from '../../config/colors'

export default function RedLight() {
    return (
        <TouchableNativeFeedback>
        <View style={styles.redLight}>
        </View>
        </TouchableNativeFeedback>
    )
}

const styles = StyleSheet.create({
    redLight:{
        backgroundColor:colors.redLight,
        height:50,
        width:50,
        borderRadius:100
    }
})
