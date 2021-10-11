import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import ProfileScreen from '../SCREENS/ProfileScreen';
import GalleryScreen from '../SCREENS/GalleryScreen';
import colors from '../config/colors';
import tabConfig from '../config/tabConfig';



// const Tab = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();

export default function ProfileNav
() {
  return (

    <Tab.Navigator
    screenOptions={tabConfig}>
        <Tab.Screen name="My Display" component={ProfileScreen} />
        <Tab.Screen name="My Gallery" component={GalleryScreen} />
      </Tab.Navigator>
  
  );
}