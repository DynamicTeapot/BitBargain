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

export function productReducer(state = productInit, action) {
  const dispatch = action.type;

  if (dispatch === 'changeProduct') {
    // Should be used only for changing to a completely different product
    return Object.assign({}, action.product);
  } else if (dispatch === 'updateProduct') {
    // Should only be used to change info on the current products
    return Object.assign({}, action.product);
  } else if (dispatch === 'CLEAR') {
    return {};
  }
  return state;
}

export function mapStateToProps(state) {
  return {
    product: state.product,
    loggedIn: state.login.loggedIn,
    user: state.login.user
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    updateProduct: (data) => {
      dispatch({ type: 'updateProduct', product: data });
    },
    clearProduct: () => {
      dispatch({ type: 'CLEAR' });
    }
  };
}
