import React from 'react';


import { Product, productContainer } from '../client/app/components/Product.jsx';

import renderer from 'react-test-renderer';


// const productComponent = require('../client/app/components/Product');

it('renders correctly', () => {

    const product = { 
        image: {
        url: 'http://25.media.tumblr.com/1ed3f564cd07a5df56d845a49cc46281/tumblr_mg8k8zCiAW1qd7h1xo1_500.gif'
      },
      title: 'different Product',
      seller: 'SELLER NOME',
      desc: 'This is a desc of a product',
      category: ['cat1', 'cat2', 'cat3'],
      postedAt: '2016-09-27T02:36:02.020Z', 
      location: 'San Franpyscho',
      post: 'What'
    };
  console.log(renderer.create(<productContainer product={product} />).toJSON());
  const tree = renderer.create((<productContainer product={product} />)).toJSON();

  expect(tree).toMatchSnapshot();
});

