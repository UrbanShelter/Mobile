import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

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
    Review: ReviewScreen
  
    },{
        initialRouteName: 'Filter',
        
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
  
    },{
        initialRouteName: 'List',
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
  
    },{
        initialRouteName: 'List',
    }
);
const MessageStack = createStackNavigator({
    
    Message: MessageScreen,
    MessageInner: MessageInnerScreen
  
    },{
        initialRouteName: 'Message',
    }
);


MainStack.navigationOptions = ({ navigation }) => {

    let tabBarVisible = false;

    let routeName = navigation.state.routes[navigation.state.index].routeName

    if ( routeName == 'List' ) {
        tabBarVisible = true
    }

    return {
        tabBarVisible,
    }
}

const MainTabNavigator = createBottomTabNavigator({
  
    EXPLORE: MainStack,
    SAVED:SaveStack,
    STAY:StayStack,
    MESSAGES:MessageStack,
    PROFILE:ProfileStack,
})

export default MainTabNavigator;
