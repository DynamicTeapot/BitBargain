
const searchInit = {
  parameters: [],
  results: []
};


/**
 * @name searchReducer
 * @desc Given an initial state and an action, update  
 * @param {object} [state=searchInit] - An object representing an initial state. 
 * @param {object} action - An object representing an action.
 * @return {object}
 */
var searchReducer = function(state=searchInit, action) {
  let dispatch = action.type;
  let newState = {};
  if (dispatch === 'updateResults') {
    newState.parameters = state.parameters;
    newState.results = action.results;
    return newState;
  } else if (dispatch === 'clearResults') {
    newState = { parameters: [], results: []};
    return newState;
  } else {
    return state;
  }
};


module.exports.searchReducer = searchReducer;
