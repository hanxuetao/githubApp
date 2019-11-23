import React, {Component} from 'react';
import {FlatList, StyleSheet, View, Text, Button, RefreshControl, ActivityIndicator} from 'react-native';
import {createMaterialTopTabNavigator}  from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import PopularItem from '../component/PopularItem';
import Toast from 'react-native-easy-toast';
import NavigationUtil from '../navigators/NavigationUtil';
import {connect} from 'react-redux';
import action from '../action/index';

const URL = 'https://api.github.com/search/repositories?q=';
const QUERY_STR = '&sort=stars';
const THEME_COLOR = 'red';

type Props = {};
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

const pageSize = 10;
class PopularTab extends Component<Props>{
    constructor(props){
        super(props);
        const {tabLabel} = this.props;
        this.storeName = tabLabel;
    }
    componentDidMount() {
        this.loadData();
    }
    loadData (loadMore){
        const {onRefreshPopular, onLoadMorePopular} = this.props;
        let store = this._store();
        const url = this.genFetchUrl(this.storeName);
        if(loadMore){
            onLoadMorePopular(this.storeName, ++store.pageIndex, pageSize, store.items, callback =>{
                this.refs.toast.show('No More');
            })
        } else {
            onRefreshPopular(this.storeName, url, pageSize)
        }
    }
    _store() {
        const {popular} = this.props;
        let store = popular[this.storeName];
        if (!store) {
            store = {
                items: [],
                isLoading: false,
                projectModels: [],
                hideLoadingMore: true,
            }
        }
        return store;
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
    genIndicator(){
        return this._store().hideLoadingMore?null:
            <View style={styles.indicatorContainer}>
                <ActivityIndicator
                    style={styles.indicator}
                />
                <Text>Loading...</Text>
            </View>
    }

    render(){
        let store = this._store();
        return (
            <View style={styles.container}>
               <FlatList
                   data = {store.projectModes}
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
                   ListFooterComponent={() => this.genIndicator()}
                   onEndReached={() => {
                       setTimeout(() => {
                           if (this.canLoadMore) {
                               this.loadData(true);
                               this.canLoadMore = false;
                           }
                       },100)
                   }}
                   onEndReachedThreshold={0.5}
                   onMomentumScrollBegin={() =>{
                       this.canLoadMore = true;
                       console.log('onMomentumScrollBegin')
                   }}
               />
               <Toast
                   ref={'toast'}
                   position={'center'}
               />
            </View>
        )
    }
}

const mapStateToProps = state => ({
    popular:state.popular,
});

const mapDispatchToProps = dispatch => ({
    onRefreshPopular: (storeName, url, pageSize) => dispatch(action.onRefreshPopular(storeName, url, pageSize)),
    onLoadMorePopular: (storeName, pageIndex, pageSize, items, callback) => dispatch(action.onLoadMorePopular(storeName, pageIndex, pageSize, items, callback)),
});

const PopularTabPage = connect(mapStateToProps, mapDispatchToProps)(PopularTab)

const styles = StyleSheet.create({
    container:{
        flex: 1,
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
        margin: 0,
    },
    indicatorContainer:{
        alignItems:'center',
    },
    indicator:{
        color:'blue',
        margin: 10,
    },
});

