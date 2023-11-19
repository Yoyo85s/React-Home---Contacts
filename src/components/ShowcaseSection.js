import React from 'react'
import '../Assests/style.css'
import ElementLeft from '../Assests/Images/Element-left.svg'
import Showcase from '../Assests/Images/showcase image.svg'



const ShowcaseSection = () => {
  return (
    <section className="showcase">
            <div className="container">
                <img className="background-lines" src={ElementLeft} alt=""/>
                <div className="contact">
                  
                <h1>We Provide The Best Business Solutions</h1>
                <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                
                
                <a className="btn-yellow" href="konsolting.html">Get Consulting<i class="fa-solid fa-square-arrow-up-right"></i></a>
                <a className="btn-transparent" href="services.html">Learn More<i class="fa-solid fa-square-arrow-up-right"></i></a>
                
                </div>
                <img src={Showcase} alt="image of a smart man"/>

            </div>
        
        </section>
  )
}

export default ShowcaseSection