import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import ProfileDisplay from '../COMPONENTS/ProfileDisplay';
import SentRequestScreen from '../SCREENS/SentRequestScreen';
import RequestScreen from '../SCREENS/RequestScreen';
import colors from '../config/colors';
import tabConfig from '../config/tabConfig';


// const Tab = createBottomTabNavigator();
const RequestTab = createMaterialTopTabNavigator();

export default function RequestNav() {
  return (
      <RequestTab.Navigator  
      screenOptions={tabConfig}>
        <RequestTab.Screen name="Sent Requests" component={SentRequestScreen} />
        <RequestTab.Screen name="My Requests" component={RequestScreen} />
      </RequestTab.Navigator>
    
  );
}