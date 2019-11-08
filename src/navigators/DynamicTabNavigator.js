import React from 'react';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs'

import PopularPage from '../pages/PopularPage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import TrendingPage from '../pages/TrendingPage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FavoritePage from '../pages/FavoritePage';
import ProfilePage from '../pages/ProfilePage';
import Entypo from 'react-native-vector-icons/Entypo';

const TABS = {
    PopularPage:{
        screen:PopularPage,
        navigationOptions:{
            tabBarLabel:'Popular',
            tabBarIcon:({tintColor, focused}) => (
                <MaterialIcons
                    name={'whatshot'}
                    size={26}
                    style={{color:tintColor}}
                />
            ),
        },
    },
    TrendingPage:{
        screen:TrendingPage,
        navigationOptions:{
            tabBarLabel:'Trending',
            tabBarIcon:({tintColor, focused}) => (
                <Ionicons
                    name={'md-trending-up'}
                    size={26}
                    style={{color:tintColor}}
                />
            ),
        },
    },
    FavoritePage:{
        screen:FavoritePage,
        navigationOptions:{
            tabBarLabel:'Favorite',
            tabBarIcon:({tintColor, focused}) => (
                <MaterialIcons
                    name={'favorite'}
                    size={26}
                    style={{color:tintColor}}
                />
            ),
        },
    },
    ProfilePage:{
        screen:ProfilePage,
        navigationOptions:{
            tabBarLabel:'Profile',
            tabBarIcon:({tintColor, focused}) => (
                <Entypo
                    name={'user'}
                    size={26}
                    style={{color:tintColor}}
                />
            ),
        },
    },
};

export default class DynamicTabNavigator extends React.Component{
    constructor(props){
        super(props);
        console.disableYellowBox = true;
    }
    _tabNavigator(){
        const {PopularPage, TrendingPage, FavoritePage, ProfilePage} =TABS;
        const tabs = {PopularPage, TrendingPage, FavoritePage, ProfilePage};
        PopularPage.navigationOptions.tabBarLabel = 'Popular1';
        return createAppContainer(createBottomTabNavigator(
            tabs, {
                tabBarComponent: TabBarComponent,
            }
        ));
    }

    render() {
        const Tab = this._tabNavigator();
        return <Tab/>
    }
}

class TabBarComponent extends React.Component{
    constructor(props){
        super(props);
        this.theme = {
            tintColor: props.activeTintColor,
            updateTime: new Date().getTime()
        };
    }
    render() {
        const {routes, index} = this.props.navigation.state;
        if(routes[index].params){
            const {theme} = routes[index].params;
            if(theme && theme.updateTime > this.theme.updateTime){
                this.theme = theme;
            }
        }
        return <BottomTabBar
            {...this.props}
            activeTintColor={this.theme.tintColor||this.props.activeTintColor}
        />
    }
}
