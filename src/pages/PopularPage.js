import React, {Component} from 'react';
import {FlatList, StyleSheet, View, Text, Button, RefreshControl} from 'react-native';
import {createMaterialTopTabNavigator}  from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import PopularItem from '../component/PopularItem'
import NavigationUtil from '../navigators/NavigationUtil';
import {connect} from 'react-redux';
import action from '../action/index';

const URL = 'https://api.github.com/search/repositories?q=';
const QUERY_STR = '&sort=stars';
const THEME_COLOR = 'red';

export default class PopularPage extends React.Component{
    constructor(props) {
        super(props)
        this.tabNames = ['Java', 'Android', 'iOS', 'React', 'React Native', 'PHP']
    }

    _genTabs(){
        const tabs={};
        this.tabNames.forEach((item, index) => {
            tabs[`tab${index}`] = {
                screen: (props) => <PopularTabPage {...this.props} tabLabel={item}/>,
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
    constructor(props){
        super(props);
        const {tabLabel} = this.props;
        this.storeName = tabLabel;
    }
    componentDidMount() {
        this.loadData();
    }
    loadData (){
        const {onLoadPopularData} = this.props;
        const url = this.genFetchUrl(this.storeName);
        onLoadPopularData(this.storeName, url)
    }
    genFetchUrl(key){
        return URL + key + QUERY_STR;
    }
    renderItem(data){
        const item = data.item;
        return <PopularItem
            item={item}
        />
    }

    render(){
        const {popular} = this.props;
        let store = popular[this.storeName];
        // console.log(store)
        if(!store) {
            store = {
                items: [],
                isLoading: false,
            }
        }
        return (
            <View style={styles.container}>
               <FlatList
                   data = {store.items.items}
                   renderItem={data => this.renderItem(data)}
                   keyExtractor={item => ""+item.id}
                   refreshControl={
                        <RefreshControl
                            title = {'Loading'}
                            titleColor = {THEME_COLOR}
                            colors = {[THEME_COLOR]}
                            refreshing = {store.isLoading}
                            onRefresh = {() => this.loadData()}
                            tintColor = {THEME_COLOR}
                        />
                   }
               />
            </View>
        )
    }
}

const mapStateToProps = state => ({
    popular:state.popular,
});

const mapDispatchToProps = dispatch => ({
    onLoadPopularData: (storeName, url) => dispatch(action.onLoadPopularData(storeName, url)),
});

const PopularTabPage = connect(mapStateToProps, mapDispatchToProps)(PopularTab)

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

