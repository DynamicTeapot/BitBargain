import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Default from '../components/DefaultProduct.jsx';
// import Buyer from '../components/BuyerProduct.jsx';
// import Seller from '../componentsSellerProduct.jsx';
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
      .then(res => {
        // test image - remove later
        res.image = 'http://lorempixel.com/output/nature-q-c-640-480-10.jpg';
        return res;
      })
      .then(res => this.props.updateProduct(res))
      .catch(err => console.error(err));  
  }
  componentDidMount() {
    const $carousel = $('.carousel.carousel-slider');
    $carousel.carousel({
      full_width: true,
      indicators: true
    });
    $carousel.on('click', () => $carousel.carousel('next'));
  }
  // componentWillUnmount() {
  //   this.props.clearProduct();
  // }
  render() {
    if (this.props.loggedIn && this.props.user === 'buyer_id') {
      return (
        <Buyer
          updateProduct={this.props.updateProduct}
          product={this.props.product}
        />
      );
    }
    if (this.props.loggedIn && this.props.user === 'seller_id') {
      return (
        <Seller
          updateProduct={this.props.updateProduct}
          product={this.props.product}
        />
      );
    }
    return (
      <Default
        updateProduct={this.props.updateProduct}
        product={this.props.product}
      />
    );
  }
}

productContainer.propTypes = {
  product: item,
  params: PropTypes.shape({
    id: PropTypes.any
  }),
  user: PropTypes.object.isRequired,
  updateProduct: PropTypes.func.isRequired,
  clearProduct: PropTypes.func.isRequired
};

const Product = connect(mapStateToProps, mapDispatchToProps)(productContainer);

export { Product, productReducer, productContainer };
