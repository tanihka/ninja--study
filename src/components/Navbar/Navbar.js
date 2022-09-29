import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import './navbar.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (

        <div className="navbar">
            <div className="nav-container">
<<<<<<< HEAD
                <div className="navbar-links_logo">
                    <a href="/"><img src={require('./ninjastudy (1).png')} alt="" /></a>
                </div>
                <div className="navbar-links_container">
                    <p><a href="#faq">Faq</a></p>
                    <p><a href="#features">Features</a></p>
                    <p><a href="#contact">Contact </a> </p>
                    <p className='getStarted'><a href="/">Get Started  </a></p>
=======
            <div className="navbar-links_logo">
                <a href="/"><img src={require('./ninjastudy (1).png')} alt="" /></a>
            </div>
            <div className="navbar-links_container">
                <p><a href="#faq">Faq</a></p>
                     <p><a href="#features">Features</a></p>
                <p><a href="#contact">Contact </a> </p>
                <p className='getStarted'><a href="/">Get Started  </a></p>
>>>>>>> 499db9dd6c34528b07844a89450aee17a8e2bcf7


                </div>
                <div className="navbar-menu">
                    {toggleMenu
                        ? <RiCloseLine color="#000" size={27} onClick={() => setToggleMenu(false)} />
                        : <RiMenu3Line color="#000" size={27} onClick={() => setToggleMenu(true)} />}
                    {toggleMenu && (
                        <div className="navbar-menu_container scale-up-center">

<<<<<<< HEAD
                            <div className=" navbar-links_container navbar-menu_container-links-sign">
                                <p><a href="#faq">Faq</a></p>
                                <p><a href="#features">Features</a></p>
                                <p className='contactBtn'><a href="#contact">Contact</a></p>
                                <p className='getStarted'><a href="/">Get Started <i class="fa-solid fa-arrow-right-long"></i> </a></p>
                            </div>
=======
                        <div className=" navbar-links_container navbar-menu_container-links-sign">
                            <p><a href="#faq">Faq</a></p>
                    <p><a href="#features">Features</a></p>
                            <p className='contactBtn'><a href="#contact">Contact</a></p>
                            <p className='getStarted'><a href="/">Get Started <i class="fa-solid fa-arrow-right-long"></i> </a></p>
>>>>>>> 499db9dd6c34528b07844a89450aee17a8e2bcf7
                        </div>
                    )}
                </div>
            </div>
        </div>


    );
};

export default Navbar;
