import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    user: state.login.user
  };
};


//Save this because it can be used elsewhere
const mapDispatchToProps = (dispatch) => {
  return {
    changeUser: () => {
      dispatch({ type: 'switchuser', user: String(Math.floor(Math.random() * 10000)) });
    }
  };
};

const test = () => {
  fetch(`/auth/test`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  }).then(data => data.json())
  .then(resp => {console.log(resp)});
}


const NavBar = (props) => {
  return (
    <nav>
      <div className="nav-wrapper">
    	BitBargain
        <Link to={''}>
          <button>
            Home
          </button>
        </Link>
        <Link to={'login'}>
          <button>
            Login
          </button>
        </Link>
        <Link to={'signup'}>
          <button>
            Sign Up
          </button>
        </Link>
        <Link to={'product'}>
          <button>
            Search
          </button>
        </Link>
        <Link to={'sellitem'}>
          <button>
            Sell
          </button>
        </Link>
        <Link to={'something'}>
          <button onClick={test}>
            Testing Button
          </button>
        </Link>
        <div className="chip">
          {props.user}
        </div>
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  user: PropTypes.string.isRequired
};


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
