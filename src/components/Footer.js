import React from 'react';
import '../Assests/style.css';
import Logo from '../Assests/Images/Logo.svg';
import Rectangle116 from '../Assests/Images/Rectangle 116.svg'


const Footer = () => {
  return (
    <>
     <section className="foot-info">
    <div className="wrapper">
        <div className="boxes">
            <div className="box-logo">
                <div className="logo"><a href="index.html"><img src={Logo} alt="crito logotype"/></a></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
            </div>
            <div className="box1">
                <h2>Company</h2>
                <div className="p">
                   
                    <a href="#"><p>About</p></a>
                    <a href="#"><p>Features</p></a>
                    <a href="#"><p>Works</p></a>
                    <a href="#"><p>Career</p></a>
                </div>

            </div>
            <div className="box2">
                <h2>Help</h2>
                <div className="p">
                    <a href="#"><p>Customer Support</p></a>
                    <a href="#"><p>Delivery Details</p></a>
                    <a href="#"><p>Terms & Conditions</p></a>
                    <a href="#"><p>Privacy Policy</p></a>
                </div>
            </div>
            <div className="box3">
                <h2>Resources</h2>
                <div className="p">
                    <a href="#"><p>Free eBooks</p></a>
                    <a href="#"><p>Development Tutorial</p></a>
                    <a href="#"><p>How to - Blog</p></a>
                    <a href="#"><p>Youtube Playlist</p></a>
                </div>
            </div>
            <div className="box4">
                <h2>Link</h2>
                <div className="p">
                    <a href="#"><p>Free eBooks</p></a>
                    <a href="#"><p>Development Tutorial</p></a>
                    <a href="#"><p>How to - Blog</p></a>
                    <a href="#"><p>Youtube Playlist</p></a>
                </div>
            </div>
            
        </div>
        <img className="wavy-lines" src={Rectangle116} alt="right-lines"/> 
    </div>

    {/* <!-- All rights-social media --> */}
    <div className="foot-wrapper">
        
        <div className="all-rights">
            <p>© 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
        </div>
        <div className="social-media">
            <a href="https://facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://twitter.com/" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="https://instgram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
            <a href="#"></a>
        </div>
    </div>
    
</section>
    </>
  )
}

export default Footer