import React from 'react'

const MenuItemCard = ({image, name, description, price}) => {
    return (
        <div className="m-3 shadow-lg">
            <div className="flex">
                <div className='p-3'>
                    <h2 className="font-bold">{name}</h2>
                    <p>{description}</p>
                </div>
                <div>
                    <img src={`/images/${image}`} alt="" />
                </div>
            </div>

            <div className="flex justify-around items-center p-2">
                <span>${price}</span>

                <button className="bg-blue-400 text-white border border-indigo-600 p-2">Add to cart</button>
            </div>

        </div>
    )
}

export default MenuItemCard;