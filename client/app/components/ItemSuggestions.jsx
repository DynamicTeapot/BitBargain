import React from 'react';
import { connect } from 'react-redux';
import SearchResult from './SearchResult.jsx';
import item from '../schema';


const ItemSuggestionsContainer = props => (
  <div>
    Recently viewed items:
    <div className="row container">
      {
        props.recent.map((product, index) => (<SearchResult key={index} product={product} />))
      }
    </div>
    People like you also viewed:
    <div className="row container">
      {
        props.suggestions.map((product, index) => (<SearchResult key={index} product={product} />))
      }
    </div>
  </div>
);


ItemSuggestionsContainer.propTypes = {
  suggestions: React.PropTypes.arrayOf(item),
  recent: React.PropTypes.arrayOf(item)
};


function mapStateToProps(state) {
  return {
    suggestions: state.itemSuggestions.suggestions,
    recent: state.itemSuggestions.recent
  };
}


const ItemSuggestions = connect(mapStateToProps, null)(ItemSuggestionsContainer);


export default ItemSuggestions;
