
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../../config/colors'

export default function MessageCircle() {
    return (
        <View style={styles.messagesCircle}>
        <Text style={styles.messageNumber}>4</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    messagesCircle: {
        backgroundColor: colors.brandColor,
        height: 25,
        width: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
    },
    messageNumber: {
        color: colors.white,
        fontSize: 10,
        fontWeight: 'bold'
    }
})
