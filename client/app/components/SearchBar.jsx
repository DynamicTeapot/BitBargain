import React from 'react';
import Suggestions from './Suggestions.jsx';


const SearchBar = (props) => {
  return (
    <div className="row">
      <form className="col s12">
      	<div className="row">
          <div className="input-field col s10">
            <input id="icon_search" type="text" className="validate" />
            <label htmlFor="icon_search">Telephone</label>
      	    <a href="search?q=dance">
      	      <i className="material-icons prefix">search</i>
      	    </a>
          </div>
      	</div>
      </form>
    </div>
  );
};


export default SearchBar
