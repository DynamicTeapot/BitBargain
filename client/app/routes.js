import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerActions, routerMiddleware, push } from 'react-router-redux';
import { UserAuthWrapper } from 'redux-auth-wrapper';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

import { App } from './containers/App.jsx';

import Index from './components/Index.jsx';
import { Login } from './components/Login.jsx';
import { Product } from './containers/Product.jsx';
import { Signup } from './components/Signup.jsx';
import SellItem from './components/SellItem.jsx';
import NotFound from './components/NotFound.jsx';
import { Dispute } from './components/Dispute.jsx';
import { sellItemReducer } from './reducers/sellitem.reducer';
import { searchReducer } from './reducers/search.reducer';
import { productReducer } from './reducers/product.reducer';
import { loginReducer } from './reducers/auth.reducer';
import { disputeReducer } from './reducers/dispute.reducer';
import { imageReducer } from './reducers/images.reducer.js';

const rootReducer = combineReducers(
  {
    login: loginReducer,
    product: productReducer,
    search: searchReducer,
    routing: routerReducer,
    sellitem: sellItemReducer,
    dispute: disputeReducer,
    image: imageReducer,
  }
);

// const middleware = routerMiddleware(browserHistory);

const middleware = routerMiddleware(browserHistory);
const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunk, promise, logger, middleware));

// Creates a history that links to the store
// store.dispatch(configure(
//   {apiUrl: "http://localhost:9009/api/signin"},
//   {serverSideRendering: false, cleanSession: true}
// )).then(() => {
// });


const history = syncHistoryWithStore(browserHistory, store);

// const UserIsAuthenticated = UserAuthWrapper({
//   authSelector: state => state.user,
//   redirectAction: routerActions.replace,
//   wrapperDisplayName: UserIsAuthenticated
// });


render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Index} />
        <Route path="login" component={Login} />
        <Route path="sellitem" component={SellItem} />
        <Route path="product/:id" component={Product} />
        <Route path="dispute" component={Dispute} />
        <Route path="signup" component={Signup} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>
  ), document.getElementById('app'));
