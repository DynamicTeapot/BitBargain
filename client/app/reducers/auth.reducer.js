import { push } from 'react-router-redux';

const loginInit = {
  user: 'No Logged In User',
  loggedIn: false
};

export function loginReducer(state = loginInit, action) {
  const dispatch = action.type;
  if (dispatch === 'signin') {
    state.user = action.user;
    state.loggedIn = true;
    return state;
  } else if (dispatch === 'signout') {
    state.user = '';
    state.loggedIn = false;
    return state;
  } else if (dispatch === 'signup') {
    state.user = action.user;
    state.loggedIn = true;
    return state;
  }
  return state;
}


export function mapDispatchToProps(dispatch) {
  return {
    loginSuccess: (data) => {
      dispatch({ type: 'signin', user: data });
      dispatch(push('/'));
    }
  };
}
