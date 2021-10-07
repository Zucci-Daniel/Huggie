import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'

export default function BubbleImage() {
    return (
        <View style={styles.border1}>
          <View style={styles.border2}>
         <Image source={require('../../ASSETS/girl.jpg')}
         style={styles.image}
         />
         </View>
        </View>
    )
}

const styles = StyleSheet.create({
    border1:{
        height:90,
        width:90, 
        borderRadius:100,
        borderColor:'#4CBB11',
        borderWidth:3,
        padding:1,
        justifyContent:'center',
        alignItems:'center',
    },
    border2:{
        backgroundColor:'white',
        height:80,
        width:80,
        borderRadius:100,
        borderColor:'#4CBB17',
        borderWidth:3,
        overflow:'hidden'
    },
    image:{
        width:'100%',
        height:'100%',
    }
})