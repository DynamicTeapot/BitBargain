import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 


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
    console.log('should update the product with an ajax call here');
    this.props.updateProduct({
      image: {
        url: 'http://25.media.tumblr.com/1ed3f564cd07a5df56d845a49cc46281/tumblr_mg8k8zCiAW1qd7h1xo1_500.gif'
      },
      title: 'different Product',
      seller: 'SELLER NOME',
      desc: 'This is a desc of a product',
      category: ['cat1', 'cat2', 'cat3'],
      postedAt:  new Date,
      location: 'San Franpyscho',
      post: 'What'
    });
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
              <img src={ this.props.product.image.url } role="presentation" className="activator center" style={{width:35+'em'}}/>
            </div>
            <h2> { this.props.product.title }</h2>
          </center>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">{ this.props.product.title }<i className="material-icons right">close</i></span>
            <p> { this.props.product.desc } </p>
          </div>
          <div className="card-action">
            <small><p> Sold by: { this.props.product.seller } in { this.props.product.location }<br/> { this.props.product.postedAt.toString() } </p></small>
            {this.props.product.category.map((cat)=>(
              <div className="chip" key={cat}>{cat}</div>
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
