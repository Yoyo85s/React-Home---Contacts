import React from 'react'
import '../Assests/style.css'
import Line2 from '../Assests/Images/Line 2.svg'

const Box = () => {
  return (
    <div className="box1">
    <div className="container">
      <img src={Line2} alt="#" />
      <h3>Business Advice</h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
      <a className="btn-circle-black" href="/contacts"><i className="fa-solid fa-circle-arrow-right fa-2xl" /></a>
    </div>
    </div>

  )
}

export default Box