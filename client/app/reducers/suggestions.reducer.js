import {
  fetchSuggestions
} from '../actions/getSuggestions.action';


export function suggestionsReducer(state = { suggestions: [], recent: [] }, action) {
  const newState = {};

  if (action.type === 'GET_RECENT') {
    return Object.assign(newState, state, { recent: action.data });
  } else if (action.type === 'GET_SUGGESTIONS') {
    return Object.assign(newState, state, { suggestions: action.data });
  } else if (action.type === 'CLEAR_SUGGESTIONS') {
    return Object.assign(newState, state, { suggestions: [] });
  } else if (action.type === 'CLEAR_RECENT') {
    return Object.assign(newState, state, { recent: [] });
  } else if (action.type === 'CLEAR_ALL') {
    return Object.assign(newState, state, { suggestions: [], recent: [] });
  }

  // If all else fails.
  return state;
}


export function mapDispatchToProps(dispatch) {
  return {
    fetchSuggestions: () => dispatch(fetchSuggestions())
  };
}
