import React from 'react';
import { Link } from "react-router-dom";

const RestaurantCard = ({_id, name, description, image, price }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <Link to={`/restaurants/${_id}`}>
                <img className="w-full" src={`/images/${image}`} alt="" />
            </Link>
            <h2 className="font-bold text-xl mb-2 ml-2">{name}</h2>
            <h3 className="ml-3">{description}</h3>
            <div className="flex justify-around m-3">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">35-45 mins</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">${price} Fee</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">5 stars</span>
            </div>
        </div>
    )
}

export default RestaurantCard;