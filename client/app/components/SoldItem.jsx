import React, { PropTypes } from 'react';

function SoldItem({ product }) {
  return (
    <li> {product.title} : ##PLACEHOLDER##FIXME## </li>
  );
}

SoldItem.propTypes = {
  item
};
