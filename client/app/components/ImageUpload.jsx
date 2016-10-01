import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import {
  UpStateToProps,
  UpDispatchToProps,
  PreStateToProps,
  PreDispatchToProps } from '../reducers/images.reducer.js';

class uploadContainer extends React.Component {

  handleFile(e) {
    const reader = new FileReader();
    const file = e.target.files[0];
    const submit = i => this.props.submitImage(i);

    reader.onload = upload => {
      submit({
        data_uri: upload.target.result,
        filename: file.name,
        filetype: file.type
      });
    };

    reader.readAsDataURL(file);
  }

  render() {
    const imageFun = (e) => this.handleFile(e);

    if (this.props.imageStatus === 'ready') {
      return (
        <div className="file-field input-field">
          <div className="waves-effect waves-light btn">
            <span>Images</span>
            <input type="file" onChange={imageFun} multiple />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" placeholder="Upload one or more files" />
          </div>
        </div>
      );
    }
    // loading icon
    return (
      <div className="progress">
        <div className="indeterminate" />
      </div>
    );
  }
}

uploadContainer.propTypes = {
  imageStatus: PropTypes.string.isRequired,
  submitImage: PropTypes.func.isRequired
};

export const ImageUpload = connect(UpStateToProps, UpDispatchToProps)(uploadContainer);

function SingleImage(props) {
  return (<img role="presentation" src={props.image.url} />);
}

SingleImage.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string.isRequired
  }).isRequired
};

function previewContainer(props) {
  if (props.images.length > 0) {
    return props.images.map(im => <SingleImage image={im} />);
  }
  return (<span> No images uploaded yet. </span>);
}

previewContainer.propTypes = {
  images: PropTypes.array.isRequired
};

export const ImagePreview = connect(PreStateToProps, PreDispatchToProps)(previewContainer);
