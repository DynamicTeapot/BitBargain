import { imagePost, IMAGE_POST, IMAGE_SUCCESS } from '../actions/sellitem.action';

export function imageUploadReducer(state = { imageStatus: 'ready', images: [] }, action) {
  const dispatch = action.type;
  const newState = state;
  if (dispatch === IMAGE_POST) {
    newState.imageStatus = 'loading';
    return newState;
  } else if (dispatch === IMAGE_SUCCESS) {
    newState.imageStatus = 'ready';
    return newState;
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

export function imagePreviewReducer(state = { images: 'ready' }, action) {
  const dispatch = action.type;
  const newState = state;
  if (dispatch === IMAGE_SUCCESS) {
    newState.images.push(action.image);
    return newState;
  }

  return state;
}

export function PreStateToProps(state) {
  return {
    images: state.image.images
  };
}

export function PreDispatchToProps(dispatch) {
  return {};
}

