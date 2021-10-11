import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, View } from 'react-native';
import AppStatusBar from '../COMPONENTS/AppStatusBar';
import HomeNav from '../AppNavigation/HomeNav';
import RequestsNav from '../AppNavigation/RequestsNav'
import ProfileNav from '../AppNavigation/ProfileNav';

import colors from '../config/colors';
//icon
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons2 from 'react-native-vector-icons/FontAwesome5';
import Icons3 from 'react-native-vector-icons/Ionicons';
//Navigation
import { NavigationContainer } from '@react-navigation/native';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


//Huggie
import Love from '../ASSETS/love.svg';



const BottomTab = createBottomTabNavigator();



const InsideApp = () => {



  return (
    <>
      <AppStatusBar backgroundColor={colors.brandColor} />
      <NavigationContainer>
        <BottomTab.Navigator

          screenOptions={
            {
              title: 'Huggie',
              headerStyle: {
                height: 80, // Specify the height of your custom header
                backgroundColor: colors.brandColor
              },

              headerTintColor: colors.white,
              headerTitleStyle: { fontSize: 20, letterSpacing: 1, fontFamily: 'vibur', fontWeight: 'bold' },
              tabBarStyle: {
                ...styles.iconStyles
              }
            }}

        >
          <BottomTab.Screen
            name="Home"
            component={HomeNav}
            options={{
              tabBarLabel: '',
              tabBarColor: '#009387',
              tabBarIcon: ({ color, size, focused, style }) => (
                <View style={styles.iconView}>
                  <Icons name="heart-flash" color={colors.brandColor} size={40}
                    style={{
                      color: focused ? colors.brandColor : 'gray',
                    }}
                  />
                </View>

              ),
            }}
          />
          <BottomTab.Screen
            name="Requests"
            component={RequestsNav}
            options={{
              tabBarLabel: '',
              tabBarIcon: ({ color, size, focused, style }) => (
                <View style={styles.iconView}>
                  <Icons name="frequently-asked-questions" color={colors.brandColor} size={40}
                    style={{
                      color: focused ? colors.brandColor : 'gray',
                    }}
                  />
                </View>

              ),

            }}
          />
          <BottomTab.Screen
            name="Me"
            component={ProfileNav}
            options={{
              tabBarLabel: '',
              tabBarIcon: ({ color, size, focused, style }) => (
                <View style={styles.iconView}>
                  <Icons2 name="user-circle" color={colors.brandColor} size={40}
                    style={{
                      color: focused ? colors.brandColor : '#696F75',
                    }}
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

const styles = StyleSheet.create({
  iconStyles: {
    backgroundColor: 'white',
    position: 'absolute',
    right: 20,
    left: 20,
    bottom: 10,
    borderRadius: 15,
    height: '7%',
    padding: 5,
    shadowColor: colors.dark,
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 20,
  },
  iconView:{
    justifyContent:'center',
    alignItems:'center',
    top:'10%',
    width:'50%',
    height:'100%'
  }
});

export default InsideApp;