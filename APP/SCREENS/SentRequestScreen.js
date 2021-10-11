import React,{useState} from 'react'
import { StyleSheet, Text, View,ScrollView } from 'react-native'
import BubbleImage from '../COMPONENTS/utilities/BubbleImage';
import ProfilePane from '../COMPONENTS/ProfilePane';

export default function SentRequestScreen() {

    const [current,setCurrent]=useState(0)

    console.log('ok')
    return (
        <ScrollView >
<ProfilePane />
        </ScrollView> 

    )
}

const styles = StyleSheet.create({})
