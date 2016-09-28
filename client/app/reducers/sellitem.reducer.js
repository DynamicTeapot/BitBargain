const sellItemInit = {
  title: 'Enter a title',
  // get seller from the logged in user of state
  seller: 'SELLER NAME',
  description: 'Enter a description',
  price: 'Many dollars',
  category: 'Enter a category',
  created_at: new Date().toString(),
  updated_at: new Date().toString(),
  location: 'San Francisco',
  post: 'What',
  images: [],
};

export function sellItemReducer(state = sellItemInit, action) {
  const dispatch = action.type;
  let newState = state;

  if (dispatch === 'updateSellTitle') {
    newState.sellItem.update_at = new Date().toString();
    newState.sellItem.title = action.title;
    return newState;
  } else if (dispatch === 'updateSellImage') {
    if (newState.sellItem.images.length < 4) {
      newState.sellItem.update_at = new Date().toString();
      newState.sellItem.images.concat(action.image);
    } else {
      console.log('Error too many images entered already.');
    }
  } else if (dispatch === 'updateSellPrice') {
    // Should only be used to change info on the current product
    newState.sellItem.price = action.price;
    return newState;
  }
  return state;
}

export function mapStateToProps(state) {
  return {
    sellProduct: state.sellItem
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    updateSellTitle: (data) => {
      dispatch({ type: 'updateSellTitle', title: data });
    },
    addSellImage: (data) => {
      dispatch({ type: 'addSellImage', image: data});
    },
    updateSellPrice: (data) => {
      dispatch({ type: 'updateSellPrice', price: data });
    }
  };
}
