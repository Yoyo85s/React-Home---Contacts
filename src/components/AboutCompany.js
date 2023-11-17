import React from 'react';
import '../Assests/style.css';
import Sectionhead from '../GroupComponents/Sectionhead';
import AboutCo from '../Assests/Images/Image-about-co.svg';
import Button from './Geniral/Button';
import {NavLink ,Link } from 'react-router-dom';

const AboutCompany = () => {
  return (

   <section className="about-co">
  <div className="container">
    <div className="photo">
      <i><img src={AboutCo}alt="smiling woman" /></i>
      <div className="box">
        <div className="person">
          <h4>Samantha Brown, </h4>
          <h5>Founder</h5>
        </div>
        <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
      </div>
    </div>
    <div className="company"> 
                    <Sectionhead text="About Company" describe="We Are Business Consulting & Credit Repair Experts" />
                    <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.</h6>
                    <h6> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</h6>
      <div className="knapp"> 
        <div className="btn">
        <Button type="" text="Learn More" url="/contacts"/>
        </div>
        <div className="intro-video">
          <a href="#"><i className="fa-regular fa-circle-play fa-2xl" /> Intro Video</a>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default AboutCompany