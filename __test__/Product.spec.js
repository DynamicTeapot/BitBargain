import React from 'react';


import Product from '../client/app/components/Product.jsx';

import renderer from 'react-test-renderer';


// const productComponent = require('../client/app/components/Product');

it('renders correctly', () => {
  const user = { username: 'USERNAME' };
  const image = { url: 'http://www.google.com/' };
  const product = { title: 'PRODUCTNAME', description: 'PRODUCTDESCRIPTION', image};

  const tree = renderer.create(<Product product={product} user={user}/>).toJSON();

  expect(tree).toMatchSnapshot();
});

