import React from 'react';


const SearchResult = (props) => {
  return (
    <a href="#!" className="collection-item">{props.product.name}</a>
  );
}


SearchResult.propTypes = {
  product: React.PropTypes.object
};


export default SearchResult
