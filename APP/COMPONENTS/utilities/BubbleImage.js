import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import BubbleBorder from './BubbleBorder'

export default function BubbleImage() {
    return (
    <BubbleBorder>
          <Image style={styles.image} source={require('../../ASSETS/girl.jpg')} />
    </BubbleBorder>
    )
}

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:'100%',
    }
})