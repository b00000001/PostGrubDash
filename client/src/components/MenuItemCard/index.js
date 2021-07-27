import React from 'react'

const MenuItemCard = ({image, name, description, price}) => {
    return (
        <div className="m-10 shadow-lg">
            <div className="flex">
                <div className="flex-1">
                    <img src={`/images/${image}`} alt="" />
                </div>
                <div className='flex-1'>
                    <div className="pl-3 pt-3">
                      <h2 className="font-bold">{name}</h2>
                    <p>{description}</p>  
                    </div>
                </div>
            </div>

            <div className="flex justify-around items-center p-2">
                <button className="btn btn-lg btn-info m-2">Add to cart</button>
                <span>${price}</span>
            </div>

        </div>
    )
}

export default MenuItemCard;