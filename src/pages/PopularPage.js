import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native'
import {createMaterialTopTabNavigator}  from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'

export default class PopularPage extends React.Component{
    render() {
        const TabNavigator = createAppContainer(createMaterialTopTabNavigator(
            {
                PopularTab1:{
                    screen: PopularTab,
                    navigationOptions:{
                        title:'Tab1'
                    },
                },
                PopularTab2:{
                    screen: PopularTab,
                    navigationOptions:{
                        title:'Tab2'
                    },
                },
            },
        ));
        return (
            <View style={styles.container}>
                <TabNavigator/>
            </View>
        );
    };
};

class PopularTab extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Text>Popular Tab</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#F5FCFF',
    },
});
