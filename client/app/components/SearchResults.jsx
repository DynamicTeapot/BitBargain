import React from 'react';
import SearchResult from './SearchResult.jsx';
import item from '../schema';


function SearchResults(props) {
  return (
    <div className="row"> {
      props.products.map((product, index) => (<SearchResult key={index} product={product} />))
      }
    </div>
  );
}


SearchResults.propTypes = {
  products: React.PropTypes.arrayOf(item)
};


export default SearchResults;
