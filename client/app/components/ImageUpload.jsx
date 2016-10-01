import React, { PropTypes } from 'react';

function ImageUpload(props) {
  if (props.imageStatus === 'ready') {
    return (
      <div className="file-field input-field">
        <div className="btn">
          <span>Images</span>
          <input type="file" onChange={props.imageFun} multiple />
        </div>
        <div className="file-path-wrapper">
          <input className="file-path validate" type="text" placeholder="Upload one or more files" />
        </div>
      </div>
    );
  } else {
    // loading icon
  }
}

ImageUpload.propTypes = {
  imageStatus: PropTypes.string.isRequired,
  imageFun: PropTypes.func.isRequired
};

export function SingleImage(props) {
  return (<img role="presentation" src={props.image.url} />);
}

SingleImage.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string.isRequired
  }).isRequired
};

export function ImagePreview(props) {
  if (props.images.length > 0) {
    return props.images.map(im => <SingleImage image={im} />);
  }
}

ImagePreview.propTypes = {
  images: PropTypes.arr.isRequired
};

