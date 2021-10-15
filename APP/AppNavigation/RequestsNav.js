import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import ProfileDisplay from '../COMPONENTS/ProfileDisplay';
import SentRequestScreen from '../SCREENS/SentRequestScreen';
import RequestScreen from '../SCREENS/RequestScreen';
import colors from '../config/colors';
import tabConfig from '../config/tabConfig';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatScreen from '../SCREENS/ChatScreen';
import ChatHeader from '../COMPONENTS/ChatHeader';
import { Title } from 'react-native-paper';
import NormalHeader from '../COMPONENTS/NormalHeader';


// const Tab = createBottomTabNavigator();
const RequestTab = createMaterialTopTabNavigator();

export default function RequestNav({ navigation }) {
  const StackNavigator = createNativeStackNavigator();

  return (
    <StackNavigator.Navigator
      screenOptions={tabConfig,
        { headerShown: true }}>
      <StackNavigator.Screen
        options={{ headerShown: true, header: ({ navigation }) => <NormalHeader screenTitle="Sent Requests" /> }}
        name="Sent Requests" component={SentRequestScreen} />
      <StackNavigator.Screen
        name='chat'
        component={ChatScreen}
        options={({ route }) => ({
          header: ({ navigation }) => <ChatHeader screenTitle={route.params.thisUser}
            screenImage={route.params.thisUserImage} onPress={() => navigation.goBack()} />,

        })}
      // 

      />
    </StackNavigator.Navigator>
  );
}