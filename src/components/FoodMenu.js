import React from 'react'


const FoodMenu = () => {
  return (
    <div className='food-menu-container'>
        <div className="food-overlay"></div>
        <div className="food-menu-wrapper">
            <div className="food-menu-text-container">
                <h2 className='food-menu-title text-white'>Food menu</h2>
                <div className="food-menu-body">
                    <p className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore blanditiis qui temporibus. Dolore repudiandae aliquam ex sunt perspiciatis necessitatibus ipsam.</p>
                    <a href="#" className="primary-text mt-32 f-bold">View Menu</a>
                </div>
            </div>
            <div className="food-menu-text-container border-left">
                <h2 className='food-menu-title text-white'>Drinks menu</h2>
                <div className="food-menu-body">
                    <p className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore blanditiis qui temporibus. Dolore repudiandae aliquam ex sunt perspiciatis necessitatibus ipsam.</p>
                    <a href="#" className="primary-text mt-32 f-bold">View Menu</a>
                </div>
            </div>
            <div className="food-menu-text-container border-left ">
                <h2 className='food-menu-title text-white'>Desserts menu</h2>
                <div className="food-menu-body">
                    <p className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore blanditiis qui temporibus. Dolore repudiandae aliquam ex sunt perspiciatis necessitatibus ipsam.</p>
                    <a href="#" className="primary-text mt-32 f-bold">View Menu</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FoodMenu