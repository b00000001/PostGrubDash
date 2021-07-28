import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <main className="flex justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          {/* <h4 className="card-header bg-dark text-light p-2">Login</h4> */}
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <h2 className="text-2xl">Already have an account? Log in here!</h2>
                <br/>
                <label className="block text-grey-darker text-sm font-bold mb-2" for="email">
                  Email
                </label>
                <input
                  className="form-input shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <label className="block text-grey-darker text-sm font-bold mb-2" for="password">
                  Password
                </label>
                <input
                  className="form-input shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button
                  className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mt-5 mb-3"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Sign In
                </button>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
