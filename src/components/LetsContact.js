import React from 'react';
import '../Assests/style.css';
import ElementLeft from '../Assests/Images/Element-left.svg';



const LetsContact = () => {
  return (
<section className="Connect-showcase">
  <img className="background-lines" src= {ElementLeft} alt />
  <div className="container">
    <div className="content">
      <p>Home</p>
      <p>contact</p>
      <h1>Let’s Connect</h1>
    </div>
  </div>
</section>

  )
}

export default LetsContact