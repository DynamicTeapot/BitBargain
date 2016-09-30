import React from 'react';
import NavBar from '../components/NavBar.jsx';
import { connect } from 'react-redux';
import { mapDispatchToProps } from '../reducers/auth.reducer';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    fetch('/auth/persist', {
    method: 'GET',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
    })
    .then(data => data.text())
    .then(resp => { 
      if(resp !== "") {
        try {
          this.props.loginSuccess(JSON.parse(resp));
        }
        catch (err) {
          this.props.loginSuccess(resp);
        }
      }
    });
  }
  render() {
    return (
      <div>
        <NavBar />
        {
        React.cloneElement(this.props.children)
        }
      </div>
    );
  }
}

const App = connect(null, mapDispatchToProps)(AppContainer);


export { App, AppContainer };
