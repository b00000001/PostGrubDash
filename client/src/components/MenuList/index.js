import React, { useEffect } from 'react';
import MenuItemCard from '../MenuItemCard';
import { useStoreContext } from '../../utils/GlobalState';
// import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { QUERY_ALL_RESTAURANTS } from '../../utils/queries';
// import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';

function MenuList() {
      // const [state, dispatch] = useStoreContext();
      // const { currentCategory } = state;
      // const { loading, data } = useQuery(QUERY_PRODUCTS);
      const { id } = useParams();
      const { loading, data } = useQuery(QUERY_ALL_RESTAURANTS);
      const restaurants = data?.restaurants || [];
      const currRestaurant = restaurants.find(restaurant => restaurant._id === id);
      const currMenuList = currRestaurant.products;

      // useEffect(() => {
      //   if (data) {
      //     dispatch({
      //       type: UPDATE_PRODUCTS,
      //       products: data.products,
      //     });
      //     data.products.forEach((restaurant) => {
      //       idbPromise('products', 'put', restaurant);
      //     });
      //   } else if (!loading) {
      //     idbPromise('products', 'get').then((products) => {
      //       dispatch({
      //         type: UPDATE_PRODUCTS,
      //         products: products,
      //       });
      //     });
      //   }
      // }, [data, loading, dispatch]);

      // function filterProducts() {
      //   if (!currentCategory) {
      //     return state.products;
      //   }

      //   return state.products.filter(
      //     (restaurant) => restaurant.category._id === currentCategory
      //   );
      // }

    return (
        <div className="my-2">
            <h2>Our Menu Items: </h2>
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
