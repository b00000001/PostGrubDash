// Node Modules
import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
// Utilities
import Auth from '../utils/auth';
import { QUERY_ME } from '../utils/queries';
// Components
// import UserList from '../components/UserList';

const Profile = () => {
  const { id } = useParams();

  // Get current user
  const { loading, data, error } = useQuery(QUERY_ME, {
    variables: { id },
  });

  // Get a list of all users
  // const { usersLoading, data: usersData } = useQuery(QUERY_USERS);

  const user = data?.me || data?.user || {};
  // const users = usersData?.users || [];
 
  if (error) console.log(error);
  // redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data._id === id) {
    return <Redirect to="/me" />;
  }

  if (loading) {
    return <h4>Loading...</h4>;
  } else {
    return (
      <>
      <div className="container my-1">
        {/* <Link to="/">← Back to Products</Link> */}

        {user ? (
          <>
            <h2 className="text-3xl ml-3">
              Order History for {user.username}
            </h2>
            {(user.orders.length) ? user.orders.map((order) => (
              <div key={order._id} className="my-2">
                <h3>
                  {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
                </h3>
                <div className="flex-row">
                  {order.products.map(({ _id, image, name, price }, index) => (
                    <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg px-1 py-1">
                        <img alt={name} src={`/images/${image}`} />
                        <p>{name}</p>
                      <div>
                        <span>${price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )) : <h1 className="text-xl ml-3">No orders at the moment.</h1> }
          </>
        ) : null}
      </div>
    </>
    )
  }

};

export default Profile;
