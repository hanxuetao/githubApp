import React from 'react';
import {Button,View,Text,StyleSheet} from 'react-native';

export default class Page2 extends React.Component{
    render() {
        const {navigation} = this.props
        return <View style={{flex:1,background:"grey",paddingTop:30}}>
            <Text style={style.text}>Welcome to Page2</Text>
            <Button title={"Go Back"} onPress={() => navigation.goBack()}/>
            <Button title={"Go Page1"} onPress={() => navigation.navigate('Page1')}/>
        </View>
    }
}

const style = StyleSheet.create({
    text:{
        fontSize:20,
        color:"red",
    }
});
