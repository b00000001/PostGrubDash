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
          <Link className="btn btn-lg btn-info m-2" to="/me">
            {Auth.getProfile().data.username}'s profile
          </Link>
          <button className="btn btn-lg btn-light m-2" onClick={logout}>
            Logout
          </button>
          <Link className="btn btn-lg btn-info m-2" to="/search">
          Search
          </Link>

        <header className="bg-dark text-light mb-4 py-3 flex-row align-center">
          <div className="nav-nav-bar flex-row justify-left align-left"> 
          <Link className="btn btn-lg btn-info m-2" to="/viewProfile">
          View Profile
          </Link>
          <Link className="btn btn-lg btn-info m-2" to="/deliveryTime">
          Delivery Time
          </Link>
          <Link className="btn btn-lg btn-info m-2" to="/addRestaurant">
          Add Restaurant
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
          Login
        </Link>
        <Link className="btn btn-lg btn-light m-2" to="/signup">
          Signup
        </Link>
      </>
    )
  };

  return (
    <header className="bg-secondary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex justify-between-lg justify-end align-center">
        <div>
          {/* <Link className="text-light" to="/">
            <h1 className="m-0">Fun User List</h1>
          </Link> */}
        </div>
        <div>
          {/* <p className="m-0 text-center">Simple App to View Users.</p> */}
          {renderControls()}
        </div>
      </div>
    </header>
  );
};

export default Header;
