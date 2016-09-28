import React from 'react';

const item = React.PropTypes.shape({
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  price: React.PropTypes.string,
  location: React.PropTypes.string.isRequired,
  posted_at: React.PropTypes.string,
  updated_at: React.PropTypes.string,
  category: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  images: React.PropTypes.arrayOf(React.PropTypes.string)
});

export default item;
