import React, { PropTypes } from 'react';
import item from '../schema.js';
import { connect } from 'react-redux';
import {
  mapStateToProps,
  mapDispatchToProps,
  productReducer } from '../reducers/sellitem.reducer';

function sellItemContainer({sellProduct}) {
  return((<h1>Sell dat shit</h1>));
}

sellItemContainer.propTypes = {
  sellProduct: item
}

const SellItem = connect(mapStateToProps, mapDispatchToProps)(sellItemContainer);

export default SellItem;
