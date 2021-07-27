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
          <div className="bg-black">
            <Link className="btn btn-lg btn-info m-2" to="/me">
              <button>{Auth.getProfile().data.username}'s profile</button>
            </Link>
            <button className="btn btn-lg btn-light m-2" onClick={logout}>
              Logout
            </button>
          </div>


        </>
      );
    }

    /* <header>
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
          </header> */


    // If logged out show login controls
    return (
      <>
        <div className="bg-black nav-bar">
          <Link className="btn btn-lg btn-info ml-3" to="/login">
            <button>Login</button>
          </Link>
          <Link className="btn btn-lg btn-light ml-3" to="/signup">
            <button>Signup</button>
          </Link>
        </div>
      </>
    )
  };

  return (
    <header className="food-back container bg-dark text-light mb-4 py-3 flex-row align-center mb-8">
      <div className="flex-row justify-space-between-lg justify-center align-center">
        <Link to="/">
          <img className="logo" src="/images/pgd-logo.jpg" alt="PostGrubDash Logo" />
        </Link>
        {renderControls()}


      </div>
    </header>
  );
};

export default Header;
