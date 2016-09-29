const reducerInit = {
  title: 'Dispute',
  seller: 'Dispute',
  description: 'This is a desc of a product',
  category: 'chicken',
  created_at: new Date().toString(),
  location: 'San Franpyscho',
  post: 'What',
  id: 123
};

export function disputeReducer(state = reducerInit, action) {
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
    .then(resp => {
      newState = resp[Math.floor(Math.random()*resp.length)];
      return newState;
    });
  } else if (dispatch === 'resolveDispute') {
    console.log(state.id);
    fetch('/disputes', {
      method: 'POST',
      credentials: 'include',
      headers: {
        Accept: 'application/json'
      },
      body: JSON.stringify({
        id: state.id,
        polarity: action.data
      })
    })
    //Should then get a new dispute
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
      dispatch({ type: 'resolveDispute', data: bool});
    }
  };
}
