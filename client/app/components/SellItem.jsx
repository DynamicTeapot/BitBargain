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
    const updateFun = (event) => { this.handleChange(event); };
    return ((
      <form>
        <input type="Text" id="title" />
        <label className="active" htmlFor="title">Title</label>
        <textarea className="materialize-textarea" id="description" />
        <label className="active" htmlFor="description" >Description</label>
        <input type="email" id="email" className="validate" />
        <label className="active" htmlFor="email">Description</label>
        <button />
      </form>
    ));
  }
}

sellItemContainer.propTypes = {
  sellProduct: item.isRequired,
  updateSellTitle: PropTypes.func.isRequired
};

const SellItem = connect(mapStateToProps, mapDispatchToProps)(sellItemContainer);

export default SellItem;
