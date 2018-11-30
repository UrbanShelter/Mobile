import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import MainScreen from '../screens/Account/MainScreen';
import ListScreen from '../screens/Account/ListScreen';
import ViewScreen from '../screens/Account/ViewScreen';
import ExploreScreen from '../screens/Account/ExploreScreen';
import TourScreen from '../screens/Account/TourScreen';


const MainStack = createStackNavigator({
    Search: MainScreen,
    List: ListScreen,
    Tour: TourScreen,
    Explore: ExploreScreen,
    View: ViewScreen
  
    },{
        initialRouteName: 'List',
    }
);
const SaveStack = createStackNavigator({
    Search: MainScreen,
    List: ListScreen,
    Tour: TourScreen,
    Explore: ExploreScreen,
    View: ViewScreen
  
    },{
        initialRouteName: 'List',
    }
);
const ProfileStack = createStackNavigator({
    Search: MainScreen,
    List: ListScreen,
    Tour: TourScreen,
    Explore: ExploreScreen,
    View: ViewScreen
  
    },{
        initialRouteName: 'List',
    }
);
const StayStack = createStackNavigator({
    Search: MainScreen,
    List: ListScreen,
    Tour: TourScreen,
    Explore: ExploreScreen,
    View: ViewScreen
  
    },{
        initialRouteName: 'List',
    }
);
const MessageStack = createStackNavigator({
    Search: MainScreen,
    List: ListScreen,
    Tour: TourScreen,
    Explore: ExploreScreen,
    View: ViewScreen
  
    },{
        initialRouteName: 'List',
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
    EXPLORE :MainStack,
    SAVED:SaveStack,
    STAY:StayStack,
    MESSAGES:MessageStack,
    PROFILE:ProfileStack,
})

export default MainTabNavigator;
