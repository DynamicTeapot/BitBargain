import React from 'react';
import {Link} from 'react-router';

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
      <Link to={'signin'}>
      <button>
      Sign In
      </button>
      </Link>
      <Link to={'search'}>
      <button>
      Search
      </button>
      </Link>
      <Link to={'something'}>
      <button>
      Something
      </button>
      </Link>
      </div>
    </nav>
  );
};


export default NavBar;
