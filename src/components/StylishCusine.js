import React from 'react'
import spoon from '../Images/hero/spoon.png'
const StylishCusine = () => {
  return (
    <div className='stylish-cusinie-container'>
        <div className="container">
            <div className="cusine-header">
                <h5 className="text-white">Stylish Cuisine</h5>
                <div className="spoon-img-wrapper">
              <img src={spoon} alt="" className="spoon-img" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default StylishCusine