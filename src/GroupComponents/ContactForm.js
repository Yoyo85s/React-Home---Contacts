import React, { useState, useEffect } from 'react';

const ContactForm = () => {
  const initialFormData = {
    name: '',
    email: '',
    message: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [isSuccessVisible, setIsSuccessVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (formData.name.trim() === '') {
      newErrors.name = 'Name is required';
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (formData.message.trim() === '') {
      newErrors.message = 'Message is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      try {
        const response = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          console.log('Your message has been sent successfully. Thank you for reaching out.');
          setSuccessMessage('Your message has been sent successfully. Thank you for reaching out.');
          setIsSuccessVisible(true);
          setFormData(initialFormData);
          setErrors({});

          
          setTimeout(() => {
            setIsSuccessVisible(false);
          }, 5000);
        } else {
          const errorData = await response.json();
          console.error('Error submitting form:', errorData);
        }
      } catch (error) {
        console.error('Error submitting form:', error.message);
      }
    }
  };

  
  useEffect(() => {
    return () => {
      setSuccessMessage('');
    };
  }, []);


  return (
    <form className="form_contact" onSubmit={handleSubmit}>
      <div className={`success-message ${isSuccessVisible ? 'visible' : ''}`}>
        {successMessage}
      </div>

      <input
        type="text"
        name="name"
        placeholder="Name*"
        value={formData.name}
        onChange={handleChange}
      />
      {errors.name && <p className="error warning-text">{errors.name}</p>}

      <input
        type="email"
        name="email"
        placeholder="username@domain.com*"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <p className="error warning-text">{errors.email}</p>}

      <textarea
        name="message"
        placeholder="Your Message*"
        rows={5}
        value={formData.message}
        onChange={handleChange}
      />
      {errors.message && <p className="error warning-text">{errors.message}</p>}

      <button type="submit" value="Send Message">
        <span className="text_button">
          <span> Send Message </span>
          <i className="fa-solid fa-square-arrow-up-right" />
        </span>
      </button>
    </form>
  );



};

export default ContactForm;
