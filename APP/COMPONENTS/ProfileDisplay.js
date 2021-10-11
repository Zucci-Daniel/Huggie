import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import colors from '../config/colors'
import UserShowCaseInitials from './utilities/UserShowCaseInitials'

export default function ProfileDisplay() {
    return (
        <View style={styles.ProfileDisplay}>
            <View  style={styles.Display}>
    <Image source={require('../ASSETS/black.jpg')} style={styles.image} />
         <UserShowCaseInitials extraStyles={styles.extraStyles} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ProfileDisplay:{
        height:'100%',
        position:'relative',
        padding:0,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.white
    },
    Display:{
        width:'95%',
        height:'98%',
        borderRadius:20,
        overflow:'hidden'
    },
    image:{
        height:'100%',
        width:'100%'
    },
    extraStyles:{
        position:'absolute',
        bottom:'10%'
    }
})
