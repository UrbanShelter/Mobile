import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import {Icon} from 'native-base';
import React from "react";
import MainScreen from '../screens/Account/MainScreen';
import ListScreen from '../screens/Account/ListScreen';
import ViewScreen from '../screens/Account/ViewScreen';
import ExploreScreen from '../screens/Account/ExploreScreen';
import TourScreen from '../screens/Account/TourScreen';
import SavedScreen from '../screens/Account/SavedScreen';
import MessageScreen from '../screens/Account/MessageScreen';
import MessageInnerScreen from '../screens/Account/MessageInnerScreen';
import FilterScreen from '../screens/Account/FilterScreen';
import ReportScreen from '../screens/Account/ReportScreen';
import ReviewScreen from '../screens/Account/ReviewScreen';
import ChattingScreen from '../screens/Account/ChattingScreen';
import LandlordScreen from '../screens/Account/LandlordScreen';
import UserProfileScreen from '../screens/Account/ProfileOneScreen';
import EditprofileScreen from '../screens/Account/UserproScreen';
import StayOneScreen from '../screens/Account/StayOneScreen';
import ApplicationScreen from '../screens/Account/ApplicationScreen';
import RentPaymentScreen from '../screens/Account/RentPaymentScreen';
import ReviewInScreen from '../screens/Account/ReviewInScreen';
import TenantsScreen from '../screens/Account/TenantsScreen';

const MainStack = createStackNavigator({
    Search: MainScreen,
    List: ListScreen,
    Tour: TourScreen,
    Explore: ExploreScreen,
    View: ViewScreen,
    Saved: SavedScreen,
    Message: MessageScreen,
    Filter: {
        screen: FilterScreen,
        navigationOptions: {
          tabBarVisible: false,
        }
    },
    Report: ReportScreen,
    Review: ReviewScreen, 
    ReviewIn: ReviewInScreen,
    Editprofile: EditprofileScreen,
    Landlord : LandlordScreen,
    Stayone : StayOneScreen,
    Application : ApplicationScreen,
    Rent: RentPaymentScreen,
    Tenant: TenantsScreen,
  
    },{
        initialRouteName: 'List',
        
    }
);


const SaveStack = createStackNavigator({
    
    Saved: SavedScreen,
    },{
        initialRouteName: 'Saved',
    }
);


const ProfileStack = createStackNavigator({
    Editprofile: EditprofileScreen,
    Userpro : UserProfileScreen,
    },{
        initialRouteName: 'Userpro',
    }
);


const StayStack = createStackNavigator({
    Stayone: StayOneScreen,
    },{
        initialRouteName: 'Stayone',
    }
);
const MessageStack = createStackNavigator({
    
    Message: MessageScreen,
    MessageInner: MessageInnerScreen,
    Chat:ChattingScreen,
    Editprofile: EditprofileScreen,
    },{
        initialRouteName: 'Message',
    }
);


MainStack.navigationOptions = ({ navigation }) => {

    let tabBarVisible = true;

    let routeName = navigation.state.routes[navigation.state.index].routeName

    if ( routeName == 'View' || routeName == 'Filter' ) {
        tabBarVisible = false
    }

    return {
        tabBarVisible,
    }
}


MessageStack.navigationOptions = ({ navigation }) => {

    let tabBarVisible = true;

    let routeName = navigation.state.routes[navigation.state.index].routeName

    if ( routeName == 'Chat' ) {
        tabBarVisible = false
    }

    return {
        tabBarVisible,
    }
}

const MainTabNavigator = createBottomTabNavigator({
  
    EXPLORE: {
        screen: MainStack,
        navigationOptions: {
            tabBarIcon: () => <Icon name='ios-compass-outline' color={'#4f3bf6'}/>,
            tabBarOptions: {
            activeTintColor: '#4f3bf6',
            showLabel: true,
            },
        },
    },
    SAVED: {
        screen:SaveStack,
        navigationOptions: {
            tabBarIcon: () => <Icon name="ios-heart-outline" />,
            tabBarOptions: {
            activeTintColor: '#4f3bf6',
            showLabel: true,
            },
        }
    },
    STAY: {
        screen:StayStack,
        navigationOptions: {
            tabBarIcon: () => <Icon name="ios-home-outline" />,
            tabBarOptions: {
            activeTintColor: '#4f3bf6',
            showLabel: true,

            },
        }
    },
    MESSAGES:{
        screen:MessageStack,
        navigationOptions: {
            tabBarIcon: () => <Icon name="ios-chatbubbles-outline" />,
            tabBarOptions: {
                activeTintColor: '#4f3bf6',
                showLabel: true,
            },
        }
    },
    PROFILE:{
        screen:ProfileStack,
        navigationOptions: {
            tabBarIcon: () => <Icon name="ios-contact-outline" />,
            tabBarOptions: {
            activeTintColor: '#4f3bf6',
            showLabel: true,
            },
        },
        
    },

})

export default MainTabNavigator;
