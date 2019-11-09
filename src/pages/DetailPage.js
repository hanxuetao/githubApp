import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

export default class DetailPage extends React.Component{
    render() {
        return (
            <View style={styles.container}>
                <Text>Detail Page</Text>
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
