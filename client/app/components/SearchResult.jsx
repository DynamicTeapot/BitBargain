import React from 'react';
import { Link } from 'react-router';


// TODO: Have the link send the product info to the product route.


const SearchResult = (props) => {
  return (
    <Link
	className="collection-item"
	to={`/product/${props.product.id}`}>
      {props.product.title}
    </Link>
  );
}


SearchResult.propTypes = {
  product: React.PropTypes.object
};


export default SearchResult
