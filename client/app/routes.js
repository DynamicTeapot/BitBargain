import React from 'react';
import {render} from 'react-dom';
import App from './containers/App.jsx';
import Index from './components/Index.jsx';
import { searchReducer } from './components/SearchBar.jsx';
import { Login, loginReducer } from './components/Login.jsx';
import { Product, productReducer } from './components/Product.jsx';
import NotFound from './components/NotFound.jsx';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerActions, routerMiddleware } from 'react-router-redux';
import { Provider } from 'react-redux';
import { configure, authStateReducer } from 'redux-auth';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { UserAuthWrapper} from 'redux-auth-wrapper';
import { AuthGlobals } from "redux-auth/default-theme";
import { thunk } from 'redux-thunk';


const reducers = combineReducers({login: loginReducer, product: productReducer, search: searchReducer, auth: authStateReducer, routing:routerReducer});
// const middleware = routerMiddleware(browserHistory);



const store = createStore(reducers);
//Creates a history that links to the store
// store.dispatch(configure(
//   {apiUrl: "http://localhost:9009/api/signin"},
//   {serverSideRendering: false, cleanSession: true}
// )).then(() => {
// });



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
          <Route path="product" component={Product} />
          <Route path="*" component={NotFound} />
        </Route>
      </Router>
  </Provider>
  ), document.getElementById('app'));
