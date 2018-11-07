import React from 'react';
import Expo from 'expo';
import { createSwitchNavigator, createStackNavigator, DrawerNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import WelcomeScreen from '../screens/Welcome/WelcomeScreen';
import SignupScreen from '../screens/Signup/SignupScreen';
import SignupScreenTwo from '../screens/Signup/SignupScreenTwo';
import SignupScreenThree from '../screens/Signup/SignupScreenThree';
import LoginScreen from '../screens/Signup/LoginScreen';
import LoginScreenTwo from '../screens/Signup/LoginScreenTwo';
import LoginScreenThree from '../screens/Signup/LoginScreenThree';

import HomeScreen from '../screens/Account/HomeScreen';
import YourMusic from '../screens/Account/YourMusic';
import ListingPage from '../screens/Account/ListingPage';
import ExploreScreen from '../screens/Account/ExploreScreen';
import TourScreen from '../screens/Account/TourScreen';

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
	SignupTwo: SignupScreenTwo,
	SignupThree: SignupScreenThree,
	Login: LoginScreen,
	LoginTwo: LoginScreenTwo,
	LoginThree: LoginScreenThree,
	
	
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
	Listing: ListingPage,
	Music: YourMusic

});

export default createSwitchNavigator({


	
	Welcome: WelcomeStack,
	SignupThree: SignupScreenThree,	
	Login: LoginScreen,
	LoginTwo: LoginScreenTwo,
	LoginThree: LoginScreenThree,	
	Signup: SignupScreen,
	SignupTwo: SignupScreenTwo,
	Home: AccountStack,
	Listing: ListingPage,
	Tour: TourScreen,
	Explore: ExploreScreen,
	
});




