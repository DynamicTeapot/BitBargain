import React, { PropTypes } from 'react';


function sellSuccess(data) {
  // do something with the success response from the server
}

function sellProduct(product) {
  // get the url from state?
  let url = 'http://localhost:9009';
  url = `${url}/items/sell`;
  $.ajax({
    url,
    dataType: 'json',
    data: { product },
    success: sellSuccess,
    error: (xhr, status, err) => {
      console.error(url, status, err.toString());
    }
  });
}
