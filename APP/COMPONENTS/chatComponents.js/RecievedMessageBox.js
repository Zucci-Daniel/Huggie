import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../../config/colors'

export default function RecievedMessageBox() {
    return (
        <View style={styles.recievedMessageWrapper}>
        <View style={styles.recievedMessage}>
            <Text style={styles.messageText}>No need for thanking me, you’re cute, i had no choice</Text>
             </View>
        </View>
    )
}

const styles = StyleSheet.create({
    recievedMessageWrapper:{
        backgroundColor:'transparent',
        width:'100%',
        flexDirection:'row',
        justifyContent:'flex-start',
        paddingVertical:10,
        paddingRight:2
    },
    recievedMessage:{
        backgroundColor:colors.recievedMessageBg,
        padding:15,
        borderRadius:10,
        fontSize:16
    },
    messageText:{
        color:colors.white
    }
})
