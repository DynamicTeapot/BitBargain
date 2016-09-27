import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const loginInit = {
  user: 'cool',
  loggedIn: false,
  token: ''
};

const loginReducer = (state = loginInit, action) => {
  const dispatch = action.type;
  if (dispatch === 'signin') {
    state.user = action.user;
    state.token = action.token;
    state.loggedIn = true;
    return state;
  } else if (dispatch === 'signout') {
    state.user = '';
    state.token = '';
    state.loggedIn = false;
    return state;
  } else if (dispatch === 'signup') {
    state.user = action.user;
    state.token = action.token;
    state.loggedIn = true;
    return state;
  } else if (dispatch === 'switchuser') {
    state.user = action.user;
    return state;
  } else {
    return state;
  }
};

// const MapDispatchToProps = dispatch => {

// }

// const MapStateToProps = state => {
//   return {user: state.user};
// }

const Login = (props) => {
  return (
      <form className="col s8" id="search" onSubmit={(e) => { e.preventDefault(); console.log(e);/* ajax call here*/ }}>
            <div className="row">
              <div className="input-field col s10">
                <input id="Email" type="text" />
                <label htmlFor="Email">Email</label>
                <i className="material-icons prefix">email</i>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s8">
                <input id="Password" type="text" />
                <label htmlFor="Password">Password</label>
                <i className="material-icons prefix">vpn_key</i>
              </div>
            </div>
              <a className="waves-effect waves-light btn right">Submit</a>
          </form>
    );
};

export { Login, loginReducer };
