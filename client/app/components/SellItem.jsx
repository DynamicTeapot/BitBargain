import React, { PropTypes } from 'react';
import item from '../schema';
import { connect } from 'react-redux';
import {
  mapStateToProps,
  mapDispatchToProps } from '../reducers/sellitem.reducer';

class sellItemContainer extends React.Component {
  handleChange(event) {
    this.props.updateSellTitle(event.target.value);
  }
  render() {
    const updateFun = (event) => { this.handleChange(event); };
    return ((<input type="Text" value={this.props.sellProduct.title} onChange={updateFun} />));
  }
}

sellItemContainer.propTypes = {
  sellProduct: item.isRequired,
  updateSellTitle: PropTypes.func.isRequired
};

const SellItem = connect(mapStateToProps, mapDispatchToProps)(sellItemContainer);

export default SellItem;
