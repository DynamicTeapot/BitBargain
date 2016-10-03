import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

const mapStateToProps = (state) => {
  return {
    user: state.login.user
  };
};


// Save this because it can be used elsewhere
const mapDispatchToProps = (dispatch) => {
  return {
    changeTab: (data) => {
      dispatch({ type: 'switchuser', user: String(Math.floor(Math.random() * 10000)) });
    }
  };
};


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabMap: []
    }
  }
  componentDidMount() {
    $('.button-collapse').sideNav();
    this.updateTabs(this.props);
  }
  updateTabs(newProps) {
    if (newProps.user !== 'Anonymous') {
      this.setState({
        tabMap:
        [{ title: 'Home', link: '', align: 'left' },
         { title: 'Sell', link: '/sellitem', align: 'left' },
         { title: 'Dispute', link: '/dispute', align: 'left' },
         { title: 'coin', link: 'special', align: 'right', data: <li key={'coin'} className={`${'right'}`}><a href="/auth/login/coinbase"><i className="material-icons">monetization_on</i></a></li> },
         { title: 'Signout', link: 'special', align: 'right', data: <li key={'signouot'} className={`${'right'}`}><a href="/auth/logout"><i className="material-icons">exit_to_app</i></a></li>}]
      });
    } else {
      this.setState({
        tabMap:
        [{ title: 'Home', link: '', align: 'left' },
         { title: 'Sell', link: '/sellitem', align: 'left' },
         { title: 'Dispute', link: '/dispute', align: 'left' },
         { title: 'coin', link: 'special', align: 'right', data: <li key={'coin'} className={`${'right'}`}><a href="/auth/login/coinbase"><i className="material-icons">monetization_on</i></a></li>},
         { title: 'Sign Up', link: '/signup', align: 'right' },
         { title: 'Login', link: '/login', align: 'right' }]
      });
    };
  }
  componentWillReceiveProps(newProps) {
    this.updateTabs(newProps);
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper cyan">
          <a data-activates="mobile" className="button-collapse"><i className="material-icons">menu</i></a>
          <a className="brand-logo center">{this.props.user !== 'Anonymous' ? this.props.user : 'Bit Bargain'}</a>
          <ul className="left hide-on-med-and-down">
            {this.state.tabMap.map((tab, index) => {
              return (tab.align === 'left' ? <li key={index} className={`${tab.align}`}><Link to={tab.link}>{tab.title}</Link></li> : '');
            })}
          </ul>
          <ul className="right hide-on-med-and-down">
            {this.state.tabMap.map((tab, index) => {
              return (tab.align === 'right' ? tab.link === 'special' ? tab.data : <li key={index} className={`${tab.align}`}><Link to={tab.link}>{tab.title}</Link></li> : '');
            })}
          </ul>
          <ul className="side-nav" id="mobile">
            {this.state.tabMap.map((tab, index) => {
              return (<li key={index}><Link to={tab.link}>{tab.title}</Link></li>);
            })}
          </ul>
        </div>
      </nav>
    );
  }
};

NavBar.propTypes = {
  user: PropTypes.string.isRequired
};


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
