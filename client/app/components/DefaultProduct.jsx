import React from 'react';

const DefaultProduct = props => (
  <div className="container">
    <div className="card large">
      <center>
        <div className="card-image waves-effect waves-block waves-light" />
        <h2> { props.product.title }</h2>
      </center>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          { props.product.title }<i className="material-icons right">close</i>
        </span>
        <p> { props.product.description } </p>
      </div>
      <div className="card-action">
        <small>
          <p>{ props.product.location }<br />
            { props.product.created_at } <br />
            { props.product.price } <br />
            { props.product.updated_at } <br />
            { props.product.posted_at } <br />
          </p>
        </small>
        <div className="chip">
           {props.product.category}
        </div>
      </div>
    </div>
  </div>
);

export default DefaultProduct;
