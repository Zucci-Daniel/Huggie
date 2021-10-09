import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import ProfileDisplay from '../COMPONENTS/ProfileDisplay';


function MyDisplay() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>My Display</Text>
  </View>
  );
}

function MyGallery() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>My Gallery</Text> 
    </View>
  );
}

// const Tab = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();

export default function ProfileNav
() {
  return (

      <Tab.Navigator>
        <Tab.Screen name="My Display" component={MyDisplay} />
        <Tab.Screen name="My Gallery" component={MyGallery} />
      </Tab.Navigator>
  
  );
}