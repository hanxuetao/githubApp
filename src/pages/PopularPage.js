import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native'
import {createMaterialTopTabNavigator}  from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'
import NavigationUtil from '../navigators/NavigationUtil';

export default class PopularPage extends React.Component{
    constructor(props) {
        super(props)
        this.tabNames = ['Java', 'Android', 'iOS', 'React', 'React Native', 'PHP']
    }

    _genTabs(){
        const tabs={};
        this.tabNames.forEach((item, index) => {
            tabs[`tab${index}`] = {
                screen: (props) => <PopularTab {...this.props} tabLabel={item}/>,
                navigationOptions:{
                    title: item,
                },
            }
        });
        return tabs;
    };

    render() {
        const TabNavigator = createAppContainer(createMaterialTopTabNavigator(
           this._genTabs(),
            {
                tabBarOptions:{
                    tabStyle:styles.tabStyle,
                    upperCaseLabel:false,
                    scrollEnabled:true,
                    style:{
                        backgroundColor:'#a67',
                    },
                    indicatorStyle:styles.indicatorStyle,
                    labelStyle:styles.labelStyle,
                }
            }
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
                <Text onPress={() => {NavigationUtil.goPage({}, 'DetailPage')}}> Go to Detail Page </Text>
                <Button title={'Using Fetch'} onPress={() => {NavigationUtil.goPage({}, 'FetchDemoPage')}}/>
                {/*<Button title={'Using AsyncStorage'} onPress={() => {NavigationUtil.goPage({}, 'AsyncStorageDemoPage')}}/>*/}
                <Button title={'Using DataStore'} onPress={() => {NavigationUtil.goPage({}, 'DataStoreDemoPage')}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#F5FCFF',
    },
    tabStyle: {
        minWidth:50,
    },
    indicatorStyle:{
        height:2,
        backgroundColor:'white',
    },
    labelStyle: {
        fontSize: 13,
        marginTop: 6,
        marginBottom: 6,
    }
});

