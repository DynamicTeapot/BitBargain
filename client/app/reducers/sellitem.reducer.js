import { sellPost, SELL_SUCCESS, SELL_POST } from '../actions/sellitem.action';

export function sellItemReducer(state = { status: 'idle' }, action) {
  const dispatch = action.type;
  const newState = state;
  if (dispatch === SELL_SUCCESS) {
    newState.status = 'success';
    return newState;
  } else if (dispatch === SELL_POST) {
    newState.status = 'loading';
    return newState;
  }
  return state;
}

export function mapStateToProps(state) {
  return {
    status: state.sellitem.status,
    images: state.image.images
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    submitSell: (data) => {
      dispatch(sellPost(data));
    }
  };
}
