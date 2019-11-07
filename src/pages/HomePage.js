import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation'

import PopularPage from '../pages/PopularPage';
import TrendingPage from '../pages/TrendingPage';
import FavoritePage from '../pages/FavoritePage';
import ProfilePage from '../pages/ProfilePage';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class HomePage extends React.Component{
    _tabNavigator(){
        return createAppContainer(
            createBottomTabNavigator({
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
            })
        );
    };
    render() {
        const Tab = this._tabNavigator();
        return (
                <Tab/>
        );
    };
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F5FCFF',
    },
});
