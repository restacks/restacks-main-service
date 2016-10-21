declare const window: any;
declare const module: any;
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import * as createLogger from 'redux-logger';

import { rootReducer, AppStore } from './root.reducers';

export default function configureStore(preloadedState: AppStore): Redux.Store<AppStore> {

  const store = createStore<AppStore>(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(thunk, createLogger() ),
      applyMiddleware(routerMiddleware(browserHistory)),
      typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
    ) as any
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers.ts', () => {
      const nextRootReducer = require('../reducers.ts').default;
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
