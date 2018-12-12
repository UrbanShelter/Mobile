import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import {Icon} from 'native-base';
import React, { Component } from "react";


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
import EditprofileScreen from '../screens/Account/EditprofileScreen';

const MainStack = createStackNavigator({
    Search: MainScreen,
    List: ListScreen,
    Tour: TourScreen,
    Explore: ExploreScreen,
    View: ViewScreen,
    Saved: SavedScreen,
    Message: MessageScreen,
    Filter: FilterScreen,
    Report: ReportScreen,
    Review: ReviewScreen, 
    Editprofile: EditprofileScreen,
  
    },{
        initialRouteName: 'Search',
        
    }
);
const SaveStack = createStackNavigator({
    Search: MainScreen,
    List: ListScreen,
    Tour: TourScreen,
    Explore: ExploreScreen,
    View: ViewScreen,
    Saved: SavedScreen,
    Message: MessageScreen,
    Editprofile: EditprofileScreen,

    },{
        initialRouteName: 'Saved',
    }
);
const ProfileStack = createStackNavigator({
    Search: MainScreen,
    List: ListScreen,
    Tour: TourScreen,
    Explore: ExploreScreen,
    View: ViewScreen,
    Saved: SavedScreen,
    Message: MessageScreen,
    Editprofile: EditprofileScreen,
  
    },{
        initialRouteName: 'Editprofile',
    }
);
const StayStack = createStackNavigator({
    Search: MainScreen,
    List: ListScreen,
    Tour: TourScreen,
    Explore: ExploreScreen,
    View: ViewScreen,
    Saved: SavedScreen,
    Message: MessageScreen,
    Editprofile: EditprofileScreen,
  
    },{
        initialRouteName: 'List',
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


// MainStack.navigationOptions = ({ navigation }) => {

//     let tabBarVisible = false;

//     let routeName = navigation.state.routes[navigation.state.index].routeName

//     if ( routeName == 'List' ) {
//         tabBarVisible = true
//     }

//     return {
//         tabBarVisible,
//     }
// }


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
            tabBarIcon: () => <Icon name="ios-compass-outline" />,
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
