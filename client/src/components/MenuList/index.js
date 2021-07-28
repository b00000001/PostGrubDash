import React, { useEffect } from 'react';
import MenuItemCard from '../MenuItemCard';
import { useStoreContext } from '../../utils/GlobalState';
// import { UPDATE_RESTAURANTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { QUERY_ALL_RESTAURANTS } from '../../utils/queries';
// import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';

function MenuList() {
    const [state, dispatch] = useStoreContext();
    const { id } = useParams();
    const { loading, data } = useQuery(QUERY_ALL_RESTAURANTS);
    //   const restaurants = data?.restaurants || [];
    const restaurants = state.restaurants || [];
    const currRestaurant = restaurants.find(restaurant => restaurant._id === id);
    const currMenuList = currRestaurant.products;

    return (
        <div className="my-2">
            <div className="flex justify-evenly p-5">
            <h2 className="text-4xl font-bold">{currRestaurant.name} Menu Items</h2>
            </div>
            {currMenuList.length ? (
                <div className="flex-row">
                    {currMenuList.map((restaurant) => (
                        <MenuItemCard
                            key={restaurant._id}
                            _id={restaurant._id}
                            image={restaurant.image}
                            name={restaurant.name}
                            description={restaurant.description}
                            price={restaurant.price}
                        />
                    ))}
                </div>
            ) : (
                <h3>You haven't added any menu items yet!</h3>
            )}
            {loading ? <img src={spinner} alt="loading" /> : null}
        </div>
    );
}

export default MenuList;
