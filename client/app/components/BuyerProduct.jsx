import React from 'react';
import item from '../schema';

const BuyerProduct = props => (
  <div className="container">
    <div className="row">
      <div className="col s12 m10 l10">
        <div className="carousel carousel-slider">
          {props.product.images.map(url => (
            <div className="carousel-item">
              <img src={url} role="presentation" />
            </div>
          ))}
        </div>
      </div>
      <div className="row">
        <div className="col s12 m10 l10">
          <div className="card large">
            <div className="card-content">
              <span className="card-title grey-text text-darken-4">
                { props.product.title }
              </span>
              <p> { props.product.description } </p>
            </div>
            <div className="card-action">
              <small>
                <p>{ props.product.location }<br />
                  { props.product.created_at } <br />
                  { props.product.price } <br />
                  { props.product.updated_at } <br />
                </p>
              </small>
              <div className="chip">
                {props.product.category}
              </div>
              <div className="center-align">
                <h3>You have purchased this item</h3>
              </div>
              <div className="right-align">
                <div className="chip"><a className="waves-effect waves-light btn-button buyton" href={`https://www.coinbase.com/checkouts/${props.embedCode}`}>Pay With Bitcoin</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

BuyerProduct.propTypes = {
  product: item
};

export default BuyerProduct;
