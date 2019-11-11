import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import actions from '../action';
import {connect} from 'react-redux';

class FavoritePage extends React.Component{
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text>Favorite Page</Text>
                <Button title={'change title'} onPress={() => this.props.onThemeChange('black')} />
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

export default connect (null,mapStateToProps)(FavoritePage);
