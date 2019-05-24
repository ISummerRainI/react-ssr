import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import createStoreMap from './store';
import Router from './config/router';

const initState = window.__INITIAL__STATE__ || {};
console.log(window.__INITIAL__STATE__);

ReactDom.render((
  <Provider store={createStoreMap(initState)}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));

if (module.hot) {
  module.hot.accept()
}
