import { sellPost, SELL_SUCCESS, SELL_POST } from '../actions/sellitem.action';

export function sellItemReducer(state = { status: 'idle' }, action) {
  const dispatch = action.type;
  if (dispatch === SELL_SUCCESS) {
    return { status: 'success' };
  } else if (dispatch === SELL_POST) {
    return { status: 'loading' };
  }

  return state;
}

export function mapStateToProps(state) {
  return { status: state.sellitem.status };
}

export function mapDispatchToProps(dispatch) {
  return {
    submitSell: (data) => {
      dispatch(sellPost(data));
    }
  };
}
