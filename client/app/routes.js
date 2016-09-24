import React from 'react';
import {render} from 'react-dom';
import App from './containers/App.jsx';
import Index from './components/Index.jsx';
import SearchResults from './components/SearchResults.jsx';
import {Login, loginReducer} from './components/Login.jsx';
import NotFound from './components/NotFound.jsx';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerActions, routerMiddleware } from 'react-router-redux';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { UserAuthWrapper} from 'redux-auth-wrapper';

const reducers = combineReducers({login: loginReducer, routing:routerReducer});
const middleware = routerMiddleware(browserHistory);



const store = createStore(reducers);
//Creates a history that links to the store
const history = syncHistoryWithStore(browserHistory, store);

const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.user,
  redirectAction: routerActions.replace,
  wrapperDisplayName: UserIsAuthenticated
});


render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Index} />
        <Route path="login" component={Login} />
        <Route path="search" component={SearchResults} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>
  ), document.getElementById('app'));
