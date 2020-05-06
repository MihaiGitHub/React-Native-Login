import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './screens/loginScreen';
import DashboardScreen from './screens/dashboardScreen';
import AuthLoadingScreen from './screens/authLoadingScreen';

// login route
const BeforeSignin = createStackNavigator({
    Login: {
        screen: LoginScreen
    }
},{
    headerMode: "none",
    initialRouteName: "Login"
})

// dashboard route
const AfterSignin = createStackNavigator({
    Dashboard: {
        screen: DashboardScreen
    }
},{
    headerMode: "none",
    initialRouteName: "Dashboard"
})

// user sees login page first, then after login sees AfterSignin
const AppNavigator = createStackNavigator({
    Auth: BeforeSignin,
    App: AfterSignin,
    AuthLoadingScreen: AuthLoadingScreen
}, {
    headerMode: "none",
    initialRouteName: "AuthLoadingScreen"
})

export default createAppContainer(AppNavigator);