import React from 'react';
import item from '../schema';
import { connect } from 'react-redux';


class DefaultProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bought: false,
      embedCode: null,
      canBuy: true,
      processing: false
    };
  }
  buy() {
    if (this.state.canBuy && this.props.loggedIn) {
      this.setState({ processing: true });
      fetch(`/items/${this.props.product.id}/buy`, {
        method: 'POST',
        mode: 'no-cors',
        credentials: 'include'
      })
    .then(resp => resp.json())
    .then((code) => {
      this.setState({ embedCode: code, bought: true, canBuy: false, processing: false });
      Materialize.toast(`Bought: ${this.props.product.title}`, 5000);
    });
    } else if (!this.props.loggedIn) {
      Materialize.toast('Must be logged in to buy item');
      this.setState({ processing: false });
    } else {
      Materialize.toast('Item has already been purchased');
      this.setState({ processing: false });
    }
  }
  render() {
    return (
    <div className="container">
      <div className="row">
        <div className="col" />
        <div className="row">
          <div className="col s12 m10 l10">
            <div className="card large">
              <div className="card-image waves-effect waves-block waves-light">
                <div className="col s5">
                  <div className="carousel carousel-slider activator">
                    <div className="carousel-item">
                      <img src={this.props.product.image} role="presentation" className="activator" />
                    </div>
                    <div className="carousel-item">
                      <img src={this.props.product.image} role="presentation" className="activator" />
                    </div>
                    <div className="carousel-item">
                      <img src={this.props.product.image} role="presentation" className="activator" />
                    </div>
                    <div className="carousel-item">
                      <img src={this.props.product.image} role="presentation" className="activator" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <span className="card-title grey-text text-darken-4">
                  { this.props.product.title }
                </span>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">{this.props.product.title}<i className="material-icons right">close</i></span>
                <p>{this.props.product.description}</p>
              </div>
              <div className="card-action">
                {this.state.processing ? <div className="progress">
                  <div className="indeterminate" />
                </div> : ''}
                <small>
                  <p>{ this.props.product.location }<br />
                    { this.props.product.created_at } <br />
                    { this.props.product.price } <br />
                    { this.props.product.updated_at } <br />
                    { this.props.product.posted_at } <br />
                  </p>
                </small>
                <div className="chip">
                  {this.props.product.category}
                </div>
                <div className="right-align">
                  <a className={`btn-floating btn-large waves-effect waves-light green accent-3 right ${this.props.loggedIn && this.state.canBuy ? '' : 'disabled'}`} onClick={this.buy.bind(this)}><i className="material-icons">add_shopping_cart</i></a>
                  {this.state.bought ? <div className="chip"><a className="waves-effect waves-light btn-button buyton" href={`https://www.coinbase.com/checkouts/${this.state.embedCode}`}>Pay With Bitcoin</a></div> : ''}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

DefaultProduct.propTypes = {
  product: item
};


export default DefaultProduct;
