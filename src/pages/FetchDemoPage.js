import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, TextInput} from 'react-native';
import actions from '../action';
import {connect} from 'react-redux';

type Props = {};
export default class FetchDemoPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            showText:'',
        }
    }

    LoadData() {
        let url = `https://api.github.com/search/repositories?q=${this.searchKey}`;
        fetch(url)
            .then(response => response.text())
            .then(responseText => {
                this.setState({
                    showText: responseText,
                })
            })
    }

    LoadData2() {
        let url = `https://api.github.com/search/repositories?q=${this.searchKey}`;
        fetch(url)
            .then(response => {
                if(response.ok){
                    return response.text();
                }
                throw new Error('Response Error');
            })
            .then(responseText => {
                this.setState({
                    showText: responseText,
                })
            })
            .catch(e => {
                this.setState({
                    showText: e.toString(),
                })
            })
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
                            this.searchKey=text;
                        }}
                    />
                </View>
                <Button title={'Fetch Key'} onPress={() => this.LoadData2()} />
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
    },
});

