import React from 'react';
import { connect } from 'react-redux';
import SearchResult from './SearchResult.jsx';
import item from '../schema';


const ItemSuggestionsContainer = props => (
  <div className="row container"> {
    props.products.map((product, index) => (<SearchResult key={index} product={product} />))
    }
  </div>
);


ItemSuggestionsContainer.propTypes = {
  products: React.PropTypes.arrayOf(item)
};


function mapStateToProps(state) {
  return {
    products: state.itemSuggestions.suggestion
  };
}


const ItemSuggestions = connect(mapStateToProps, null)(ItemSuggestionsContainer);


export default ItemSuggestions;
