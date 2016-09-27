import React, { PropTypes } from 'react';

function SoldItem({ item }) {
  return (
    <li> {item.title} : { item.soldTime} </li>
  );
}

SoldItem.propTypes = {
  item: PropTypes.object.isRequired
};
