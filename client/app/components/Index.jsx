import React from 'react';
import SearchBar from './SearchBar.jsx'


// TODO: Add geo-location selector. 
// TODO: Add a search bar. 
// TODO: Get categories.


const Index = (props) => {
  return (
    <div>
      <SearchBar
	  autoFocus={true}
	  placeholder={'Search Products'}
	  onSearch={() => {return;}}
	  onChange={(input, resolve) => {
	      // Simulate AJAX request
	      setTimeout(() => {
		const suggestions = matches[Object.keys(matches).find((partial) => {
		  return input.match(new RegExp(partial), 'i');
		})] || ['macbook', 'macbook air', 'macbook pro'];

		resolve(suggestions.filter((suggestion) =>
		  suggestion.match(new RegExp('^' + input.replace(/\W\s/g, ''), 'i'))
		));
	      }, 25);
	    }}/>
    </div>
  );
}


export default Index;
