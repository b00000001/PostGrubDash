import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

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
        <div className="container max-width bg-gray-200 justify-items-center font-serif m-auto space-x-24">
          <Link to="/about">
        <h3 className="inline m-5 m-auto text-2xl object-center align-middle">About Us</h3>
        </Link>
        <Link to="/contact">
        <h3 className="inline m-5 text-2xl align-middle">Contact</h3>
        </Link>
        <FontAwesomeIcon className="fa-3x m-5 align-middle text-blue-600" icon={faFacebook}/>
        <FontAwesomeIcon className="fa-3x m-5 align-middle" icon={faInstagram}/>
        <FontAwesomeIcon className="fa-3x m-5 align-middle text-blue-400" icon={faTwitter}/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
