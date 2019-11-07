import React from 'react';
import {Button,View,Text,StyleSheet} from 'react-native';

export default class Page1 extends React.Component{
    render() {
        const {navigation} = this.props
        return <View style={{flex: 1, background: "grey", paddingTop: 30}}>
            <Text style={style.text}>Welcome to Page1</Text>
            <Button title={"Go Back"} onPress={() => navigation.goBack()}/>
            <Button title={"Go Page2"} onPress={() => navigation.navigate('Page2')}/>
        </View>
    }
}

const style = StyleSheet.create({
    text:{
        fontSize:20,
        color:"red",
    }
});
