import * as React from 'react';
import {Router, Route, IndexRoute, IndexRedirect } from 'react-router';
import { Provider } from 'react-redux';

import Layout from '../client/Layout';
import Home from '../client/containers/home';


const Routes = (
    <Route component={Layout}>
        <Route component={Home} />
    </Route>
);

export function createRoutes(store) {
    if(typeof store === 'undefined') {
        throw new Error('Redux store is not defined');
    }


    return (
        <Provider store={store}>
            
        </Provider>
    )
}