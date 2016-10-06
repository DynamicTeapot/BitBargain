
/*
 * Action Types
 */
export const GET_SUGGESTIONS = 'GET_SUGGESTIONS';
export const CLEAR_SUGGESTIONS = 'CLEAR_SUGGESTIONS';


/*
 * Action Creators
 */
export function populateSuggestions(data) {
  return {
    type: GET_SUGGESTIONS,
    data
  };
}

export function clearSuggestions() {
  return {
    type: CLEAR_SUGGESTIONS
  };
}


export function fetchSuggestions() {
  return (dispatch) => {
    console.log('Fetch was called');
    return fetch('/api/suggestions', { credentials: 'include' })
      .then(res => res.json())
      .then(res => dispatch(populateSuggestions(res)))
      .catch(() => dispatch(clearSuggestions()));
  };
}
