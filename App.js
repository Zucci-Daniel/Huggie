import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage  from '@react-native-async-storage/async-storage';

//redux imports
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './APP/Redux/Reducers/reducer';

import InsideApp from './APP/AppNavigation/InsideApp';
import SplashScreen from './APP/SCREENS/SplashScreen';
import RequestScreen from './APP/SCREENS/RequestScreen';
import ChatScreen from './APP/SCREENS/ChatScreen';
import ProfileScreen from './APP/SCREENS/ProfileScreen';

//Auth screens
import SignupScreen from './APP/SCREENS/SignupScreen';
import SignupScreen2 from './APP/SCREENS/SignupScreen2';
import SignupScreen3 from './APP/SCREENS/SignupScreen3';

//imports
import ProfileNav from './APP/AppNavigation/ProfileNav';
import colors from './APP/config/colors';
import { StatusBar } from 'react-native';
import AppStatusBar from './APP/COMPONENTS/AppStatusBar';
// import LogoutBtn from './APP/COMPONENTS/utilities/LogoutBtn';
import MainScreen from './APP/SCREENS/MainScreen';

/////////////    redux settings     ///////////////////

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)
//////////////    redux settings     /////////////////

const App = () => {

  return (
    <>
      <Provider store={store}>
        <MainScreen />
      </Provider> 
    </>
  )
};

export default App;