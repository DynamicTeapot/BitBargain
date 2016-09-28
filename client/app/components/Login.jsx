import React, { PropTypes } from 'react';
import { connect } from 'react-redux';


// const MapDispatchToProps = dispatch => {

// }

// const MapStateToProps = state => {
//   return {user: state.user};
// }
const localLogin = (e) => {
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
        console.log(response);
      });
    } else {
      console.log('No data supplied to login');
    }
  }
};


const Login = () => {
  return (
    <div className="container">
      <form className="col s8" id="login" onKeyDown={localLogin}>
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
          <a className="waves-effect waves-light btn right" onClick={() => { localLogin(); }}>Submit</a>
        </div>
      </form>
      <a className="waves-effect waves-light btn green" href="/auth/login/coinbase">Coinbase</a>
    </div>
  );
};

export { Login, loginReducer };
