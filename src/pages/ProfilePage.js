import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

export default class ProfilePage extends React.Component{
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text>Profile Page</Text>
                <Button title={'change title'} onPress={() => navigation.setParams({
                    theme:{
                        tintColor:'red',
                        updateTime: new Date().getTime(),
                    },
                })} />
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
