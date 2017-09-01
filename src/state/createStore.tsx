import * as Redux from 'redux';

let createStore: {(initialState?: any): Redux.Store<any>} = undefined;

if (process.env.NODE_ENV === 'development') {
  createStore = require('./createStore.development').default;
} else {
  createStore = require('./createStore.production').default;
}

export default createStore;