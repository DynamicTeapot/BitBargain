import { imagePost, IMAGE_POST, IMAGE_SUCCESS } from '../actions/sellitem.action';

export function imageReducer(state = { imageStatus: 'ready', images: [] }, action) {

  const dispatch = action.type;
  const newState = state;

  if (dispatch === IMAGE_POST) {
    newState.imageStatus = 'loading';
    return Object.assign({}, newState);
  } else if (dispatch === IMAGE_SUCCESS) {
    console.log('Image success action,', action);
    newState.imageStatus = 'ready';
    newState.images.push(action.image.url);
    newState.images = newState.images.slice(0);
    return Object.assign({}, newState);
  }

  return state;
}

export function UpStateToProps(state) {
  return {
    imageStatus: state.image.imageStatus,
  };
}

export function UpDispatchToProps(dispatch) {
  return {
    submitImage: image => {
      dispatch(imagePost(image));
    }
  };
}

export function PreStateToProps(state) {
  return {
    images: state.image.images
  };
}

export function PreDispatchToProps(dispatch) {
  return {};
}

