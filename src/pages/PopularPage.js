import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native'

export default class PopularPage extends React.Component{
    render() {
        return (
            <View style={styles.container}>
                <Text>Popular Page</Text>
            </View>
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
