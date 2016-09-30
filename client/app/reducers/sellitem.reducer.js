import { SELL_SUCCESS, SELL_POST } from '../actions/sellitem.action';

export function sellItemReducer(state = { status: undefined }, action) {
  const dispatch = action.type;
  const newState = state;
  if (dispatch === SELL_SUCCESS) {
    return newState;
  }
  return state;
}

export function mapStateToProps(state) {

}

export function mapDispatchToProps(dispatch) {
  return {
    submitSell: (data) => {
      dispatch({ type: SELL_POST, item: data });
    }
  };
}
