import React from 'react';
import Expo from 'expo';
import { createSwitchNavigator, createStackNavigator, DrawerNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import WelcomeScreen from '../screens/Welcome/WelcomeScreen';
import SignupScreen from '../screens/Signup/SignupScreen';
import LoginScreen from '../screens/Signup/LoginScreen';

import HomeScreen from '../screens/Account/HomeScreen';
import YourMusic from '../screens/Account/YourMusic';

/*import NameScreen from '../screens/Signup/NameScreen';
import EmailScreen from '../screens/Signup/EmailScreen';
import PhoneScreen from '../screens/Signup/PhoneScreen';
import PasswordScreen from '../screens/Signup/PasswordScreen';

import LoginEmailScreen from '../screens/Login/EmailScreen';
import LoginPasswordScreen from '../screens/Login/PasswordScreen';
*/



const WelcomeStack = createStackNavigator({
	Welcome: WelcomeScreen,
	Signup: SignupScreen,
	Login: LoginScreen
	/*Name : NameScreen,
	Email : EmailScreen,
	Phone : PhoneScreen,
	Password : PasswordScreen*/
},
	{
		initialRouteName: 'Welcome',
	}
);
const AccountStack = createStackNavigator({
	Home: HomeScreen,
	Music: YourMusic

});

export default createSwitchNavigator({
	Welcome: WelcomeStack,
	Home: AccountStack
});




