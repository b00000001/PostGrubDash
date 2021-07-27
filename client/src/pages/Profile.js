// Node Modules
import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
// Utilities
import Auth from '../utils/auth';
import { QUERY_ME } from '../utils/queries';
// Components
import UserList from '../components/UserList';

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
  console.log(user);

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
            <h2>
              Order History for {user.firstName} {user.lastName}
            </h2>
            {user.orders.map((order) => (
              <div key={order._id} className="my-2">
                <h3>
                  {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
                </h3>
                <div className="flex-row">
                  {order.products.map(({ _id, image, name, price }, index) => (
                    <div key={index} className="card px-1 py-1">
                        <img alt={name} src={`/images/${image}`} />
                        <p>{name}</p>
                      <div>
                        <span>${price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        ) : null}
      </div>
    </>
    )
  }

  // if (!user?.username) {
  //   return (
  //     <h4>
  //       You need to be logged in to see this. Use the navigation links above to
  //       sign up or log in!
  //     </h4>
  //   );
  // }

  // const renderUserList = () => {
  //   if (usersLoading) return null;
  //   // Only renders users who's profile we're not currently viewing
  //   const notMeUsers = users.filter(o => o._id !== user._id);
  //   return (
  //     <div className="col-12 col-md-10 mb-5">
  //       <UserList users={notMeUsers} title="User List" />
  //     </div>
  //   );
  // };

  // const renderCurrentUserInfo = () => {
  //   if (id) return null;
  //   return (
  //     <ul>
  //       <li>username: {user.username}</li>
  //       <li>email: {user.email}</li>
  //     </ul>
  //   );
  // }

  // return (
  //   <div>
  //     <div className="flex-row justify-center mb-3">
  //       <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
  //         Viewing {id ? `${user.username}'s` : 'your'} profile.
  //       </h2>
  //       {renderCurrentUserInfo()}
  //       {/* {renderUserList()} */}
  //     </div>
  //   </div>
  // );
};

export default Profile;
