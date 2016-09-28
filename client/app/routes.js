import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerActions, routerMiddleware } from 'react-router-redux';
import { UserAuthWrapper } from 'redux-auth-wrapper';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

import App from './containers/App.jsx';
import Index from './components/Index.jsx';
import { Login, loginReducer } from './components/Login.jsx';
import { Product } from './components/Product.jsx';
import NotFound from './components/NotFound.jsx';
import { searchReducer } from './reducers/SearchReducer.js';
import { productReducer } from './reducers/product.reducer.js';


const reducers = combineReducers(
  {
    login: loginReducer,
    product: productReducer,
    search: searchReducer,
    routing: routerReducer
  }
);

// const middleware = routerMiddleware(browserHistory);

const logger = createLogger();
const store = createStore(reducers, applyMiddleware(thunk, promise, logger));
// Creates a history that links to the store
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
          <Route path="product/:id" component={Product} />
          <Route path="*" component={NotFound} />
        </Route>
      </Router>
  </Provider>
  ), document.getElementById('app'));
