import React, { useEffect } from 'react';
import RestaurantCard from '../RestaurantCard';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS, UPDATE_RESTAURANTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_RESTAURANTS_BY_CATEGORY, QUERY_ALL_RESTAURANTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';

function RestaurantList() {
  const [state, dispatch] = useStoreContext();
  const { currentCategory } = state;
  const { loading, data } = useQuery(QUERY_ALL_RESTAURANTS);
  const restaurants = data?.restaurants || [];

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_RESTAURANTS,
        restaurants: data.restaurants,
      });
      data.restaurants.forEach((restaurant) => {
        idbPromise('restaurants', 'put', restaurant);
      });
    } else if (!loading) {
      idbPromise('restaurants', 'get').then((restaurants) => {
        dispatch({
          type: UPDATE_RESTAURANTS,
          restaurants: restaurants,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterRestaurants() {
    if (!currentCategory) {
      return state.restaurants;
    }

    return state.restaurants.filter(
      (restaurant) => restaurant.category._id === currentCategory
    );
  }

  return (
    <div className="flex-col m-2">
      <h2 className="text-xl font-bold">Available Restaurants:</h2>
      {restaurants.length ? (
        <div className="flex justify-center p-4">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  grid-flow-row gap-10">
            {filterRestaurants().map((restaurant) => (
              <RestaurantCard
                key={restaurant._id}
                _id={restaurant._id}
                image={restaurant.image}
                name={restaurant.name}
                description={restaurant.description}
                price={restaurant.price}
              />
            ))}
          </div>
        </div>
      ) : (
        <h3>You haven't added any restaurants yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default RestaurantList;
