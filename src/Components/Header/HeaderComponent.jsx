import React from "react";
import './Header.css'

function HeaderComponent () {
    return (
        <>
            <nav className="nav-one">
                <div className="left">
                    <i className="fa-regular fa-envelope"/>
                    <span>info@tailwaggers.com</span>
                    <i className="fa-solid fa-phone"/>
                    <span>+1 (555) 789-PAWS</span>
                </div>
                <div className="right">
                    <div className="search-box">
                        <input type="text" name="search" id="search"/>
                        <label htmlFor="search"/>
                        <i className="fa-solid fa-magnifying-glass"/>
                    </div>
                    <div className="icons">
                        <i className="fa-brands fa-facebook-f"/>
                        <i className="fa-brands fa-instagram"/>
                        <i className="fa-brands fa-twitter"/>
                        <i className="fa-solid fa-cart-shopping"/>
                    </div>
                </div>
            </nav>
            <nav className="nav-two">
                <div className="logo">
                    <img src="./paw-logo.png" alt="brand-logo"/>
                </div>
                <div className="nav-links">
                    <ul>
                        <li>
                            <a href="../aboutus.html" target="_blank">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="../products.html" target="_blank">
                                Products
                            </a>
                        </li>
                        <li>
                            <a href="../blog.html" target="_blank">
                                Blog
                            </a>
                        </li>
                        <li>
                            <a href="../contact.html" target="_blank">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export {HeaderComponent}