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
const localLogin = (e) => {
  if (!e || e.which === 13) {
    var email = $('#Email').val();
    var password = $('#Password').val();
    if (password && email) {
      fetch(`http://localhost:9009/auth/login/local?email=${email}&password=${password}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      })
      .then(response => response.json())
      .then(responseData => {
        alert('test');
        console.log(responseData);  
      });
    } else {
      console.log('failed');
    }
  }
};


const Login = (props) => {
  return (
    <div className="container">
      <form className="col s8" id='login' onKeyDown={localLogin}>
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
          <a className="waves-effect waves-light btn right" onClick={() => {localLogin()}}>Submit</a>
        </div>
      </form>
      <a className="waves-effect waves-light btn green" href='http://localhost:9009/auth/login/coinbase'>Coinbase</a>
    </div>
  )
}

export { Login, loginReducer };
