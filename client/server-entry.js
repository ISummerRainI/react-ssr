import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from 'views/App';
import createStoreMap from './store';

export default (store, routerContext, url) => (
  <Provider store={createStoreMap()}>
    <StaticRouter context={routerContext} location={url}>
      <App />
    </StaticRouter>
  </Provider>
);

export {
  createStoreMap,
};
