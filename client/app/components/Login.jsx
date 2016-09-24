import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 

const loginInit = {
  user: 'cool',
  loggedIn: false,
  token: ''
};

const loginReducer = (state=loginInit, action) => {
  let dispatch = action.type;
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
  }  else if (dispatch === 'switchuser') {
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
    <div>
    <p>form goes here</p>
    </div>
    )
}

export {Login, loginReducer};
