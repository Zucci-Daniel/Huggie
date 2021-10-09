import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../../config/colors'

export default function SelectBox() {
    return (
        <View style={styles.SelectBox}>
            <Text style={styles.text}>Sexy</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    SelectBox:{
        height:30,
        width:100,
        backgroundColor:colors.selectionPane,
        paddingHorizontal:5,
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:5,
        marginRight:5
    },
    text:{
        color:colors.white
    }
})
