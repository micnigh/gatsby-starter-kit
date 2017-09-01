import { createStore, applyMiddleware, compose } from 'redux';
import * as Redux from 'redux';
let promise: Redux.Middleware = require('redux-promise');
import { createLogger } from 'redux-logger';
let thunk = require('redux-thunk').default;

import rootReducer from '../reducers/';

let configureStore = (initialState: any) => {
  let store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk, promise, createLogger()),
      typeof window !== 'undefined' && window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;