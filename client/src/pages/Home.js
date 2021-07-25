// Node Modules
import React from 'react';
import { useQuery } from '@apollo/client';
// Utilities
import Auth from '../utils/auth';
// import { QUERY_USERS } from '../utils/queries';
// Components
import UserList from '../components/UserList';
import RestaurantCard from '../components/RestaurantCard';
import SearchBar from '../components/SearchBar';

const Home = () => {
  // const { loading, data } = useQuery(QUERY_USERS);
  // const users = data?.users || [];

  // const renderUserList = () => {
  //   if (loading) {
  //     return <h2>Loading...</h2>
  //   } else {
  //     return <UserList users={users} title="List of Users" />
  //   }
  // } 

  const renderUsername = () => {
    if (!Auth.loggedIn()) return null;
    return Auth.getProfile().data.username;
  }

  return (
    <main>
      <div className="flex-col justify-center">
        {/* <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          {renderUsername()}
        </div> */}
        <SearchBar />
        <div className="flex justify-center p-4">
          <div className="grid grid-flow-row grid-cols-3 grid-rows-2 gap-10">
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
          </div>
        </div>

      </div>
    </main>
  );
};

export default Home;
