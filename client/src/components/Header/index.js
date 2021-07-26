import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const renderControls = () => {
    // If logged in show logout controls
    if (Auth.loggedIn()) {
      return (
        <>
        <div className="bg-blue-400">
          <Link className="btn btn-lg btn-info m-2" to="/me">
            <button>{Auth.getProfile().data.username}'s profile</button>
          </Link>
          <button className="btn btn-lg btn-light m-2" onClick={logout}>
            Logout
          </button>
          <Link className="btn btn-lg btn-info m-2" to="/search">
          <button>Search</button>
          </Link>
        </div>

        <header className="food-back">
          <div className="nav-nav-bar flex-row justify-left align-left bg-black text-white"> 
          <Link className="btn btn-lg btn-info m-2" to="/viewProfile">
          <button>View Profile</button>
          </Link>
          <Link className="btn btn-lg btn-info m-2" to="/deliveryTime">
          <button>Delivery Time</button>
          </Link>
          <Link className="btn btn-lg btn-info m-2" to="/addRestaurant">
          <button>Add Restaurant</button>
          </Link>
          </div>
      </header>
        </>
      );
    }
    // If logged out show login controls
    return (
      <>
        <Link className="btn btn-lg btn-info m-2" to="/login">
          <button>Login</button>
        </Link>
        <Link className="btn btn-lg btn-light m-2" to="/signup">
          <button>Signup</button>
        </Link>
      </>
    )
  };

  return (
    <header className="food-back container bg-dark text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          {/* <Link className="text-light" to="/">
            <h1 className="m-0">Fun User List</h1>
          </Link> */}
        </div>
        <div>
          <img className="logo" src="/images/pgd-logo.jpg" alt="PostGrubDash Logo"/>
          {renderControls()}
        </div>
      </div>
    </header>
  );
};

export default Header;
