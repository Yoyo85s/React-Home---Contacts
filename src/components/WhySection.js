import React from 'react'
import WhyGroups from '../GroupComponents/WhyGroups'
import TwoWomen from '../Assests/Images/Image-two women.png'
import Sectionhead from '../GroupComponents/Sectionhead'
import StarGroup from '../Assests/Images/star-Group 1000004871.svg'
import LikeGroup from '../Assests/Images/like-Group 1000004862.svg'
import PenGroup from '../Assests/Images/pen-Group 1000004870.svg'
import HeadGroup from '../Assests/Images/head-Group 1000004869.svg'



const WhySection = () => {
  return (
<section className="why">
  <div className="wrapper">
    <div className="info-wrapper">
      <div className="title">

        <Sectionhead text="Why Choose Us" describe="Why We Are The Best Business Consulting Agency" />
        
      </div>
      <div className="Services-wrapper">
        
        <WhyGroups src={LikeGroup} text="Process Excellence" describe="Lorem, ipsum dolor sit amet consectetur." />
        <WhyGroups src={StarGroup} text="Strategic Planning" describe="Lorem, ipsum dolor sit amet consectetur." />
        <WhyGroups src={PenGroup} text="Experience Design" describe="Lorem, ipsum dolor sit amet consectetur." />
        <WhyGroups src={HeadGroup} text="Artificial Inteligence" describe="Lorem, ipsum dolor sit amet consectetur." />
        
      </div>
    </div>
    <div className="photo-wrapper">
      <div className="box" />
      <i><img src={TwoWomen} alt /></i>
    </div>
  </div>
</section>

  )
}

export default WhySection