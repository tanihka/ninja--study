import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import './navbar.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (

        <div className="navbar">
            <div className="navbar-links_logo">
                <a href="/"><img src={require('./logo.png')} alt="" /></a>
            </div>
            <div className="navbar-links_container">
                <p><a href="#home">Home</a></p>
                <p><a href="#contact">Contact </a> </p>
                <p className='getStarted'><a href="/">Get Started <i class="fa-solid fa-arrow-right-long"></i> </a></p>
                
               
            </div>
            <div className="navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#000" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#000" size={27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <div className="navbar-menu_container scale-up-center">

                        <div className=" navbar-links_container navbar-menu_container-links-sign">
                            <p><a href="#home">Home</a></p>
                            <p className='contactBtn'><a href="#contact">Contact</a></p>
                            <p className='getStarted'><a href="/">Get Started <i class="fa-solid fa-arrow-right-long"></i> </a></p>
                        </div>
                    </div>
                )}
            </div>
        </div>


    );
};

export default Navbar;