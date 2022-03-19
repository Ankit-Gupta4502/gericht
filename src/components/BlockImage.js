import React from 'react'

const BlockImage = ({image}) => {
  return (
    <div className="hero-img-wrapper">
          <img src={image} alt="" className="hero-img" />
    </div>
  )
}

export default BlockImage