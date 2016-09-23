import React from 'react';
import {render} from 'react-dom';
import App from './containers/App.jsx';
import Index from './components/Index.jsx';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';


render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
    </Route>
  </Router>
  ), document.getElementById('app'));
