import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import WelcomePage from '../pages/WelcomePage';
import HomePage from '../pages/HomePage';
import DetailPage from '../pages/DetailPage';
import FetchDemoPage from '../pages/FetchDemoPage';


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
        DetailPage:{
            screen:DetailPage,
            navigationOption:{
                header: null,
            },
        },
        FetchDemoPage:{
            screen:FetchDemoPage,
            navigationOption:{
                header: null,
            },
        },
    });

export default createAppContainer(createSwitchNavigator({
    Init:InitNavigator,
    Main:MainNavigator,
},{
    navigationOption:{
        header: null,
    }
}));


