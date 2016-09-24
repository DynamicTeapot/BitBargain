import React from 'react';
import SearchResult from './SearchResult.jsx';


const SearchResults = (props) => {
  return (
    <div className="collection"> {
      props.products.map(product => {
	return (
	  <SearchResult
	      key={product.id}
	      product={product}/>
	);
      })
      }
    </div>
  );
}


SearchResults.propTypes = {
  products: React.PropTypes.arrayOf(React.PropTypes.object)
};

// XXX
SearchResults.defaultProps = {
  products: [
    {
      id: 1,
      name: 'Alvin1'
    },
    {
      id: 2,
      name: 'Alvin2'
    },
    {
      id: 3,
      name: 'Alvin3'
    }
  ]
};


export default SearchResults
