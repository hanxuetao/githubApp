import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native'

export default class WelcomePage extends React.Component{
    componentDidMount() {
        this.timer = setTimeout(() => {

        }, 200);
    }

    componentWillMount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
            return (
                <View style={style.container}>
                    <Text>Welcome Page</Text>
                </View>
            );
        };
};

const style = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },
})
