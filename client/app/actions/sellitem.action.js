import React, { PropTypes } from 'react';
import { Router } from 'react-router';

export const SELL_SUCCESS = 'SELL_SUCESS';

export function sellSuccess(resp) {
  // do something with the success response from the server
  console.log('Sell success with action : ', resp);
  let product = resp.json();
  product = product.data;
  Router.transitionTo(`/product/${product.id}`);
  return { type: SELL_SUCCESS, product };
}

export const SELL_ERROR = 'SELL_ERORR';

export function sellError(error) {
  console.log('Sell error ', error);
  return { type: SELL_ERROR, error };
}

export const SELL_POST = 'SELL_POST';

export function sellPost(product) {
  // get the url from state?
  return (dispatch) => {
    let url = 'http://localhost:9009';
    url = `${url}/items/sell`;
    $.ajax({
      url,
      dataType: 'json',
      data: product,
      success: (res) => dispatch({ type: SELL_SUCCESS, data: res.data }),
      error: (xhr, status, err) => {
        console.error(url, status, err.toString());
      }
    });
  };
}
