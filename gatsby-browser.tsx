import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import createStore from './src/state/createStore';

exports.replaceRouterComponent = ({ history }: any) => {
    const store = createStore();

    const ConnectedRouterWrapper = ({ children }: any) => (
      <Provider store={store}>
        <Router history={history}>{children}</Router>
      </Provider>
    );

    return ConnectedRouterWrapper;
};
