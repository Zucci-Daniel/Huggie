import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native'
import BubbleImage from '../COMPONENTS/utilities/BubbleImage';
import ProfilePane from '../COMPONENTS/ProfilePane';

import { useNavigation } from '@react-navigation/native';
import Screen from '../COMPONENTS/Screen';



const requestUpdate = [
    {
        id: '1',
        userName: 'Angel Jopet',
        userImg: require('../ASSETS/8.jpg'),
        light: 'red',
        messageText: null,
        date: 'Mon',
        department: 'Industrial Chem',
        level: 200
    },
    {
        id: '2',
        userName: 'Purity Uchegbu',
        userImg: require('../ASSETS/11.jpg'),
        light: '#D7880D',
        messageText: '...',
        date: 'Wed',
        department: 'Finance',
        level: 200
    },
    {
        id: '3',
        userName: 'Princess Ebere',
        userImg: require('../ASSETS/9.jpg'),
        light: 'red',
        messageText: null,
        date: 'Tue',
        department: 'Computer Science',
        level: 200
    },
    {
        id: '4',
        userName: 'Sasha Huncho',
        userImg: require('../ASSETS/14.jpg'),
        light: 'red',
        messageText: null,
        date: 'fri',
        department: 'Computer Sci',
        level: 300
    },
    {
        id: '5',
        userName: 'Pretty Nnaji',
        userImg: require('../ASSETS/15.jpg'),
        light: '#328D07',
        messageText: 'hey jackson',
        date: 'Tue',
        department: 'Computer Sci',
        level: 500
    },
    {
        id: '6',
        userName: 'Angel Jopet',
        userImg: require('../ASSETS/8.jpg'),
        light: 'red',
        messageText: null,
        date: 'Mon',
        department: 'Industrial Chem',
        level: 200
    },
    {
        id: '7',
        userName: 'Purity Uchegbu',
        userImg: require('../ASSETS/11.jpg'),
        light: '#D7880D',
        messageText: '...',
        date: 'Wed',
        department: 'Finance',
        level: 200
    },
    {
        id: '8',
        userName: 'Princess Ebere',
        userImg: require('../ASSETS/9.jpg'),
        light: 'red',
        messageText: null,
        date: 'Tue',
        department: 'Computer Science',
        level: 200
    },
    {
        id: '9',
        userName: 'Sasha Huncho',
        userImg: require('../ASSETS/14.jpg'),
        light: 'red',
        messageText: null,
        date: 'fri',
        department: 'Computer Sci',
        level: 300
    },
    {
        id: '10',
        userName: 'Pretty Nnaji',
        userImg: require('../ASSETS/15.jpg'),
        light: '#328D07',
        messageText: 'hey jackson',
        date: 'Tue',
        department: 'Computer Sci',
        level: 500
    },
    {
        id: '11',
        userName: 'Princess Ebere',
        userImg: require('../ASSETS/9.jpg'),
        light: 'red',
        messageText: null,
        date: 'Tue',
        department: 'Computer Science',
        level: 200
    },
    {
        id: '12',
        userName: 'Sasha Huncho',
        userImg: require('../ASSETS/14.jpg'),
        light: 'red',
        messageText: null,
        date: 'fri',
        department: 'Computer Sci',
        level: 300
    },
    {
        id: '13',
        userName: 'Pretty Nnaji',
        userImg: require('../ASSETS/15.jpg'),
        light: '#328D07',
        messageText: 'hey jackson',
        date: 'Tue',
        department: 'Computer Sci',
        level: 500
    },

];


export default function SentRequestScreen() {

    const navigation = useNavigation();
    return (
        <Screen extraStyles={styles.extraStyles}>
            <FlatList
                data={requestUpdate}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (<ProfilePane
                    profileName={item.userName}
                    profilePicture={item.userImg}
                    lightColor={item.light}
                    messages={item.messageText}
                    department={item.department}
                    level={item.level}
                    date={item.date}
                    onPress={() => { navigation.navigate('chat', { thisUser: item.userName, thisUserImage: item.userImg }) }}
                />)}
            />

        </Screen>



    )
}

const styles = StyleSheet.create({
    extraStyles: {
        paddingTop: '0%'
    }
})
