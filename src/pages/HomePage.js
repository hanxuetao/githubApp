import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import DynamicTabNavigator from '../navigators/DynamicTabNavigator';
import NavigationUtil from '../navigators/NavigationUtil';


export default class HomePage extends React.Component{

    render() {
        NavigationUtil.navigation = this.props.navigation;
        return (
                <DynamicTabNavigator/>
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
