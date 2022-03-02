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
                            <div className="course-title">
                                <h4 className="primary-text">Biscuit & Sausage Gravy</h4>
                                <span className="text-grey mt-16">Sunny-Side Up Egg</span>
                            </div>
                            <h4 className="text-white course-price">$16</h4>
                        </div>
                        <div className="m-main-text-container">
                            <div className="course-title">
                                <h4 className="primary-text">Shrimp & Grits</h4>
                                <span className="text-grey mt-16">Jalapeno Gouda Grits | Asparagus</span>
                            </div>
                            <h4 className="text-white course-price">$25</h4>
                        </div>
                        <div className="m-main-text-container">
                            <div className="course-title">
                                <h4 className="primary-text">Breakfast Plate</h4>
                                <span className="text-grey mt-16">Ricotta| Hazulnut | chili</span>
                            </div>
                            <h4 className="text-white course-price">$25</h4>
                        </div>
                        <div className="m-main-text-container">
                            <div className="course-title">
                                <h4 className="primary-text">Vegetable Frittata</h4>
                                <span className="text-grey mt-16">Cavillon | sour cream</span>
                            </div>
                            <h4 className="text-white course-price">$25</h4>
                        </div>
                    </div>
                </div>
                <div className="btn-container">
                    <button className="primary-btn">Book a Table</button>
                </div>
            </div>
        </div>
    )
}

export default MenuPalatte