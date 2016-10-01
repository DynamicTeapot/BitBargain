import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { ImageUpload, ImagePreview } from './ImageUpload.jsx';
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

  handleForm() {
    // /items/sell endpoint
    const newItem = this.state;
    newItem.created_at = new Date();
    newItem.updated_at = new Date();
    // join local state w/ redux images
    newItem.images = this.props.images.map(i => i.url);
    console.log('newItem is,', newItem);
    this.props.submitSell(newItem);
  }

  render() {
    const submitFun = (e) => { e.preventDefault(); this.handleForm(); return false; };
    const priceFun = e => this.setState({ price: e.target.value });
    const descFun = e => this.setState({ description: e.target.value });
    const titleFun = e => this.setState({ title: e.target.value });

    return ((
      <div className="row">
        <form onSubmit={submitFun} id="sell-form" className="sell-item-form col s12">
          <ImageUpload />
          <ImagePreview />
          <div className="row">
            <div className="input-field col s6">
              <input onChange={titleFun} className="active" type="text" id="title" />
              <label htmlFor="title">Product Name</label>
            </div>

              <div className="input-field col s6">
                <input onChange={priceFun} type="number" className="validate" id="price" />
                <label htmlFor="price">Price($)</label>
              </div>
            </div>


            <div className="row">
              <div className="input-field col s12">
                <textarea className="materialize-textarea" onChange={descFun} id="description"/>
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
  submitSell: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired
};

const SellItem = connect(mapStateToProps, mapDispatchToProps)(sellItemContainer);

export default SellItem;
