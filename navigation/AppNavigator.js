import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import WelcomeScreen from '../screens/Welcome/WelcomeScreen';
import SignupScreen from '../screens/Signup/SignupScreen';
import SignupScreenTwo from '../screens/Signup/SignupScreenTwo';
import LoginScreen from '../screens/Signup/LoginScreen';
import LoginMain from '../screens/Signup/LoginMainScreen';
import ForgotPass from '../screens/Signup/ForgotPassScreen';

import ListScreen from '../screens/Account/ListScreen';
import TourScreen from '../screens/Account/TourScreen';
import ViewScreen from '../screens/Account/ViewScreen';
import ReviewScreen from '../screens/Account/ReviewScreen';
import SavedScreen from '../screens/Account/SavedScreen';
import ExploreScreen from '../screens/Account/ExploreScreen';
import LandlordScreen from '../screens/Account/LandlordScreen';
import MessageScreen from '../screens/Account/MessageScreen';
import FilterScreen from '../screens/Account/FilterScreen';



const WelcomeStack = createStackNavigator({

	Welcome: WelcomeScreen,
	Signup: SignupScreen,
	SignupTwo: SignupScreenTwo,
	Login: LoginScreen,
	LoginMain: LoginMain,
	ForgotPass: ForgotPass,
},
	{
		initialRouteName: 'Welcome',
	}
);


export default createSwitchNavigator({
	Welcome: WelcomeStack,
	Main: MainTabNavigator,
});




