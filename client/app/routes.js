import React from 'react';
import {render} from 'react-dom';
import App from './containers/App.jsx';
import Index from './components/Index.jsx';
import Login from './components/Login.jsx';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { authStateReducer } from "redux-auth";


const initial = {
  user: '',
  token: '',
  itemid: '',
  items: [],
  signedIn: false
};

const rootStore = function(state=initial, action) {
  state = initial;
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

let reducers = [];
reducers.push(rootStore);
//Add destructuring below
const store = createStore(combineReducers({root: rootStore, routing:routerReducer, auth: authStateReducer}));

//Creates a history that links to the store
const history = syncHistoryWithStore(browserHistory, store);

//Use on enter

render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Index} />
        <Route path="login" component={Login} />
      </Route>
    </Router>
  </Provider>
  ), document.getElementById('app'));
