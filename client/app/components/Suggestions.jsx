import React from 'react';


const Suggestions = (props) => {
  return (
    <ul className="search-suggestions">
    {props.suggestions.map((suggestion, index) => {
      return (
	<li key={index}>
	  <a href={`search?q=${props.searchTerm}${suggestion}`}>
	    <span>
	      {props.searchTerm}
	      <strong>{suggestion}</strong>
	    </span>
	  </a>
	</li>
      )
    }
    )}
    </ul>
  );
}


Suggestions.propTypes = {
  searchTerm: React.PropTypes.string,
  suggestions: React.PropTypes.arrayOf(React.PropTypes.string)
};

Suggestions.defaultProps = {
  searchTerm: 'F',
  suggestions: ['oo1', 'oo2', 'oo3']
};


export default Suggestions
