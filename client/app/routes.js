import React from 'react';
import {render} from 'react-dom';
import App from './containers/App.jsx';
import Index from './components/Index.jsx';
import { Login, loginReducer } from './components/Login.jsx';
import { Product, productReducer } from './components/Product.jsx';
import NotFound from './components/NotFound.jsx';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerActions, routerMiddleware } from 'react-router-redux';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { UserAuthWrapper} from 'redux-auth-wrapper';
import { searchReducer } from './reducers/SearchReducer.js';


const reducers = combineReducers(
  {
    login: loginReducer,
    product: productReducer,
    search: searchReducer,
    routing:routerReducer
  }
);
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
