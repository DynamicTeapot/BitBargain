import React from 'react';
import {render} from 'react-dom';
import App from './containers/App.jsx';
import Index from './components/Index.jsx';
import Login from './components/Login.jsx';
import NotFound from './components/NotFound.jsx';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerActions, routerMiddleware } from 'react-router-redux';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { UserAuthWrapper} from 'redux-auth-wrapper';

const initial = {
  user: '',
  token: '',
  itemid: '',
  items: [],
  signedIn: false
};

const rootReducer = function(state=initial, action) {
  var dispatch = action.type;
  if (dispatch === 'signin') {
    state.user = action.username;
    state.token = action.token;
    state.signedIn = true;
    return state;
  } else if (dispatch === 'item') {
    state.itemid = action.itemid;
    return state;
  } else if (dispatch === 'listItems') {
    state.itemid = '';
    state.items = dispatch.items;
    return state;
  } else if (dispatch === 'signout') {
    state.user = '';
    state.token = '';
    state.signedIn = false;
    return state;
  } else {
    return state;
  }
}

const reducers = combineReducers({root: rootReducer, routing:routerReducer});
// const middleware = routerMiddleware(browserHistory);


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
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>
  ), document.getElementById('app'));
