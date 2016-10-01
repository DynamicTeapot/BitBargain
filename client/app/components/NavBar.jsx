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


const tabMap = 
[{title: 'Home', link: '', align: 'left'},
 {title: 'Sell', link: '/sellitem', align: 'left'},
 {title: 'Dispute', link: '/dispute', align: 'left'},
 {title: 'Sign Up', link: '/signup', align: 'right'},
 {title: 'Login', link: '/login', align: 'right'},
 ]

const NavBar = (props) => {
  $(".button-collapse").sideNav();
  return (
    <nav>
      <div className="nav-wrapper light-blue lighten-2">
        <a data-activates="mobile" className="button-collapse"><i className="material-icons">menu</i></a>
        <a className="brand-logo center">Bit Bargain</a>
        <a className="brand-logo right">{props.user}</a>
        <ul className="left hide-on-med-and-down">
          {tabMap.map((tab, index) => {
              return (<li key={index}  className={`${tab.align}`}><Link to={tab.link}>{tab.title}</Link></li>);
          })}
          <li key='coinbase' className='right'><a href="/auth/login/coinbase"><i className="material-icons">monetization_on</i></a></li>
        </ul>
        <ul className="side-nav" id="mobile">
          {tabMap.map((tab, index) => {
              return (<li key={index}><Link to={tab.link}>{tab.title}</Link></li>);
          })}
        </ul>
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  user: PropTypes.string.isRequired
};


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
