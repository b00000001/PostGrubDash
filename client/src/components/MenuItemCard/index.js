import React from 'react';
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

const MenuItemCard = (item) => {
    const { image, name, _id, price, description } = item;
    const [state, dispatch] = useStoreContext();
    const { cart } = state

    const addToCart = () => {
        const itemInCart = cart.find((cartItem) => cartItem._id === _id)
        if (itemInCart) {
            dispatch({
                type: UPDATE_CART_QUANTITY,
                _id: _id,
                purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
            });
            idbPromise('cart', 'put', {
                ...itemInCart,
                purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
            });
        } else {
            dispatch({
                type: ADD_TO_CART,
                product: { ...item, purchaseQuantity: 1 }
            });
            idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
        }
    }

    return (
        <div className="m-10 shadow-lg container">
            <div className="flex">
                <div className="flex-1">
                    <img className="lg:max-w-md sm:max-w-xs m-3" src={`/images/${image}`} alt="" />
                </div>
                <div className='flex-1'>
                    <div className="pl-3 pt-3">
                      <h2 className="font-bold text-3xl mb-5">{name}</h2>
                    <p className="mb-3 text-xl mr-8">{description}</p>  
                    <span className="inline text-2xl mb-5">${price}</span>
                    <br/>
                      <button className="btn btn-lg btn-info m-2 inline mt-5" onClick={addToCart}>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuItemCard;