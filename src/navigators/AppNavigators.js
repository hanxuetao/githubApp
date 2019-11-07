import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import WelcomePage from '../pages/WelcomePage';
import HomePage from '../pages/HomePage';


const InitNavigator = createStackNavigator(
    {
        WelcomePage:{
            screen:WelcomePage,
            navigationOption:{
                header: null,
            },
        },
    },
);

const MainNavigator = createStackNavigator(
    {
        HomePage:{
            screen:HomePage,
            navigationOption:{
                header: null,
            },
        },
    },
    {
        defaultNavigationOptions:{

        }
    }
);

export default createAppContainer(createSwitchNavigator({
    Init:InitNavigator,
    Main:MainNavigator,
},{
    navigationOption:{
        header: null,
    }
}));


