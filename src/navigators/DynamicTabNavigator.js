import React from 'react';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs'
import {connect} from 'react-redux'

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

class DynamicTabNavigator extends React.Component{
    constructor(props){
        super(props);
        console.disableYellowBox = true;
    }
    _tabNavigator(){
        if(this.Tabs){
            return this.Tabs;
        }
        const {PopularPage, TrendingPage, FavoritePage, ProfilePage} =TABS;
        const tabs = {PopularPage, TrendingPage, FavoritePage, ProfilePage};
        return this.Tabs = createAppContainer(createBottomTabNavigator(
            tabs, {
                tabBarComponent: props =>{
                    return <TabBarComponent {...props} theme={this.props.theme}/>
                },
            }
        ));
    }

    render() {
        const Tab = this._tabNavigator();
        return <Tab/>
    }
}

class TabBarComponent extends React.Component{

    render() {
        return <BottomTabBar
            {...this.props}
            activeTintColor={this.props.theme}
        />
    }
}

const mapStateToProps = state =>({
    theme:state.theme.theme,
});

export default connect (mapStateToProps)(DynamicTabNavigator);
