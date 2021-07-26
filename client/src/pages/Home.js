// Node Modules
import React from 'react';
import { useQuery } from '@apollo/client';
// Utilities
import Auth from '../utils/auth';
// import { QUERY_USERS } from '../utils/queries';
// Components
import RestaurantCard from '../components/RestaurantCard';
import SearchBar from '../components/SearchBar';
// import { QUERY_ALL_RESTAURANTS } from '../utils/queries';
import CategoryMenu from '../components/CategoryMenu';
import RestaurantList from '../components/RestaurantList';

const Home = () => {
  // const { loading, data } = useQuery(QUERY_ALL_RESTAURANTS);
  // const restaurants = data?.restaurants || [];

  // const renderRestaurantList = () => {
  //   if (loading) {
  //     return <h2>Loading...</h2>
  //   } else {
  //     return restaurants.map(item => <div>${item.image}</div>);
  //   }
  // } 

  const renderUsername = () => {
    if (!Auth.loggedIn()) return null;
    return Auth.getProfile().data.username;
  }

  return (
    <main>
      <div className="flex-col justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          {renderUsername()}
        </div>

        <SearchBar />
        <CategoryMenu />
        <RestaurantList />
      </div>
    </main>
  );
};

export default Home;
