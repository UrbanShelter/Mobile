import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';

import HomeScreen from '../screens/Account/HomeScreen';
import YourMusic from '../screens/Account/YourMusic';


// const HomeStack = createStackNavigator({
//   Home: HomeScreen,
//   YourMusic: YourMusic
// });


const MainTabNavigator = createDrawerNavigator({
  Home: HomeScreen,
  YourMusic:YourMusic
}, {
  initialRouteName: 'Home'
})

export default MainTabNavigator;
