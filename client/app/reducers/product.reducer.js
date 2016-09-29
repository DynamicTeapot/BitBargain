const productInit = {
  title: 'This is the name of a product',
  seller: 'SELLER NAME',
  description: 'This is a desc of a product',
  category: 'chicken',
  created_at: new Date().toString(),
  location: 'San Franpyscho',
  post: 'What',
  id: 123
};

export function productReducer(state = {}, action) {
  const dispatch = action.type;
  if (!state.product) state.product = productInit;
  const newState = state;
  if (dispatch === 'changeProduct') {
    // Should be used only for changing to a completely different product
    newState.product = action.product;
    return newState;
  } else if (dispatch === 'updateProduct') {
    // Should only be used to change info on the current product
    newState.product = action.product;
    return newState;
  }
  return state;
}

export function mapStateToProps(state) {
  return {
    product: state.product
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    updateProduct: (data) => {
      dispatch({ type: 'updateProduct', product: data });
    },
    clearProduct: () => {
      dispatch({ type: 'clearProduct' });
    }
  };
}
