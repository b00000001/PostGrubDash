import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const history = useHistory();
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container text-center mb-5">
        {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-3"
            onClick={() => history.goBack()}
          >
            &larr; Go Back
          </button>
        )}
        <h4>
          Made with{' '}
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            ❤️
          </span>{' '}
          PostGrubDash
        </h4>
        <div >
        <h3>About US</h3>
        <h3>Contact</h3>
        <h3>Career</h3>
        <h3>Social Media (Facebook, Instagram, Twitter)</h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
