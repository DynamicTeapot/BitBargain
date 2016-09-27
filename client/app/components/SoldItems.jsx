import React, { PropTypes } from 'react';
import SoldItem from './SoldItem';

function SoldItems({ items }) {
  return (
    <div>
      <ul>
      { items.map(item => <SoldItem item={item} />) }
      </ul>
    </div>
  );
}

SoldItems.propTypes = {
  items: PropTypes.array.isRequired
};
