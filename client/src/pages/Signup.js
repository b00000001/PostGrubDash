import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="flex justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          {/* <h4 className="card-header bg-dark text-light p-2">Sign Up</h4> */}
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
                  Username
                </label>
                <input
                  className="form-input shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                  placeholder="Your username"
                  name="username"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
                <label class="block text-grey-darker text-sm font-bold mb-2" for="email">
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
                <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
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
                  className=" shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mt-5 mb-3"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
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

export default Signup;
