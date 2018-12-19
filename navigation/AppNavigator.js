import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import WelcomeScreen from '../screens/Welcome/WelcomeScreen';
import SignupScreen from '../screens/Signup/SignupScreen';
import SignupScreenTwo from '../screens/Signup/SignupScreenTwo';
import LoginScreen from '../screens/Signup/LoginScreen';
import LoginMain from '../screens/Signup/LoginMainScreen';
import ForgotPass from '../screens/Signup/ForgotPassScreen';


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
