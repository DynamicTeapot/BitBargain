import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 

const productInit = {
  image: {
    url: 'http://25.media.tumblr.com/1ed3f564cd07a5df56d845a49cc46281/tumblr_mg8k8zCiAW1qd7h1xo1_500.gif'
  },
  title: 'This is the name of a product',
  seller: 'SELLER NAME',
  desc: 'This is a desc of a product',
  category: ['cat1', 'cat2', 'cat3'],
  postedAt:  new Date,
  location: 'San Franpyscho',
  post: 'What'


};

const productReducer = (state=productInit, action) => {
  let dispatch = action.type;
  if (dispatch === 'changeProduct') {
    //Should be used only for changing to a completely different product
    state.product = action.product;
    return state;
  } else if (dispatch === 'updateProduct') {
    //Should only be used to change info on the current product
    state.product = action.product;
    return state;
  } else {
    return state;
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    product: state.product
  };
};


let Product = ({ product }) => {
  return (
    <div className="container">
      <div className="card large">
        <center>
          <div className="card-image waves-effect waves-block waves-light">
            <img src={product.image.url} role="presentation" className="activator center" style={{width:35+'em'}}/>
          </div>
          <h2> { product.title }</h2>
        </center>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">{ product.title }<i className="material-icons right">close</i></span>
          <p> { product.desc } </p>
        </div>
        <div className="card-action">
          <small><p> Sold by: { product.seller } in { product.location }<br/> { product.postedAt.toString() } </p></small>
          {product.category.map((cat)=>(
            <div className="chip" key={cat}>{cat}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

Product = connect(mapStateToProps)(Product);
export { Product, productReducer };
