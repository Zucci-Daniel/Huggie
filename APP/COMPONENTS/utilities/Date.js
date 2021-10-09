
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../../config/colors'

export default function Date() {
    return (
        <Text style={styles.date}>Tue</Text>
    )
}

const styles = StyleSheet.create({
    date: {
        fontSize: 10,
        fontWeight: '500',
        color: colors.date,
        marginBottom: 10

    },
})
