import React from 'react';
import '../Assests/style.css';
import { NavLink, Link } from 'react-router-dom';
import Logo1 from '../Assests/Images/Logo1.svg';
import Button from './Geniral/Button';
import './Geniral/Button.css';



const Header = () => {
  return (
    <header>
        <div className="container">
            <Link to="/"><img src={Logo1} alt="crito logotype"/></Link>
            <button className="menu-bars"><i className="fa-solid fa-bars-staggered"></i></button>
            <div className="menu">
                <div className="top-menu">
                    <div className="contact-information">
                        <div className="content-box">
                            <i className="fa-solid fa-phone"></i>
                            +46 (8) 121 470 50
                        </div>
                        <div className="content-box">
                            <i className="fa-regular fa-envelope"></i>
                            info@crito.com
                        </div>
                        <div className="content-box-last" >
                            <i className="fa-solid fa-location-dot"></i>
                            Sveavägen 31, 111 34 STOCKHOLM
                        </div>
                    </div>
                    <div className="social-media">
                        <a href="https://facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                        <a href="https://twitter.com/" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                        <a href="https://instgram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                        <a href="#"></a>
                    </div>
                </div>
                <div className="main-menu">
                    <nav>
                        <NavLink  to="/">Home</NavLink>
                        <NavLink  to="/service">Service</NavLink>
                        <NavLink  to="/news">News</NavLink>
                        <NavLink  to="/contacts">Contacts</NavLink>
                       
                    </nav>
                    <Button type="yellow" text="Login" url="/"/>
                   
                </div>
            </div>
        </div>
        
    </header>
  )
}

export default Header