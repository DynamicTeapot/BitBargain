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
const login = function(e) {
  if (!e || e.which === 13) {
    var email = $('#Email').val();
    var password = $('#Password').val();
    if (password && email) {
      fetch('http://localhost:9009/auth/login/local', {
        method: 'POST',
        body: {
          email: email,
          password: password
        }
      }).then((err, res) => {
        if(err.status === 401){
          console.log('Incorrect Password or Username');
        }
      });
    }
  }
};

const Login = (props) => {
  return (
      <form className="col s8" id='login' onKeyDown={login}>
            <div className="row">
              <div className="input-field col s10">
                <input id="Email" type="email" className="validate" />
                <label htmlFor="Email" data-error="Incorrect Format" data-success="O K">Email</label>
                <i className="material-icons prefix">email</i>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s8">
                <input id="Password" type="password" />
                <label htmlFor="Password">Password</label>
                <i className="material-icons prefix">vpn_key</i>
              </div>
              <a className="waves-effect waves-light btn right" onClick={()=>login()}>Submit</a>
            </div>
          </form>
    );
};

export { Login, loginReducer };
