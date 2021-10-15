import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ChatScreen from '../SCREENS/ChatScreen';


const ChatArea=createNativeStackNavigator();

export default function ChatNav() {
    return (
    <ChatArea.Screen  name="Chats" component={ChatScreen}  />
    )
}

const styles = StyleSheet.create({})
