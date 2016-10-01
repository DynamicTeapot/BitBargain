import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';

export const SELL_SUCCESS = 'SELL_SUCESS';

export function sellSuccess(resp) {
  // do something with the success response from the server
  return dispatch => {
    console.log('Sell success with action : ', resp);
    let product = resp;
    // product = product.data;

    dispatch({ type: SELL_SUCCESS });
    dispatch({ type: 'updateProduct', product });
    browserHistory.push(`/product/${product.id}`);
  };
}

export const SELL_ERROR = 'SELL_ERROR';

export function sellError(error) {
  console.log('Sell error ', error);
  return { type: SELL_ERROR, error };
}

export const SELL_POST = 'SELL_POST';

export function sellPost(product) {
  // get the url from state?
  return dispatch => {
    /*
    let url = 'http://localhost:9009';
    url = `${url}/items/sell`; */

    const url = '/items/sell';
    dispatch({ type: SELL_POST });

    const options = {
      credentials: 'include',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product)
    };

    fetch(url, options)
    .then(res => res.json().then(r => dispatch(sellSuccess(r))))
    .catch(e => {
      console.error(url, status, e.toString());
      console.log('Posted product, ', product);
    });
  };
}
