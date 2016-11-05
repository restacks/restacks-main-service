
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Router, Route, browserHistory } from 'react-router'
import { routerReducer } from 'react-router-redux'
import { createRoutex } from 'routex';
import reducers from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const rootReducer = combineReducers({...reducers,routing: routerReducer });



export default function configureStore(initState: Object) {

    if (module.hot) {
        module.hot.accept('../reducers', () =>
            store.replaceReducer(require('../reducers')) // eslint-disable-line global-require
        );
    }
    return createStore(rootReducer, {});
};

