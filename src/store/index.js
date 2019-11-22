import {applyMiddleware, createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middlewares = [
    thunk,
];

export default createStore(reducers, composeEnhancers(applyMiddleware(...middlewares)));
