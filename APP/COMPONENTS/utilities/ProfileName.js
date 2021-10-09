
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../../config/colors'

export default function ProfileName({extraStyles,username}) {
    return (
        <Text style={[styles.profileName,extraStyles]}>{username?username:'username name'}</Text>
    )
}

const styles = StyleSheet.create({
    profileName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.profileName
    },
})
