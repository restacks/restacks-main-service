//@flow
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';



const mount = document.createElement('div');
document.body.appendChild(mount);
const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store)
window.onload = function () {
    // Mount app
    console.log('start app')
    ReactDOM.render(
        <Provider store={store}>
            <Router history={history} routes={routes} />
        </Provider>
        , mount); 
}


