import React from 'react';
import '../Assests/style.css'
import Sectionhead from '../GroupComponents/Sectionhead';
import Button from './Geniral/Button';
import Services from '../GroupComponents/Services';
import Handshake from '../Assests/Images/Icon handshake.svg';
import Lamp from '../Assests/Images/Icon lamp.svg';
import Financial from '../Assests/Images/Icon financial.svg';
import Mangement from '../Assests/Images/Icon risk mangement.svg'




const Features = () => {
  return (
    <section className="features">
  <div className="container">

    <ad className="Ad">
    <Sectionhead text="Features" describe="Our Accounting is trusted by thousand of companies" />
      <Button type="yellow" text="Learn More" url="/contacts" />
    </ad>

    <div className="Services">
      <div className="advice">
        <img src={Handshake } alt="handshake" />
        <Services text="Business Advice" describe="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
       
      </div>
      <div className="startup">
        <img src={Lamp} alt="lamp" />
        <Services text="Startup Business" describe="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
      </div>
      <div className="financial">
        <img src={Financial} alt="financial" />
        <Services text="Financial Advice" describe="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
      </div>
      <div className="risk">
        <img src={Mangement} alt="R-mangement" />
        <Services text="Risk Management" describe="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
      </div>
    </div>
  </div>       
</section>

  )
}

export default Features