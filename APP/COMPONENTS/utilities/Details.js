import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../../config/colors'

export default function Details({extraStyles,department,level}) {
    return (
    <>
<Text  style={[styles.details,extraStyles]}>{department?department:'Dept'} 
<Text style={styles.fientLine}> | </Text> {level?level:'Level'}L </Text>
     </>
    )
}

const styles = StyleSheet.create({
    details: {
        fontSize: 10,
        fontWeight: '500',
        color: colors.details
    },
    fientLine: {
        color: colors.brandColor
    },
})
