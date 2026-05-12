import ThemeToggle from './ThemeToggle'
import PropTypes from 'prop-types';
import { Grow } from '@mui/material';
import { useEffect } from 'react';

const Nav = ({ toggleMenu, menuOpen, toggleMenu2b, toggleMenu3b, showOtherElemtsCountDown, setShowNav, showNav }) => {

    const loadingShown = true;


    useEffect(() => {
        setTimeout(() => {
            setShowNav(true);
        }, showOtherElemtsCountDown + 800)
    }, [showOtherElemtsCountDown]);

    return (


        <>
            <Grow in={showNav}
                {...(loadingShown ? { timeout: 1500 } : {})}
            >
                <div>
                    <nav id="desktop-nav">
                        <div
                            className="logo"
                            onClick={() => window.location.href = 'https://daniel-patino.onrender.com/'}
                        >
                            Daniel Patino
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                            <ul className="nav-links">
                                <li>
                                    <a href="#about">About</a>
                                </li>
                                <li>
                                    <a href="#projects" onClick={toggleMenu3b}>Projects</a>
                                </li>
                                <li>
                                    <a href="#experience" onClick={toggleMenu2b}>Experience</a>
                                </li>

                                <li>
                                    <a href="#contact">Contact</a>
                                </li>
                                <li>
                                    <ThemeToggle />
                                </li>
                            </ul>

                        </div>
                    </nav>
                </div>
            </Grow>

            <Grow in={showNav}
                {...(loadingShown ? { timeout: 1000 } : {})}
            >
                <div>
                    <nav id="mobile-nav">
                        <div className="logo"
                            onClick={() => window.location.href = 'https://daniel-patino.onrender.com/'}
                        >Daniel Patino</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>

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
                                        <a href="#projects" onClick={() => { toggleMenu(); toggleMenu3b(); }}>
                                            Projects
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#experience" onClick={() => { toggleMenu(); toggleMenu2b(); }}>
                                            Experience
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#contact" onClick={toggleMenu}>
                                            Contact
                                        </a>
                                    </li>
                                    <li className="centered-item">
                                        <a href="#ThemeToggle" onClick={toggleMenu}>
                                            <ThemeToggle />
                                        </a>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </Grow>
        </>

    );
}

// ← Add propTypes here, outside the function
Nav.propTypes = {
    toggleMenu: PropTypes.func.isRequired,
    menuOpen: PropTypes.bool.isRequired,
    toggleMenu2b: PropTypes.func.isRequired,
    toggleMenu3b: PropTypes.func.isRequired,
    showOtherElemtsCountDown: PropTypes.number.isRequired,

};

export default Nav

