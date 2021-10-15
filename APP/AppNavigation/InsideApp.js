import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, View, Dimensions } from 'react-native';
import AppStatusBar from '../COMPONENTS/AppStatusBar';
import HomeNav from '../AppNavigation/HomeNav';
import RequestsNav from '../AppNavigation/RequestsNav';
import ProfileNav from '../AppNavigation/ProfileNav';
import colors from '../config/colors';
//icon
import Icons from 'react-native-vector-icons/Ionicons';
import Icons2 from 'react-native-vector-icons/FontAwesome5';
//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Huggie
import Love from '../ASSETS/love.svg';
import ChatNav from './ChatNav';
import ChatScreen from '../SCREENS/ChatScreen';
import AppHeader from '../COMPONENTS/AppHeader';

import { scale,ScaledSheet } from 'react-native-size-matters';


const BottomTab = createBottomTabNavigator();
const StackNav = createNativeStackNavigator();

const iconConfig = {
  // color:colors.brandColor,
}

const unfocused = 'rgba(234, 82, 160, 1.63)';


const InsideApp = () => {


  const getTabBarVisibility = (route) => {
    const routeName = route.state
      ? route.state.routes[route.state.index].name
      : '';
  
    if (routeName === 'chat') {
      return false;
    }
    return true;
  }

  return (
    <>
      <AppStatusBar backgroundColor={colors.brandColor} />
      <NavigationContainer>
        <BottomTab.Navigator
          screenOptions={({ route }) =>
          ({
            title: '',
            header: () => <AppHeader />,
            tabBarStyle: [{
              ...styles.BottomBarStyles,
            }, { display: route.name==='chat'?'none':'flex'}],
            tabBarLabel: ''
          })}
        >
          <BottomTab.Screen
            name="Home"
            component={HomeNav}
            options={{

              tabBarColor: '#009387',
              tabBarIcon: ({ color, size, focused, style }) => (
                <View style={styles.iconView}>
                  <Icons name="ios-heart-sharp" color={focused ? colors.brandColor : unfocused}
                    size={focused ? scale(30) : size}
                    style={focused ? styles.iconFocused : styles.iconUnFocused}
                  />
                </View>
              ),
            }}
          />
          <BottomTab.Screen
            name="Requests"
            component={RequestsNav}
            options={({ route }) => ({
              tabBarIcon: ({ color, size, focused, style }) => (
                <View style={styles.iconView}>
                  <Icons name="ios-chatbubbles" color={focused ? colors.brandColor : unfocused}
                    size={focused ? scale(30) : size}
                    style={focused ? styles.iconFocused : styles.iconUnFocused}
                  
                  />
                </View>
              ),
              // tabBarVisible: ()=>getTabBarVisibility(route)
            })}
          />
          <BottomTab.Screen
            name="Me"
            component={ProfileNav}
            options={{
              tabBarIcon: ({ color, size, focused, style }) => (
                <View style={styles.iconView}>
                  <Icons2 name="user"
                    color={focused ? colors.brandColor : unfocused}
                    size={focused ? scale(30) : size}
                    style={focused ? styles.iconFocused : styles.iconUnFocused}
                  />
                </View>
              ),
            }}
          />
        </BottomTab.Navigator>
      </NavigationContainer>
    </>
  )
}

const HEIGHT = Dimensions.get('window').height * 0.09;

const styles = ScaledSheet.create({
  BottomBarStyles: {
    borderTopWidth: 0,
    backgroundColor: 'transparent',
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: '1@s',
    borderRadius: '15@s',
    height: HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 0,
  },
  iconView: {
    justifyContent: 'center',
    alignItems: 'center',
    top: '10@s',
    width: '50@s',
  },
  iconFocused: {
    backgroundColor: 'white',
    borderRadius: '150@s',
    paddingHorizontal: '10@s',
    paddingVertical: '7@s',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconUnFocused: {
    backgroundColor: 'rgba(249, 249, 249, 0.59)',
    borderRadius: '150@s',
    paddingHorizontal: '10@s',
    paddingVertical: '7@s',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default InsideApp;