import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 


// TODO: Get this to check current product first before loading.


const mapStateToProps = state => {
  return {
    product: state.product
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateProduct: (data) => {
      dispatch({type: 'updateProduct', product: data});
    },
    clearProduct: ()=> {
      dispatch({type: 'clearProduct'});
    }
  };
};


class Product extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    fetch(`/items/${this.props.params.id}`)
      .then(res => {
	return res.json();
      })
      .then(res => {
	this.props.updateProduct(res);
      })
      .catch(err => console.error(err));
  }
  componentWillUnmount() {
    this.props.clearProduct();
  }
  render() {
    return (
      <div className="container">
        <div className="card large">
          <center>
            <div className="card-image waves-effect waves-block waves-light">
              <img src={ this.props.product.images[0] } role="presentation" className="activator center" style={{width:35+'em'}}/>
            </div>
            <h2> { this.props.product.title }</h2>
          </center>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">{ this.props.product.title }<i className="material-icons right">close</i></span>
            <p> { this.props.product.desc } </p>
          </div>
          <div className="card-action">
            <small><p> Sold by: { this.props.product.seller } in { this.props.product.location }<br/> { this.props.product.post.toString() } </p></small>
            {this.props.product.category.map((cat)=>(
              <div className="chip" key={cat.trim()}>{cat.trim()}</div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

Product = connect(mapStateToProps, mapDispatchToProps)(Product);
export { Product };
