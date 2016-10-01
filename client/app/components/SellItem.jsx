import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ImageUploader from 'react-image-uploader';

import item from '../schema';
import { mapStateToProps, mapDispatchToProps } from '../reducers/sellitem.reducer';

class sellItemContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      price: ''
    };
  }
  handleFile(e) {
    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onload = (upload) => {
      this.setState({
        data_uri: upload.target.result,
        filename: file.name,
        filetype: file.type
      });
    };

    reader.readAsDataURL(file);
  }
  handleForm() {
    // /items/sell endpoint
    const newItem = this.state;
    newItem.created_at = new Date();
    newItem.updated_at = new Date();
    console.log('newItem is,', newItem);
    this.props.submitSell(newItem);
  }
  render() {
    const submitFun = (e) => { e.preventDefault(); this.handleForm(); return false; };
    const priceFun = e => this.setState({ price: e.target.value });
    const descFun = e => this.setState({ description: e.target.value });
    const titleFun = e => this.setState({ title: e.target.value });
    const imageFun = e => console.log(e.target.value);

    return ((
      <div className="row">
        <form onSubmit={submitFun} id="sell-form" className="sell-item-form col s12">

          <div className="file-field input-field">
            <div className="btn">
              <span>Images</span>
              <input type="file" onChange={imageFun} multiple />
            </div>
            <div className="file-path-wrapper">
              <input className="file-path validate" type="text" placeholder="Upload one or more files" />
            </div>
          </div>

          <div className="row">

            <div className="input-field col s6">
              <input onChange={titleFun} className="active" type="Text" id="title" placeholder="Enter the name of the product" />
              <label htmlFor="title">Title</label>
            </div>

            <div className="input-field col s6">
              <input className="active" onChange={priceFun} type="Text" id="price" />
              <label htmlFor="price">Price</label>
            </div>
          </div>


          <div className="row">
            <div className="input-field col s12">
              <textarea className="materialize-textarea" onChange={descFun} id="description" />
              <label className="active" htmlFor="description" >Description</label>
            </div>
          </div>


          <button className="btn waves-effect waves-light" type="submit" name="action">Submit
            <i className="material-icons right">send</i>
          </button>

        </form>
      </div>
  ));
  }
}

sellItemContainer.propTypes = {
  status: PropTypes.string.isRequired,
  submitSell: PropTypes.func.isRequired
};

const SellItem = connect(mapStateToProps, mapDispatchToProps)(sellItemContainer);

export default SellItem;
