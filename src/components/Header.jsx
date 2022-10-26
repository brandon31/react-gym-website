// import { Link } from 'react-router-dom';
import '../App.css';
import React, { useRef } from 'react';

const closeStyle = {
    display: 'none'
}

export default function Header () {

    const navLinks = useRef(null);
    const hamburger = useRef(null);

    const closeBar = useRef(null);

    function addClose() {
        closeBar.current.style.display = 'block';
    }

    function closeHamburger() {
        hamburger.current.style.display = 'none';
    }

    const toggleNavBar = () => {

        setTimeout(closeHamburger, 200);

        navLinks.current.style.clipPath = 'circle(1100px at 90% -50%)';

        setTimeout(addClose, 250);
    }
    const closeNav = () => {
        navLinks.current.style.clipPath = 'circle(100px at 90% -50%)';
        closeBar.current.style.display = 'none';
        hamburger.current.style.display = 'block';
    }

    return (
        <>
            <nav className="nav-bar">
                <p>BB <span>Fitness</span></p>

                <div className="hamburger" onClick={toggleNavBar} ref={hamburger} >
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <span class="material-symbols-outlined" ref={closeBar} onClick={closeNav} style={closeStyle} > close </span>

                <ul ref={navLinks}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </nav>
        </>
    );
}