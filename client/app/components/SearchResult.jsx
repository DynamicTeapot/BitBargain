import React from 'react';
import { Link } from 'react-router';


// TODO: I can't get the default value for images working.


function SearchResult(props) {
  return (
    <div className="card col s12 m4 l3 sticky-action">
      <div className="card-image waves-effect waves-block waves-light">
        <img
          role="presentation"
          className="activator"
          src="https://static.pexels.com/photos/131259/pexels-photo-131259-large.jpeg"
        />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {`${props.product.title.substr(0, 12)}...`}
          <i className="material-icons right">more_vert</i>
        </span>
      </div>
      <div className="card-action">
        <Link className="collection-item" to={`/product/${props.product.id}`}>
          Go To Product!
        </Link>
        <div className="chip">
          {`${props.product.category.split('-')[0].trim()} - ${props.product.price}`}
        </div>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          {props.product.title}
          <i className="material-icons right">close</i></span>
        <p>
          {props.product.description}
        </p>
      </div>
    </div>
  );
}


SearchResult.propTypes = {
  product: React.PropTypes.shape({
    title: React.PropTypes.isRequired,
    id: React.PropTypes.any.isRequired,
    category: React.PropTypes.string,
    price: React.PropTypes.string,
    description: React.PropTypes.string
    // images: React.PropTypes.arrayOf(React.PropTypes.string)
  })
};


export default SearchResult;
