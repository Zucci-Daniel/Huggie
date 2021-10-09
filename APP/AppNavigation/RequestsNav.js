import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import ProfileDisplay from '../COMPONENTS/ProfileDisplay';


function SentRequests() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Sent Requests</Text>
  </View>
  );
}

function MyRequests() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>My Requests</Text>
    </View>
  );
}

// const Tab = createBottomTabNavigator();
const RequestTab = createMaterialTopTabNavigator();

export default function RequestNav() {
  return (
      <RequestTab.Navigator>
        <RequestTab.Screen name="Sent Requests" component={SentRequests} />
        <RequestTab.Screen name="My Requests" component={MyRequests} />
      </RequestTab.Navigator>
    
  );
}