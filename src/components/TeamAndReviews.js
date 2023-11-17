import React from 'react'
import '../Assests/style.css'
import Sectionhead from '../GroupComponents/Sectionhead'
import Button from './Geniral/Button'
import Staff from '../GroupComponents/Staff'
import KristinePalmer from '../Assests/Images/Image-Kristine Palmer.png'
import MarkAubri from '../Assests/Images/Image-Mark Aubri.png'
import KimberlyHansen from '../Assests/Images/Image-Kimberly Hansen.png'
import JustinWilloman from '../Assests/Images/Image-Justin Willoman.png'
import Dot from '../Assests/Images/dot-1.svg'
import Cassandra from '../Assests/Images/Image-Cassandra.png'
import Amanda from '../Assests/Images/Image-Amanda.png'
import Jack from '../Assests/Images/Jack.png'
import ReviewBoxes from '../GroupComponents/ReviewBoxes'






const TeamAndReviews = () => {
  return (
   <section className="team-and-reviews">
  <div className="container">
    <div className="team">
      <div className="main-title">
        <div className="title">
            <Sectionhead text="Meet Our Team" describe="Experience Team Members" />
          
        </div>
        <div className="btn">
          <Button type="" text="Browse Team" url="/contacts" />
        </div>  
      </div>
      <div className="staff">
        <Staff src={KristinePalmer} name="Kristine Palmer" describe="Chef Operation Officer" />
        <Staff src={MarkAubri} name="Mark Aubri" describe="Senior Consultant" />
        <Staff src={KimberlyHansen} name="Kimberly Hansen" describe="Senior Consultant" />
        <Staff src={JustinWilloman} name="Justin Willoman" describe="Senior Tech Consultant" />
        
      </div>
      <div className="dot"><img src={Dot} alt="dot" /></div>
    </div>
    <div className="reviews-and-stars">
      <div className="container">
        <div className="header">

            <Sectionhead text="Testimonial" describe="What Our Client Says" />
          
        </div>

        <div className="reviews">
        <ReviewBoxes src={Cassandra} name="Cassandra Warren" describe="Business Manager, Dorfus"/>
        <ReviewBoxes src={Amanda} name="Amanda Tulling" describe="Senior Developer, Square"/>
        <ReviewBoxes src={Jack} name="Jack McDogglas" describe="Key Account Manager, Gobona"/>
        </div>
         
          
         
          
        
        <div className="button">
          <a className="btn" href="#">All Reviews<i className="fa-solid fa-square-arrow-up-right" /></a>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default TeamAndReviews