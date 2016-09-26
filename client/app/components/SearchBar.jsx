import React from 'react';
import SearchResults from './SearchResults.jsx';
import { connect, dispatch } from 'react-redux';


const searchInit = {
  parameters: [],
  results: []
};
//Each result is a product and each parameter is parsed down to a category or thrown out

const searchReducer = (state=searchInit, action) => {
  let dispatch = action.type;
  let newState = {}
  if (dispatch === 'updateResults') {
    newState.parameters = state.parameters
    newState.results = action.results;
    return newState;
  } else if (dispatch === 'clearResults') {
    newState = { parameters: [], results: []}
    return newState;
  } else {
    return state;
  }
};

const mapStateToProps = state => {
  return {
    parameters: state.search.parameters,
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
      fetch('/api/search/foo').then(res => {
	return res.json();
      }).then(res => {
	this.props.updateResults(res.items);
        this.setState({loading: false});
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
                <input id="icon_search" type="text" />
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


export { SearchBar, searchReducer };
