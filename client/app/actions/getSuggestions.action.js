
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
    (
     fetch('/api/suggestions')
      .then(res => res.json())
      .then(res => dispatch(populateSuggestions(res)))
        .catch(() => dispatch(clearSuggestions()))
    );
  };
}
