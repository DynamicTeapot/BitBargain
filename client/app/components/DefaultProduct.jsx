import React from 'react';
import item from '../schema';
import { connect } from 'react-redux';

const DEFAULT_WIDTH = '80%';

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
  // componentDidMount() {
  //   $('.leftarrow').on('click', (e) => {
  //     $('.carousel').carousel('prev');
  //   });
  //   $('.rightarrow').on('click', (e) => {
  //     $('.carousel').carousel('next');
  //   });
  // }
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
          <div className="col s12 m10 l10">
            <div className="card sticky-action">
              <div className="card-image waves-effect waves-block waves-light">
                <center>
                  <div className="carousel carousel-slider">
                    <div className="carousel-fixed-item center">
                      <a className={'leftarrow'}><i className="material-icons large left">keyboard_arrow_left</i></a>
                      <a className={'rightarrow'}><i className="material-icons large right">keyboard_arrow_right</i></a>
                    </div>
                    {this.props.product.images.map(url => (
                      <div className="carousel-item">
                        <img src={url} role="presentation" className="activator" style={{ width: DEFAULT_WIDTH }} />
                      </div>
                    ))}
                  </div>
                </center>
              </div>
              <div className="card-content">
                <center><span className="card-title grey-text text-darken-4 activator">
                  { this.props.product.title }
                </span></center>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">{this.props.product.title}<i className="material-icons right">close</i></span>
                <div>
                  {this.props.product.description}<br />
                  <div className="divider" />
                  <h5>{this.props.product.location }</h5><br />
                  { `Submitted on ${(new Date(this.props.product.created_at)).toLocaleString()}` }<br />
                  { `Last Updated ${(new Date(this.props.product.updated_at)).toLocaleString()}` }<br />
                </div>
              </div>
              <div className="card-action">
                <div className="right-align">
                  <a className={`btn-floating btn-large waves-effect waves-light green accent-3 right ${this.props.loggedIn && this.state.canBuy ? '' : 'disabled'}`} onClick={this.buy.bind(this)}><i className="material-icons">add_shopping_cart</i></a>
                  {this.state.bought ? <div className="chip"><a className="waves-effect waves-light btn-button buyton" href={`https://www.coinbase.com/checkouts/${this.state.embedCode}`}>Pay With Bitcoin</a></div> : ''}
                </div>
                {this.state.processing ? <div className="progress">
                  <div className="indeterminate" />
                </div> : ''}
                <div className="chip">
                  {this.props.product.category}
                </div>
                <small>
                  <div><center><h4>{ this.props.product.price }</h4><br /></center></div>
                </small>
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
