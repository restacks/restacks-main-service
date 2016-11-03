"use strict";
const redux_1 = require('redux');
const redux_thunk_1 = require('redux-thunk');
const react_router_1 = require('react-router');
const react_router_redux_1 = require('react-router-redux');
const createLogger = require('redux-logger');
const root_reducers_1 = require('./root.reducers');
function configureStore(preloadedState) {
    const store = redux_1.createStore(root_reducers_1.rootReducer, preloadedState, redux_1.compose(redux_1.applyMiddleware(redux_thunk_1.default, createLogger()), redux_1.applyMiddleware(react_router_redux_1.routerMiddleware(react_router_1.browserHistory)), typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f));
    if (module.hot) {
        module.hot.accept('../reducers.ts', () => {
            const nextRootReducer = require('../reducers.ts').default;
            store.replaceReducer(nextRootReducer);
        });
    }
    return store;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = configureStore;
