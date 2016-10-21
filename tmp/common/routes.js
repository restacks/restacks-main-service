"use strict";
const React = require('react');
const react_router_1 = require('react-router');
const react_redux_1 = require('react-redux');
const Layout_1 = require('../client/Layout');
const home_1 = require('../client/containers/home');
const Routes = (React.createElement(react_router_1.Route, {component: Layout_1.default}, 
    React.createElement(react_router_1.Route, {component: home_1.default})
));
function createRoutes(store) {
    if (typeof store === 'undefined') {
        throw new Error('Redux store is not defined');
    }
    return (React.createElement(react_redux_1.Provider, {store: store}));
}
exports.createRoutes = createRoutes;
