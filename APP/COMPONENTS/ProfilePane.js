import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../config/colors'
import BubbleImage from './utilities/BubbleImage'
import Date from './utilities/Date'
import Details from './utilities/Details'
import MessageCircle from './utilities/MessageCircle'
import ProfileName from './utilities/ProfileName'

export default function ProfilePane({ profilePicture, profileName, title, date, messages }) {
    return (
        <View style={styles.profilePane}>
            <View style={styles.firstPane}>
                <View style={styles.profilePicture}>
                    <BubbleImage />
                </View>
                <View style={styles.initials}>
                    <ProfileName />
                    <Details />
                </View>
            </View>
            <View style={styles.secondPane}>
                <Date />
                <MessageCircle />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    profilePane: {
        height: 85,
        backgroundColor: colors.white,
        flexDirection: 'row',
        paddingLeft:10,
        margin:0
    },
    firstPane: {
        width: '85%',
        flexDirection: 'row'
    },
    profilePicture: {
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    initials: {
        backgroundColor: colors.white,
        width: '80%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingHorizontal: 5

    },
    secondPane: {
        width: '15%',
        alignItems: 'center',
        justifyContent: 'center',

    },



})
