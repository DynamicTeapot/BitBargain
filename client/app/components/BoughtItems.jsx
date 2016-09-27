import React, { PropTypes } from 'react';

import BoughtItem from './BoughtItem';

function BoughtItems({ items }) {
  return (
    <ul>
      { items.map(item => <BoughtItem item={item} />) }
    </ul>
  );
}

BoughtItems.propTypes = {
  items: PropTypes.array.isRequired
};

export default BoughtItems;
