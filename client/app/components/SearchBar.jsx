import React from 'react';
import { connect } from 'react-redux';
import SearchResults from './SearchResults.jsx';
import {
  mapStateToProps,
  mapDispatchToProps
} from '../reducers/search.reducer';
import item from '../schema';

class SearchBarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }
  componentDidMount() {
    $('#search').on('submit', (e) => {
      this.setState({ loading: true });
      e.preventDefault();
      // AJAX CALL HERE
      fetch(`/api/search/${e.originalEvent.target[0].value.trim()}`)
        .then(res => res.json())
        .then((res) => {
          console.log('the results are', res);
          this.props.updateResults(res.items);
          this.setState({ loading: false });
        }).catch((err) => {
          console.error(err);
        });
    });
  }
  // TODO: WRAP EACH LI INTO A LINK FOR the PRODUCT PAGE AND THEN CALL THE PRODUCT DOWN FROM DB
  render() {
    return (
      <div className="container">
        <div className="row">
          <form className="col s12" id="search">
            <div className="row">
              <div className="input-field col s10">
                <input id="icon_search" type="text" value={this.state.value} />
                <label htmlFor="icon_search">Search?</label>
                <i className="material-icons prefix">search</i>
              </div>
            </div>
          </form>
          {
            this.state.loading ?
              <div className="progress"><div className="indeterminate" /></div> : null
          }
        </div>
        <SearchResults products={this.props.results} />
      </div>
    );
  }
}

SearchBarContainer.propTypes = {
  results: React.PropTypes.arrayOf(item)
};

const SearchBar = connect(mapStateToProps, mapDispatchToProps)(SearchBarContainer);

export default SearchBar;
