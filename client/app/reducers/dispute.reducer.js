export function disputeReducer(state = {}, action) {
  const dispatch = action.type;
  let newState = {};
  if (dispatch === 'newDispute') {
    let dispute;
    fetch('/disputes', {
      method: 'GET',
      credentials: 'include',
      headers: {
        Accept: 'application/json'
      }
    })
    .then(dataStream => dataStream.json())
    .then((resp) => {
      newState = resp;
      return newState;
    });
  } else if (dispatch === 'resolveDispute') {
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
  }
  return state;
}

export function mapStateToProps(state) {
  return {
    dispute: state.dispute
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    newDispute: (data) => {
      dispatch({ type: 'newDispute' });
    },
    resolveDispute: (bool) => {
      dispatch({ type: 'resolveDispute', data: bool });
    }
  };
}
