import React from 'react';
import {Button,View,Text,StyleSheet} from 'react-native';

export default class HomePage extends React.Component{
    static navigationOptions = {
        title:'Home',
        headerBackTitle:'Back', //Android not support
    };

    render() {
        const {navigation} = this.props
        return <View style={{flex: 1, backgroundColor: "grey", paddingTop: 30}}>
            <Text style={style.text}>Welcome to HomePage</Text>
            <Button title={"Go Page1"} onPress={() => navigation.navigate('Page1')}/>
            <Button title={"Go Page2"} onPress={() => navigation.navigate('Page2')}/>
            <Button title={"Go Page3"} onPress={() => navigation.navigate('Page3')}/>
        </View>
    }
}

const style = StyleSheet.create({
    text:{
        fontSize:20,
        color:"red",
    }
});
