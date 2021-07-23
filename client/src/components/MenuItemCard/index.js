import React from 'react'

const MenuItemCard = () => {
    return (
        <div className="m-3 shadow-lg">
            <div className="flex">
                <div className='p-3'>
                    <h2 className="font-bold">Shawarma Dream</h2>
                    <p>white basmati rice (1/2), mixed greens (1/2), chicken shawarma (1/2) steak shawarma (1/2), turkish salad, lebanese tabbouleh, classic hummus, spicy feta dip, baba ganoush, chickpea salad, pickled turnips, tzatziki, and harissa</p>
                </div>
                <div>
                    <img src="https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC80OWE0MGNlMy0yODAwLTQzZjktODNiYy1jMTU2YjQzYmY1NmUuanBlZw==" alt="" />
                </div>
            </div>

            <div className="flex justify-around items-center p-2">
                <span>$12.25</span>

                <button className="bg-indigo-400 text-white border border-indigo-600 p-2">Add to cart</button>
            </div>

        </div>
    )
}

export default MenuItemCard;