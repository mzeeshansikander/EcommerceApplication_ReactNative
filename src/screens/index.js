import { createStackNavigator,createSwitchNavigator,createBottomTabNavigator} from 'react-navigation';
import React,{Component} from 'react';
import { NavigationService } from '../api/NavigationService';

const AuthNavigator = createStackNavigator(
    {
        Login:{
            getScreen: ()=>require('./LoginScreen').default
        },
    },{
        navigationOptions:{
            header: null,
            
        }
    }

    );
const TabNavigator = createBottomTabNavigator({
        Home:{
            getScreen: ()=>require('./HomeScreen').default
        }
});
const MainNavigator = createStackNavigator({
    Tab: TabNavigator
});
const AppNavigator = createSwitchNavigator({
        Splash:{
            getScreen: ()=>require('./SplashScreen').default
        },
        Auth: AuthNavigator,
        MainNavigator: MainNavigator,
    },{
        initialRouteName: 'Splash'


});
class Navigation extends Component{
    state={}
    render(){
        return <AppNavigator ref={r=> NavigationService.setTopLevelNavigaor(r)} />
    }
}
export default Navigation;