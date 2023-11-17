import React from 'react'
import Sectionhead from '../GroupComponents/Sectionhead'
import '../Assests/style.css'
import Box from '../GroupComponents/Box'
import Element1 from '../Assests/Images/Element-1.svg'
import Line2 from '../Assests/Images/Line 2.svg'


const Ourservices = () => {
  return (
   <section className="our-services">
  <div className="container">
    <div className="section-title">
      <Sectionhead text="Our Services" describe="We Provide The Best Service For Consulting" />
    </div>
    <div className="fields">


        <Box/>

        <div className="box2">
        <div className="container">
          <img src={Line2} alt />
          <h3>Startup Business</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
          <a className="btn-circle-black" href="/contacts"><i className="fa-solid fa-circle-arrow-right fa-2xl" /></a>
        </div>
        </div>

        <Box/>
        
        <Box/>
        
   
   
    </div>
    
    <div class="button">
      <a className="btn" href="/contacts">Browse Services<i className="fa-solid fa-square-arrow-up-right" /></a>
      
    </div>
    <div className="wavy-lines"><img src={Element1} alt /></div>
    
  </div>
</section>

  )
}

export default Ourservices