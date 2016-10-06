export function disputeReducer(state = {}, action) {
  const dispatch = action.type;
  let newState = {};
  if (dispatch === 'newDispute') {
    newState = action.data
    return newState;
  } else if (dispatch === 'resolveDispute') {
    //need to move this fetch out of the dispatch
    fetch('/disputes', {
      method: 'POST',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: state.id,
        polarity: action.data
      })
    });
    return state;
  } else {
    return state;
  }
}

export function mapStateToProps(state) {
  return {
    dispute: state.dispute
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    newDispute: (data) => {
      dispatch({ type: 'newDispute' , data: data});
    },
    resolveDispute: (bool) => {
      dispatch({ type: 'resolveDispute', data: bool });
    }
  };
}
