const productInit = {
  image: {
    url: 'http://25.media.tumblr.com/1ed3f564cd07a5df56d845a49cc46281/tumblr_mg8k8zCiAW1qd7h1xo1_500.gif'
  },
  title: 'This is the name of a product',
  seller: 'SELLER NAME',
  desc: 'This is a desc of a product',
  category: ['cat1', 'cat2', 'cat3'],
  postedAt: new Date(),
  location: 'San Franpyscho',
  post: 'What'
};

export function productReducer(state = productInit, action) {
  const dispatch = action.type;
  let newState = {};
  if (dispatch === 'changeProduct') {
    // Should be used only for changing to a completely different product
    newState = action.product;
    return newState;
  } else if (dispatch === 'updateProduct') {
    // Should only be used to change info on the current product
    newState = action.product;
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
