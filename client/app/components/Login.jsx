import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { mapDispatchToProps } from '../reducers/auth.reducer';

// const MapDispatchToProps = dispatch => {

// }

// const MapStateToProps = state => {
//   return {user: state.user};
// }
const localLogin = (e, props) => {
  if (!e || e.which === 13) {
    const email = $('#Email').val();
    const password = $('#Password').val();
    if (password && email) {
      fetch('/auth/login/local', {
        method: 'POST',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password
        })
      })
      .then(res => res.text())
      .then((response) => {
        if (response) {
          props.loginSuccess(email);
        } else {
          Materialize.toast('Login Failed: Incorrect username or password', 5000);
        }
      });
    } else {
      Materialize.toast('Please fill out all forms', 1000);
    }
  }
};


const loginContainer = (props) => {
  return (
    <div className="container">
      <form className="col s8" id="login" onKeyDown={e => localLogin(e, props)}>
        <div className="row">
          <div className="input-field col s10">
            <input id="Email" type="email" className="validate" required />
            <label htmlFor="Email" data-error="Incorrect Format" data-success="O K">Email</label>
            <i className="material-icons prefix">email</i>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s8">
            <input id="Password" type="password" required />
            <label htmlFor="Password">Password</label>
            <i className="material-icons prefix">vpn_key</i>
          </div>
        </div>
      </form>
      <a className="waves-effect waves-light btn right blue lighten-3" onClick={() => { localLogin(null, props); }}>Submit</a>
      <a className="waves-effect waves-light btn green" href="/auth/login/coinbase">Coinbase</a>
    </div>
  );
};

const Login = connect(null, mapDispatchToProps)(loginContainer);

export { Login, loginContainer };
