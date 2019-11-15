import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, TextInput, AsyncStorage} from 'react-native';
import actions from '../action';
import {connect} from 'react-redux';
import DataStore from '../common/DataStore';

type Props = {};
const Key = 'saveToken';
export default class DataStoreDemoPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            showText:'',
        }
        this.dataStore = new DataStore();
    }

    loadData(){
        let url = `https://api.github.com/search/repositories?q=${this.searchKey}`;
        this.dataStore.fetchData(url)
            .then(data => {
                let showData = `init load time:${new Date(data.timestamp)}\n${JSON.stringify(data.data)}`;
                this.setState({
                    showText:showData,
                })
            })
            .catch(error => {
                console.log(error.toString());
            })
    }

    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text>DataStorePage</Text>
                <View style={styles.input_container}>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => {
                            this.searchKey = text;
                        }}
                    />
                </View>
                <View style={styles.input_container}>
                    <Text onPress={() =>{
                        this.loadData()
                    }}>Fetch</Text>
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

