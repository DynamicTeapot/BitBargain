import { push } from 'react-router-redux';
import { fetchSuggestions } from '../actions/getSuggestions.action';

const loginInit = {
  user: 'Anonymous',
  loggedIn: false
};

export function loginReducer(state = loginInit, action) {
  const dispatch = action.type;
  const newState = state;

  if (dispatch === 'signin') {
    newState.user = action.user;
    newState.loggedIn = true;

    return Object.assign({}, newState);
  } else if (dispatch === 'signout') {
    newState.user = '';
    newState.loggedIn = false;

    return Object.assign({}, newState);
  } else if (dispatch === 'signup') {
    newState.user = action.user;
    newState.loggedIn = true;

    return Object.assign({}, newState);
  }
  return state;
}


export function mapDispatchToProps(dispatch) {
  return {
    loginSuccess: (data) => {
      dispatch({ type: 'signin', user: data });
      dispatch(fetchSuggestions());
      dispatch(push('/'));
    },
    signupSuccess: (data) => {
      dispatch({ type: 'signup', user: data });
      dispatch(push('/'));
    }
  };
}
