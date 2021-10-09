import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import ProfileDisplay from '../COMPONENTS/ProfileDisplay';


function Hotlists() {
  return (
//   <ProfileDisplay />
<ProfileDisplay />
  );
}

function Everyone() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>EVERONE SCREEN!</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function HomeNav() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Hotlists" component={Hotlists} />
        <Tab.Screen name="Everyone" component={Everyone} />
      </Tab.Navigator>
 
  );
}