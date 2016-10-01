import { imagePost, IMAGE_POST, IMAGE_SUCCESS } from '../actions/sellitem.action';

export function imageUploadReducer(state = { imageStatus: 'ready' }, action) {
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

export function mapUploadStateToProps(state) {
  return {
    imageStatus: state.imageStatus,
  };
}

export function mapUploadDispatchToProps(dispatch) {
  return {
    imageFun: image => {
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

export function mapPreviewStateToProps(state) {
  return {
    images: state.images
  };
}

export function mapPreviewDispatchToProps(dispatch) {
  return {};
}

