import {
  populateSuggestions,
  clearSuggestions
} from '../actions/getSuggestions.action';


export function suggestionsReducer(state = {}, action) {
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


function mapDispatchToProps(dispatch) {
  return {
    populateSuggestions: (data) => {
      dispatch(populateSuggestions(data));
    },
    clearSuggestions: () => {
      dispatch(clearSuggestions());
    }
  };
}

function mapStateToProps(state) {
  recent: state.itemSuggestions.suggestions
}
