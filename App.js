import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import InsideApp from './APP/AppNavigation/InsideApp';
import SplashScreen from './APP/SCREENS/SplashScreen';
import RequestScreen from './APP/SCREENS/RequestScreen';
import ChatScreen from './APP/SCREENS/ChatScreen';
import ProfileScreen from './APP/SCREENS/ProfileScreen';

//Auth screens
import SignupScreen from './APP/SCREENS/SignupScreen';
import SignupScreen2 from './APP/SCREENS/SignupScreen2';
import SignupScreen3 from './APP/SCREENS/SignupScreen3';

import HomeNav from './APP/AppNavigation/HomeNav';
import RequestNav from './APP/AppNavigation/RequestsNav';

//icon
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//imports
import ProfileNav from './APP/AppNavigation/ProfileNav';
import colors from './APP/config/colors';
import { StatusBar } from 'react-native';
import AppStatusBar from './APP/COMPONENTS/AppStatusBar';

const BottomTab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <>
		  <InsideApp />
    </>
  )
}
export default App;
