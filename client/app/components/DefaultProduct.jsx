import React from 'react';
import item from '../schema';

const DefaultProduct = props => (
  <div className="container">
    <div className="row">
      <div className="col s12 m10 l10">
        <div className="carousel carousel-slider">
          <div className="carousel-item">
            <img src={props.product.image} role="presentation" />
          </div>
          <div className="carousel-item">
            <img src={props.product.image} role="presentation" />
          </div>
          <div className="carousel-item">
            <img src={props.product.image} role="presentation" />
          </div>
          <div className="carousel-item">
            <img src={props.product.image} role="presentation" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col s12 m10 l10">
          <div className="card large">
            <div className="card-content">
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
      </div>
    </div>
  </div>
);

DefaultProduct.propTypes = {
  product: item
};

export default DefaultProduct;
