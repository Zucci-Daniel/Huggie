import React from 'react'
import { StyleSheet, Text, View,ScrollView } from 'react-native'
import AppIcon from '../COMPONENTS/utilities/AppIcon'

export default function GalleryScreen() {
    return (
        <ScrollView>
        <View style={styles.gallery}>
           
        </View>
           <AppIcon extraStyle={styles.extraStyle} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    gallery:{
        height:1000,
        width:'100%',
        backgroundColor:'red',
        position:'relative',
    },
    extraStyle:{
        position:'absolute',
        right:0,
    }
})
