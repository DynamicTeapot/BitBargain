import React from 'react';
import {render} from 'react-dom';
import App from './containers/App.jsx';
import Index from './components/Index.jsx';
import SearchResults from './components/SearchResults.jsx';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';


render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path="search" component={SearchResults} />
    </Route>
  </Router>
  ), document.getElementById('app'));
