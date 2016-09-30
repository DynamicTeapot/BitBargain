import React, { PropTypes } from 'react';
import { mapDispatchToProps } from '../reducers/auth.reducer';
import { connect } from 'react-redux';

const localSignup = (e, props) => {
  if (!e || e.which === 13) {
    const email = $('#Email').val();
    const password = $('#Password').val();
    if (password && email) {
      fetch('/auth/signup/local', {
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
      .then(response => response.text())
      .then((responseData) => {
        props.loginSuccess(email);
      });
    } else {
      console.log('failed');
    }
  }
};


const SignupContainer = (props) => {
  return (
    <div className="container">
      <form className="col s8" id="signup" onKeyDown={(e) => { localSignup(e, props); }}>
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
          <div className="col s6 offset-s6">
            <a className="waves-effect waves-light btn" onClick={() => { localSignup(null, props); }}>Signup</a>
          </div>
        </div>
      </form>
    </div>
  );
};

const Signup = connect(null, mapDispatchToProps)(SignupContainer);

export { Signup, SignupContainer };
