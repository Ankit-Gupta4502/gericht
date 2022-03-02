import React, { useEffect, useState } from 'react'
import spoon from '../Images/hero/spoon.png'
import heroImg from "../Images/hero/1.jpg";
import BlockImage from "./BlockImage";

const Hero = () => {
  const [showUp, setShowUp] = useState(false)

  const heroTitle = 'Quality served timely'
  const titleArray = heroTitle.split('')


  useEffect(() => {
    window.setTimeout(() => {
      setShowUp(true)
    }, 1000)

  }, [])


  return (
    <div className='hero-container'>
      <div className="hero-wrapper">
        <div className="hero-text-section">
          <div className="sub-head-container">
            <h5 className="hero-sub-heading primary-text" >
              Chase the new Flavour
            </h5>
            <div className="spoon-img-wrapper">
              <img src={spoon} alt="" className="spoon-img" />
            </div>
            <div className='h-title' >
              {
                titleArray.map((title, index) => {
                  return (
                    <span key={index}  style={{ transitionDelay: `${index * 0.1}s`, opacity:showUp?'1':'0'}} className='primary-text' >{title}</span>
                  )
                })
              }
            </div>
            <p className='text-grey my-32'>
              Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus
            </p>
          </div>
          <button className="primary-btn">Explore Menu</button>
        </div>
        <BlockImage image={heroImg}/>
      </div>
    </div>
  )
}

export default Hero