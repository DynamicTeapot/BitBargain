import React from 'react';

const item = React.PropTypes.shape({
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  price: React.PropTypes.number.isRequired,
  location: React.PropTypes.string.isRequired,
  postedAt: React.PropTypes.instanceOf(Date).isRequired,
  updatedAt: React.PropTypes.instanceOf(Date).isRequired,
  category: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  images: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
});

export default item; 
