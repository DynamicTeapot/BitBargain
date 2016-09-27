import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  mapStateToProps,
  mapDispatchToProps,
  productReducer } from '../reducers/product.reducer';

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
    return (
      <div className="container">
        <div className="card large">
          <center>
            <div className="card-image waves-effect waves-block waves-light" />
            <h2> { this.props.product.title }</h2>
          </center>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              { this.props.product.title }<i className="material-icons right">close</i>
            </span>
            <p> { this.props.product.description } </p>
          </div>
          <div className="card-action">
            <small>
              <p>{ this.props.product.location }<br /> { this.props.product.created_at } </p>
            </small>
            <div className="chip">
              {this.props.product.category}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

productContainer.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired
  }),
  params: PropTypes.shape({
    id: PropTypes.any
  }),
  updateProduct: PropTypes.func.isRequired,
  clearProduct: PropTypes.func.isRequired
};

const Product = connect(mapStateToProps, mapDispatchToProps)(productContainer);

export { Product, productReducer, productContainer };
