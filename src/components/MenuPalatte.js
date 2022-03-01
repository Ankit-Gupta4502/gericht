import React from 'react'
import spoon from '../Images/hero/spoon.png'
const MenuPalatte = () => {

    return (
        <div className='menu-palatte-container'>
            <div className="container">                                             
                <div className="menu-palatte-header">
                    <h5 className="primary-text">
                        Menu that Fits Your pallate
                    </h5>
                    <div className="spoon-img-wrapper mt-8">
                        <img src={spoon} alt="" className="spoon-img" />
                    </div>
                    <h2 className="primary-text">Today's Special</h2>
                    <p className='mt-32 '>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore officia, minima dignissimos ex autem optio? Minima nemo deserunt quisquam cupiditate, illum officia cum recusandae distinctio numquam soluta ex facilis!
                    </p>
                </div>
                <div className="menu-list-container">
                    <div className="menu">
                        <div className="m-main-text-container">
                            <h4 className="primary-text"></h4>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MenuPalatte