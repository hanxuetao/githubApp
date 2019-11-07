import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native'
import NavigationUtil from '../navigators/NavigationUtil';
export default class WelcomePage extends React.Component{
    componentDidMount() {
        this.timer = setTimeout(() => {
            NavigationUtil.resetToHomePage(this.props)
        }, 2000);
    }

    componentWillMount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
            return (
                <View style={styles.container}>
                    <Text style={styles.welcome}>Welcome Page</Text>
                </View>
            );
        };
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },
    welcome:{
        fontSize:20,
        textAlign:'center',
        margin: 10,
    },
})
