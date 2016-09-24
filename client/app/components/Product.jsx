import React, { PropTypes } from 'react';

function Product({ product, user }) {
  console.log('Product: ,', product, ' User: ', user);
  return (
    <div>
      <img src={product.image.url} role="presentation" />
      <h1> { product.title }</h1>
      <h2> Sold by: { user.username } </h2>
      <p> { product.description } </p>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default Product;
