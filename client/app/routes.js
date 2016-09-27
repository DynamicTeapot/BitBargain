import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerActions, routerMiddleware } from 'react-router-redux';
import { UserAuthWrapper } from 'redux-auth-wrapper';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import App from './containers/App.jsx';
import Index from './components/Index.jsx';
import { Login, loginReducer } from './components/Login.jsx';
import { Signup } from './components/Signup.jsx';
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


const store = createStore(reducers);
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
<<<<<<< d4e6cf2bbc12eab362d52fdb525c83b421d0bc96
          <Route path="product/:id" component={Product} />
=======
          <Route path="signup" component={Signup} />
          <Route path="product" component={Product} />
>>>>>>> Created signup view and worked on oauth
          <Route path="*" component={NotFound} />
        </Route>
      </Router>
  </Provider>
  ), document.getElementById('app'));
