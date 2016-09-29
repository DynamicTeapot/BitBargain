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
        <label class="active" for="title">Title</label>
        <input type="Text" id='description' />
        <label class="active" for="description">Description</label>
        <input type="email" id='email' class="validate" />
        <label class="active" for="email">Description</label>
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
