import {
  clearSuggestions,
  fetchSuggestions
} from '../actions/getSuggestions.action';


export function suggestionsReducer(state = { suggestion: [] }, action) {
  const newState = {};

  if (action.type === 'GET_SUGGESTIONS') {
    return Object.assign(newState, state, { suggestion: action.data });
  } else if (action.type === 'CLEAR_SUGGESTIONS') {
    return Object.assign(newState, state, { suggestion: [] });
  }
  return state;
}


export function mapDispatchToProps(dispatch) {
  return {
    fetchSuggestions: () => dispatch(fetchSuggestions()),
    clearSuggestions: () => {
      dispatch(clearSuggestions());
    }
  };
}
