import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, TextInput, AsyncStorage} from 'react-native';
import actions from '../action';
import {connect} from 'react-redux';

type Props = {};
const Key = 'saveToken';
export default class AsyncStorageDemoPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            showText:'',
        }
    }


    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text>FetchDemoPage</Text>
                <View style={styles.input_container}>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => {
                            this.value = text;
                        }}
                    />
                </View>
                <View style={styles.input_container}>
                </View>
                <Text>{this.state.showText}</Text>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#F5FCFF',
    },
    input:{
        height:30,
        flex:1,
        borderColor:'black',
        borderWidth:1,
        marginRight:10,
    },
    input_container:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-around',
    },
});

