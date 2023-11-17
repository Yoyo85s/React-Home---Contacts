import React, { useState } from 'react';
import RightLine from '../Assests/Images/right line.svg';

const NewsSubscribe = () => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

      const handleInputChange = (e) => {
      const inputValue = e.target.value;
      setEmail(inputValue);


      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue);
      setIsValidEmail(isValid);
    };

  const handleSubmit = (e) => {


   
     e.preventDefault();

        if (isValidEmail) {
      
          console.log('Email submitted:', email);

      
        setEmail('');
         } 
         else 
         {
      alert('Invalid email address');
    }
  };

  return (
    <section className="newsletter">
      <img className="background-wavy-lines" src={RightLine} alt="Right Line" />
      <div className="container">
        <h2>Get News Updates By Signup</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="username@domain.com"
            value={email}
            onChange={handleInputChange}
            className={!isValidEmail ? 'invalid' : ''}
          />
          
          <button type="submit" className="btn-yellow">Subscribe<i className="fa-solid fa-arrow-up-right" /></button>
          {!isValidEmail && <p className="error">Invalid email address</p>}
        </form>
      </div>
    </section>
  );
};

export default NewsSubscribe;

