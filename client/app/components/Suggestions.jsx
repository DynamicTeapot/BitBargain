import React from 'react';


const Suggestions = (props) => {
  return (
    <ul className="search-suggestions">
      {props.suggestions.map((suggestion, index) => {
	<li key={index}>
	  <a href="!#" className="collection-item">
	    <span>
	      props.searchTerm
	      <strong>suggestion</strong>
	    </span>
	  </a>
	</li>
       }
      )}
    </ul>
  );
}


Suggestions.propTypes = {
  searchTerm: React.PropTypes.stirng,
  suggestions: React.PropTypes.arrayOf(React.PropTypes.string)
};

Suggestions.defaultProps = {
  searchTerm: 'F',
  suggestions: ['Foo1', 'Foo2', 'Foo3']
};


export default Suggestions
