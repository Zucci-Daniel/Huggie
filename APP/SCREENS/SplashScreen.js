import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native';

import BrandLogo from '../COMPONENTS/BrandLogo';
import Cartoon from '../COMPONENTS/Cartoon';



export default function SplashScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.svg}>
            <Cartoon />
            </View>
            <View style={styles.logo}>
     <BrandLogo  />
            </View>
           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#DD3A88'
    },
    svg:{
        height:400,
        width:400,
        justifyContent:'center',
    alignItems:'center',
    },

})
