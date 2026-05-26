import { useTheme } from "../Context/ThemeContext";
import { DEV_FOOTER_LINKS, CX_FOOTER_LINKS, FOOTER } from "../OOPData/Footer-data";
import PropTypes from "prop-types";

const Footer = ({ toggleMenu2b, toggleMenu3b }) => {
    // Read the single source of truth for current persona
    const { isDarkMode } = useTheme();

    // Select the current footer links dynamically
    const currentFooterLinks = isDarkMode ? CX_FOOTER_LINKS : DEV_FOOTER_LINKS;

    const handleLinkClick = (e, link) => {
        if (link.onClick) {
            e.preventDefault();
            link.onClick();
        }

        // Match string names across both toggle structures safely
        if ((link.label === "Projects" || link.label === "Highlighted Roles") && toggleMenu3b) {
            toggleMenu3b();
        }
        if ((link.label === "Experience" || link.label === "Competencies") && toggleMenu2b) {
            toggleMenu2b();
        }
    };

    return (
        <footer>
            <nav>
                <div className="nav-links-container">
                    <ul className="nav-links">
                        {currentFooterLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.href}
                                    target={link.external ? "_blank" : undefined}
                                    rel={link.external ? "noopener noreferrer" : undefined}
                                    onClick={(e) => handleLinkClick(e, link)}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            <p>{FOOTER.copyright}</p>
        </footer>
    );
};

export default Footer;

Footer.propTypes = {
    toggleMenu2b: PropTypes.func,
    toggleMenu3b: PropTypes.func,
};