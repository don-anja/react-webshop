import React from "react";
import './Footer.css'

function FooterComponent () {
    return (
        <div className="footer-container">
            <div className="info-container">
                <ul className="links">
                    <h4>Web</h4>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="../products.html" target="_blank">
                            Products
                        </a>
                    </li>
                    <li>
                        <a href="#">Categories</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
                <ul className="links">
                    <h4>Tail Waggers</h4>
                    <li>Address: 42 Happy Paws Lane, Petville, PV 12345</li>
                    <li>Open Hours: Mon-Sat, 10 AM - 8 PM</li>
                    <li>Telephone: +1 (555) 789-PAWS</li>
                    <li>Email: info@tailwaggersshop.com</li>
                </ul>
                <ul className="links">
                    <h4>Support</h4>
                    <li>FAQ</li>
                    <li>Customer support</li>
                </ul>
                <ul className="links">
                    <h4>Legal</h4>
                    <li>Terms of Service</li>
                    <li>Terms of Use</li>
                    <li>Privacy Policy</li>
                </ul>
                <div className="icons">
                    <i className="fa-brands fa-facebook-f"/>
                    <i className="fa-brands fa-instagram"/>
                    <i className="fa-brands fa-twitter"/>
                </div>
                <div className="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.7124357766465!2d15.985511076290049!3d45.7569106710803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d5ecf2f33c79%3A0x371e6fc03984905a!2sPet%20centar!5e0!3m2!1sen!2shr!4v1705254447636!5m2!1sen!2shr"
                        width="100%"
                        height={150}
                        style={{border: 0}}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </div>
    )
}

export {FooterComponent}