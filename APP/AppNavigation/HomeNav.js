import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import ProfileDisplay from '../COMPONENTS/ProfileDisplay';
import colors from '../config/colors';
import HotlistsScreen from '../SCREENS/HotlistsScreen';
import EveryoneScreen from '../SCREENS/EveryoneScreen';


//config
import tabConfig from '../config/tabConfig';



const Tab = createMaterialTopTabNavigator();

export default function HomeNav() {
  return (
    <Tab.Navigator
    screenOptions={tabConfig}>
        <Tab.Screen name="Hotlists" component={HotlistsScreen} />
        <Tab.Screen name="Everyone" component={EveryoneScreen} />
      </Tab.Navigator>
 
  );
}