import DetailScreen from '../screens/Detail';
import HomeScreen from '../screens/Home';
import LoadingScreen from '../screens/Loading';
import OptionsScreen from '../screens/Options';
import SettingsScreen from '../screens/Settings';
import RegisterScreen from '../screens/Register';
import PasswordResetScreen from '../screens/PasswordReset';

//screen imports 

import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';

const HomeStack = createStackNavigator({DetailScreen, HomeScreen, OptionsScreen});

const MainTabs = createDrawerNavigator({HomeStack, SettingsScreen });

const RootSwitch = createSwitchNavigator({LoadingScreen, MainTabs}, 
    {initialRouteName: "MainTabs"});

export default createAppContainer(RootSwitch); 