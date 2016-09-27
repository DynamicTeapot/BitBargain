import React from 'react';
import SearchResult from './SearchResult';


function SearchResults(props) {
  return (
    <div className="collection"> {
      props.products.map((product, index) => (<SearchResult key={index} product={product} />))
      }
    </div>
  );
}


SearchResults.propTypes = {
  products: React.PropTypes.arrayOf(React.PropTypes.object)
};


export default SearchResults;
