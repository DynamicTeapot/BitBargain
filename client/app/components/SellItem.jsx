import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import item from '../schema';
import {
  mapStateToProps,
  mapDispatchToProps } from '../reducers/sellitem.reducer';

class sellItemContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.sellProduct;
  }
  handleChange(event) {
    this.props.updateSellTitle(event.target.value);
  }
  render() {
    return ((
      <div className="row">
        <form className="col s12">

          <div className="file-field input-field">
            <div className="btn">
              <span>Images</span>
              <input type="file" multiple />
            </div>
            <div className="file-path-wrapper">
              <input className="file-path validate" type="text" placeholder="Upload one or more files" />
            </div>
          </div>

          <div className="row">

            <div className="input-field col s6">
              <input className="active" type="Text" id="title" />
              <label htmlFor="title">Title</label>
            </div>

            <div className="input-field col s6">
              <input className="active" type="Text" id="price" />
              <label htmlFor="price">Price</label>
            </div>
          </div>


          <div className="row">
            <div className="input-field col s12">
              <textarea className="materialize-textarea" id="description" />
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
  sellProduct: item.isRequired,
  updateSellTitle: PropTypes.func.isRequired
};

const SellItem = connect(mapStateToProps, mapDispatchToProps)(sellItemContainer);

export default SellItem;
