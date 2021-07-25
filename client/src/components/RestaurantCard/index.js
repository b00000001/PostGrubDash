import React from 'react'

const RestaurantCard = () => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src='https://res.cloudinary.com/grubhub/image/upload/d_search:browse-images:default.jpg/w_267,h_132,f_auto,q_auto,dpr_auto,g_auto,c_fill/kjgvrh5fckhubhkunqa1' alt='' />
            <h2 className="font-bold text-xl mb-2 ml-2">Fuzzy's Taco Shop</h2>
            <h3 className="ml-3">Tacos</h3>
            <div className="flex justify-around m-3">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">35-45 mins</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">$5.99 delivery</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">5 stars</span>
            </div>
        </div>
    )
}

export default RestaurantCard;