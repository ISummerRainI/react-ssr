import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import List from 'views/List';
import Detail from 'views/Detail';

export default () => [
  <Route path="/" key="index" component={() => <Redirect to="/list" />} exact />,
  <Route path="/list" key="list" component={List} exact />,
  <Route path="/detail/:id" key="detail" component={Detail} exact />,
]