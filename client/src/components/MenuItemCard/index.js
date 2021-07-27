import React from 'react'

const MenuItemCard = ({image, name, description, price}) => {
    return (
        <div className="m-10 shadow-lg container">
            <div className="flex">
                <div className="flex-1">
                    <img className="max-w-md" src={`/images/${image}`} alt="" />
                </div>
                <div className='flex-1'>
                    <div className="pl-3 pt-3">
                      <h2 className="font-bold text-3xl mb-5">{name}</h2>
                    <p className="mb-3 text-xl mr-8">{description}</p>  
                    <span className="inline text-2xl mb-5">${price}</span>
                    <br/>
                      <button className="btn btn-lg btn-info m-2 inline mt-5">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuItemCard;