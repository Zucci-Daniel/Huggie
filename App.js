import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, View } from 'react-native';
import MessageScreen from './APP/SCREENS/MessageScreen';
import LoadingScreen from './APP/SCREENS/LoadingScreen';
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

const container = (
    <>
      <AppStatusBar backgroundColor={colors.brandColor} />
      <NavigationContainer>
        <BottomTab.Navigator
          activeColor={colors.brandColor}
          barStyle={{ backgroundColor: colors.white, paddingBottom: '3%' }}

        >
          <BottomTab.Screen
            name="Home"
            component={HomeNav}
            options={{
              tabBarLabel: null,
              tabBarColor: '#009387',
              tabBarIcon: ({ color }) => (
                <Icons name="heart" color={color} size={26} />
              ),
            }}
          />
          <BottomTab.Screen
            name="Requests"
            component={RequestNav}
            options={{
              tabBarLabel: null,
              tabBarIcon: ({ color }) => (
                <Icons name="message-reply" color={color} size={26} />
              ),
            }}
          />
          <BottomTab.Screen
            name="Me"
            component={ProfileNav}
            options={{
              tabBarLabel: null,
              tabBarIcon: ({ color }) => (
                <Icons name="account" color={color} size={26} />
              ),
            }}
          />
        </BottomTab.Navigator>
      </NavigationContainer>
    </>
)

const App = () => {
  return (
    <>
		  <SignupScreen />
    </>
  )
}
export default App;