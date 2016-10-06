import {
  clearSuggestions,
  fetchSuggestions
} from '../actions/getSuggestions.action';


export function suggestionsReducer(state, action) {
  const newState = {};

  if (action.type === 'GET_SUGGESTIONS') {
    newState.suggestion = action.data;
  } else if (action.type === 'CLEAR_SUGGESTIONS') {
    newState.suggestion = [];
  } else {
    newState.suggestion = [];
  }

  return newState;
}


export function mapDispatchToProps(dispatch) {
  return {
    fetchSuggestions: () => dispatch(fetchSuggestions()),
    clearSuggestions: () => {
      dispatch(clearSuggestions());
    }
  };
}
