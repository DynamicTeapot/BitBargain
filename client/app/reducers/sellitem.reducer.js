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

export function sellItemReducer(state = {}, action) {
  const dispatch = action.type;
  const newState = state;
  if (!newState.sellItem) newState.sellItem = sellItemInit;
  if (dispatch === 'updateSellItem') {
    newState.sellItem.update_at = new Date().toString();
    newState.sellItem.title = action.title;
    return newState;
  } else if (dispatch === 'updateSellImage') {
    newState.sellItem.update_at = new Date().toString();
    if (newState.sellItem.images.length < 4) {
      newState.sellItem.images.concat(action.image);
    } else {
      console.log('Error too many images entered already.');
    }
  } else if (dispatch === 'updateSellPrice') {
    newState.sellItem.update_at = new Date().toString();
    // Should only be used to change info on the current product
    newState.sellItem.price = action.price;
    return newState;
  }
  return newState;
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
