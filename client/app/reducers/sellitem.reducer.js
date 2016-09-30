const sellItemInit = {
  title: 'Enter a title',
  // get seller from the logged in user of state
  //
  seller: 'SELLER NAME',
  description: 'Enter a description',
  price: 'Many dollars',
  category: ['Enter a category'],
  created_at: new Date().toString(),
  updated_at: new Date().toString(),
  location: 'San Francisco',
  post: 'What',
  images: [],
};

export function sellItemReducer(state = sellItemInit, action) {
  const dispatch = action.type;
  const newState = state;
  if (dispatch === 'updateSellItem') {
    newState.status = action.status;
    return newState;
  }
  return state;
}

export function mapStateToProps(state) {
  return state.sellItem ? { sellProduct: state.sellItem } :
    { sellProduct: sellItemInit };
}

export function mapDispatchToProps(dispatch) {
  return {
    submitSell: (data) => {
      dispatch({ type: 'submitSell', item: data });
    }
  };
}
