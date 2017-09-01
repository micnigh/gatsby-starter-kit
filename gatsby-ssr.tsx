import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

import createStore from './src/state/createStore.production';

/**
 * Note: we can only call this once!
 * https://www.gatsbyjs.org/docs/ssr-apis/#replaceRenderer
 * 
 * Be careful about using server side rendering plugins
 * TODO: switch back to plugins when this problem is solved
 */
export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }: any) => {
  const sheet = new ServerStyleSheet();
  const store = createStore();

  const ConnectedBody = () => (
    <Provider store={store}>
      <StyleSheetManager sheet={sheet.instance}>
        {bodyComponent}
      </StyleSheetManager>
    </Provider>
  );

  replaceBodyHTMLString(renderToString(<ConnectedBody/>));
};
