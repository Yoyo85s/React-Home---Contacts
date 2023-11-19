import React from 'react'

const CallUs = () => {
  return (
   <section className="call-us">
    
  <div className="box-call">
    <i className="fa-solid fa-location-dot" />
    <div >
      <h4>Visit us</h4> <br /> 
      <p>Sveavägen 31 <br /> 111 34 STOCKHOLM</p>
    </div>
  </div>
  <div className="box-call">
    <i className="fa-solid fa-phone-volume" />
    <div>
      <h4>call us</h4> <br />
      <p>+46 (8) 121 470 50<br />
        +46 (8) 121 470 51</p>
    </div>
  </div>
  <div className="box-call">
    <i className="fa-solid fa-envelope" />
    <div>
      <h4>Email us</h4>  <br />
      <p>info@crito.com
        support@crito.com</p>
    </div>
  </div>
  
</section>

  )
}

export default CallUs