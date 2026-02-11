import React from 'react'

const Nav = ({ toggleMenu, menuOpen, toggleMenu2b, toggleMenu3b }) => {
    return (
        <>
            <nav id="desktop-nav">
                <div className="logo">Daniel Patino</div>
                <div>
                    <ul className="nav-links">
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#experience" onClick={toggleMenu2b}>Experience</a>
                        </li>
                        <li>
                            <a href="#projects" onClick={toggleMenu3b}>Projects</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <nav id="mobile-nav">
                <div className="logo">Daniel Patino</div>
                <div className="hamburger-menu">
                    <div
                        className={`hamburger-icon  ${menuOpen ? "open" : ""}`}
                        onClick={toggleMenu}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={`menu-links ${menuOpen ? "open" : ""}`}>
                        <li>
                            <a href="#about" onClick={toggleMenu}>
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#experience" onClick={() => { toggleMenu(); toggleMenu2b(); }}>
                                Experience
                            </a>
                        </li>
                        <li>
                            <a href="#projects" onClick={() => { toggleMenu(); toggleMenu3b(); }}>
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#contact" onClick={toggleMenu}>
                                Contact
                            </a>
                        </li>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav