import React from 'react';
import SearchResults from './SearchResults.jsx';
import { connect, dispatch } from 'react-redux';


const mapStateToProps = state => {
  return {
    parameters: state.search.paramters,
    results: state.search.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearResults: () => {
      dispatch({type: 'clearResults'});
    },
    updateResults: (data) => {
      dispatch({type: 'updateResults', results: data});
    }
  };
};


class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: false
    };
  }
  componentDidMount() {
    $('#search').on('submit', (e)=>{
      this.setState({loading: true});
      e.preventDefault();
      //AJAX CALL HERE
      fetch(`/api/search/${e.originalEvent.target[0].value.trim()}`).then(res => {
	return res.json();
      }).then(res => {
	this.props.updateResults(res.items);
        this.setState({loading: false});
      }).catch(err => {
	console.error(err);
      });
    });
    
  }
  //TODO: WRAP EACH LI INTO A LINK FOR the PRODUCT PAGE AND THEN CALL THE PRODUCT DOWN FROM DB
  render() {
    return (
      <div className="container">
        <div className="row">
          <form className="col s12" id='search'>
            <div className="row">
              <div className="input-field col s10">
                <input id="icon_search" type="text" value={this.state.value}/>
                <label htmlFor="icon_search">Search?</label>
                <i className="material-icons prefix">search</i>
              </div>
            </div>
          </form>
          {this.state.loading ? <div className="progress"><div className="indeterminate"></div></div> : null}
        </div>
	<SearchResults products={this.props.results}/>
      </div>
    );
  }
};

SearchBar = connect(mapStateToProps, mapDispatchToProps)(SearchBar);


export { SearchBar };
