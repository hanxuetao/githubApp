import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native'

export default class TrendingPage extends React.Component{
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text>Trending Page</Text>
                <Button title={'change title'} onPress={() => navigation.setParams({
                    theme:{
                        tintColor:'blue',
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
