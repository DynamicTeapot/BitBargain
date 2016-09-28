import React, { PropTypes } from 'react';

const localSignup = (e) => {
  if (!e || e.which === 13) {
    const email = $('#Email').val();
    const password = $('#Password').val();
    if (password && email) {
      fetch(`/auth/signup/local`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
        body: {
          email: email,
          password: password
        }
      })
      .then(response => response.json())
      .then((responseData) => {
        console.log(responseData);
      });
    } else {
      console.log('failed');
    }
  }
};


const Signup = () => {
  return (
    <div className="container">
      <form className="col s8" id="signup" onKeyDown={localSignup}>
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
            <a className="waves-effect waves-light btn" onClick={() => { localSignup(); }}>Signup</a>
          </div>
        </div>
      </form>
    </div>
  );
};

export { Signup };
