import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import Router from './config/router';

ReactDom.render((
  <Provider store={store}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));

if (module.hot) {
  module.hot.accept()
}