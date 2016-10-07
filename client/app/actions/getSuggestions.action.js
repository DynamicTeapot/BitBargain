
/*
 * Action Types
 */
export const GET_RECENT = 'GET_RECENT';
export const GET_SUGGESTIONS = 'GET_SUGGESTIONS';
export const CLEAR_ALL = 'CLEAR_ALL';


/*
 * Action Creators
 */
export function populateSuggestions(data) {
  return {
    type: GET_SUGGESTIONS,
    data
  };
}

export function populateRecent(data) {
  return {
    type: GET_RECENT,
    data
  };
}

export function clearAll() {
  return {
    type: CLEAR_ALL
  };
}


export function fetchSuggestions() {
  return (dispatch) => {
    fetch('/api/suggestions', { credentials: 'include' })
      .then(res => res.json())
      .then(res => dispatch(populateSuggestions(res)))
      .catch(() => dispatch(clearAll()));

    fetch('/api/recent', { credentials: 'include' })
      .then(res => res.json())
      .then(res => dispatch(populateRecent(res)))
      .catch(() => dispatch(clearAll()));
  };
}
