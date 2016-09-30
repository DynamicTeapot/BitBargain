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
      <div style={{minHeight: 89.2+'%', flex: '1 0 auto'}}>
        <NavBar />
        {
        React.cloneElement(this.props.children)
        }
      </div>
      <footer className="page-footer" style={{display:'flex', /*minHeight: 100 + 'vh',*/ flexDirection: 'column'}}>
          <div className="footer-copyright">
            <div className="container">
            © 2016 DynamicTeapots
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
        </div>
    );
  }
}

const App = connect(null, mapDispatchToProps)(AppContainer);


export { App, AppContainer };
