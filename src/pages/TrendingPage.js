import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native'
import {connect} from 'react-redux';
import actions from '../action'

class TrendingPage extends React.Component{
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text>Trending Page</Text>
                <Button title={'change title'} onPress={() => this.props.onThemeChange('orange')} />
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

const mapStateToProps = dispatch =>({
    onThemeChange:theme => dispatch(actions.onThemeChange(theme)),
});

export default connect (null,mapStateToProps)(TrendingPage);

