import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../../config/colors'

export default function SentMessageBox() {
    return (
        <View style={styles.sentMessageWrapper}>
        <View style={styles.sentMessage}>
            <Text style={styles.messageText}>Sasha!, thanks for the green light.</Text>
             </View>
        </View>
    )
}

const styles = StyleSheet.create({
    sentMessageWrapper:{
        backgroundColor:'transparent',
        width:'100%',
        flexDirection:'row',
        justifyContent:'flex-end',
        paddingVertical:10,
        paddingRight:2
    },
    sentMessage:{
        backgroundColor:colors.sentMessageBg,
        padding:15,
        borderRadius:10,
        fontSize:16
    },
    messageText:{
        color:colors.messageTextColor
    }
})
