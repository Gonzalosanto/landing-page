import React from "react";
import logo from '../../assets/Logo.png'
import './footer.css'

const Footer = () => {
    return(
        <div className="gpt3__footer">
            <div className="gpt3__footer-container">
                <h1>
                    Do you want to step in to the future before others?
                </h1>
                <button type="button">Request Early Access</button>
            </div>
            <div className="gpt3__footer-menu-container">
                <div className="gpt3__footer-menu-container-logo">
                    <img src={logo} alt="logo" />
                    <p></p>
                </div>
                <div className="gpt3__footer-menu-container-links">
                    <h3>Links</h3>
                    <p><a href="#">Social Media</a></p>
                    <p><a href="#">Counters</a></p>
                    <p><a href="#">Contact</a></p>
                    
                </div>
                <div className="gpt3__footer-menu-container-company">
                    <h3>Company</h3>
                    <p><a href="#">Terms & Conditions</a></p>
                    <p><a href="#">Privacy Policy</a></p>
                    <p><a href="#">Contact</a></p>
                </div>
                <div className="gpt3__footer-menu-container-contact">
                    <h3>Get in touch</h3>
                    <p>Crechterwoord K12 182 DK Alknjkcb</p>
                    <p>4254-9872</p>
                    <p>info@send.net</p>
                </div>
            </div>
            <p>
            ©2024 made by Gonzalosanto. All rights reserved.
            </p>
        </div>
    )
}

export default Footer;