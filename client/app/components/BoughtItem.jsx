import React, { PropTypes } from 'react';

function BoughtItem({ item }) {
  return (<a href={item.url}>{item.title}</a>);
}

BoughtItem.propTypes = {
  item: PropTypes.object.isRequired
};
export default BoughtItem;

