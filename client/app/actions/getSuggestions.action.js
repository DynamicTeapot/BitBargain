
/*
 * Action Types
 */
export const GET_RECENT = 'GET_RECENT';
export const GET_SUGGESTIONS = 'GET_SUGGESTIONS';
export const CLEAR_ALL = 'CLEAR_ALL';
export const CLEAR_SUGGESTIONS = 'CLEAR_SUGGESTIONS';
export const CLEAR_RECENT = 'CLEAR_RECENT';


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

export function clearSuggestions() {
  return {
    type: CLEAR_SUGGESTIONS
  };
}

export function clearRecent() {
  return {
    type: CLEAR_RECENT
  };
}


export function fetchSuggestions() {
  return (dispatch) => {
    fetch('/api/suggestions', { credentials: 'include' })
      .then(res => res.json())
      .then(res => dispatch(populateSuggestions(res)))
      .catch(() => dispatch(clearSuggestions()));

    fetch('/api/recent', { credentials: 'include' })
      .then(res => res.json())
      .then(res => dispatch(populateRecent(res)))
      .catch(() => dispatch(clearRecent()));
  };
}

