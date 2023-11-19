import React from 'react'
import Karta from '../Assests/Images/Map.jpg'
import '../index.css'


const ContactsAdress = () => {
  
  

  return (
    <section className="map">
      <div>
        
        <a href='https://www.google.se/maps/place/Sveav%C3%A4gen+31,+111+34+Stockholm/data=!4m2!3m1!1s0x465f9d6799554e87:0x6562d2c842903003?sa=X&ved=2ahUKEwje0ZK68M6CAxWXFBAIHbLbALIQ8gF6BAgPEAA' target="_blank" rel="noopener noreferrer">
          <img src={Karta} alt="Google Maps Location" />
        </a>
      </div>
    </section>
  );
};

export default ContactsAdress