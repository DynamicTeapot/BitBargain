import React from 'react';
import { Link } from 'react-router';


function SearchResult(props) {
  return (
    <div className="card col s12 m4 l3">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src="https://static.pexels.com/photos/131259/pexels-photo-131259-large.jpeg" />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          Card Title
          <i className="material-icons right">more_vert</i>
        </span>
        <p>
          <Link className="collection-item" to={`/product/${props.product.id}`}>
            Go To Product!
          </Link>
        </p>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          {props.product.title}
          <i className="material-icons right">close</i></span>
        <p>
          Here is some more information about this product that is only revealed once clicked on.
        </p>
      </div>
    </div>
  );
}


SearchResult.propTypes = {
  product: React.PropTypes.shape({
    title: React.PropTypes.isRequired,
    id: React.PropTypes.any.isRequired
  })
};


export default SearchResult;
