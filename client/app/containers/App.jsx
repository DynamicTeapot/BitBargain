import React from 'react';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import Chime from '../components/Chime.jsx';
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
    .then((resp) => {
      if (resp !== '') {
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
        <div style={{ minHeight: `${89.2}%`, flex: '1 0 auto' }}>
          <NavBar />
          <Chime />         
          {
          React.cloneElement(this.props.children)
          }
        </div>
        <Footer />
      </div>
    );
  }
}

const App = connect(null, mapDispatchToProps)(AppContainer);


export { App, AppContainer };
