import React from 'react'
import BlockImage from './BlockImage'
import testimonialImage from '../Images/testimonial/1.png'
import spoon from '../Images/hero/spoon.png'

const Testimonial = () => {
  return (
    <div className='testimonial-container'>
        <BlockImage image={testimonialImage}/>
        <div className="testimonial-main-text-container">
          <div className="main-text-header">
            <h5 className="text-white">Best Chef's Word</h5>
            <div className="spoon-img-wrapper mt-8">
              <img src={spoon} alt="" className="spoon-img" />
            </div>
            <h2 className="mt-8 primary-text">What We Believe In</h2>
            <p className='text-grey mt-8'>
              <span className='Hangouts text-grey'>"</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, asperiores dolorem. Error dolore magni quaerat inventore molestias, magnam quisquam quo quasi ex nihil ratione odio maiores praesentium et, officiis eveniet?
            </p>

            <div className="founder-detail-container mt-32">
                <h4 className='primary-text'>Kevin Luo</h4>
                <span className="text-grey">Chef & Founder</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Testimonial