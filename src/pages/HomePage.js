import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import DynamicTabNavigator from '../navigators/DynamicTabNavigator';


export default class HomePage extends React.Component{

    render() {
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
