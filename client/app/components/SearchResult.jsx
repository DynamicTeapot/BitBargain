import React from 'react';
import Link from 'react-router';


// TODO: Make the anchor tag use router links. 


const SearchResult = (props) => {
  return (
    <a href={`/product/${props.product.id}`} className="collection-item">
      {props.product.title}
    </a>
  );
}


SearchResult.propTypes = {
  product: React.PropTypes.object
};


export default SearchResult
