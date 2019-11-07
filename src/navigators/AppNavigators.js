import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import Page3 from '../pages/Page3';
import HomePage from '../pages/HomePage';

export const AppStackNavigator = createStackNavigator(
    {
        HomePage:{
            screen:HomePage,
        },
        Page1:{
            screen:Page1,
        },
        Page2:{
            screen:Page2,
        },
        Page3:{
            screen:Page3,
        },
    },
    {
        defaultNavigationOptions:{

        }
    }
);


