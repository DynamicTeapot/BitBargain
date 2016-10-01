import React, { PropTypes } from 'react';
// import * as Default from '../components/DefaultProduct.jsx';
// import * as Buyer from '../components/BuyerProduct.jsx';
// import * as Seller from '../componentsSellerProduct.jsx';
import { connect } from 'react-redux';
import {
  mapStateToProps,
  mapDispatchToProps,
  productReducer } from '../reducers/product.reducer';
import item from '../schema';

// TODO: Get this to check current product first before loading.
// TODO: This should redirect in the event of an error.

class productContainer extends React.Component {
  componentWillMount() {
    fetch(`/items/${this.props.params.id}`)
      .then(res => res.json())
      .then(res => this.props.updateProduct(res))
      .catch(err => console.error(err));
  }
  componentWillUnmount() {
    this.props.clearProduct();
  }
  render() {
    if (this.props.user === 'buyer') {
      return (
        <Buyer
          updateProduct={this.props.updateProduct}
          product={this.props.product}
        />
      );
    } else if (this.props.user === 'seller') {
      return (
        <Seller
          updateProduct={this.props.updateProduct}
          product={this.props.product}
        />
      );
    } else {
      return (
        <Default
          updateProduct={this.props.updateProduct}
          product={this.props.product}
        />
      );
    }
  }
}

productContainer.propTypes = {
  product: item,
  params: PropTypes.shape({
    id: PropTypes.any
  }),
  updateProduct: PropTypes.func.isRequired,
  clearProduct: PropTypes.func.isRequired
};

const Product = connect(mapStateToProps, mapDispatchToProps)(productContainer);

export { Product, productReducer, productContainer };
