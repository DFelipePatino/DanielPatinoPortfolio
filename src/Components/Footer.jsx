import { FOOTER_NAV_LINKS, FOOTER } from "../OOPData/Footer-data";

const Footer = ({ toggleMenu2b, toggleMenu3b }) => {
    const handleLinkClick = (link) => {
        if (link.onClick) {
            link.onClick();
        }
        if (link.label === "Projects" && toggleMenu3b) {
            toggleMenu3b();
        }
        if (link.label === "Experience" && toggleMenu2b) {
            toggleMenu2b();
        }

    };

    return (
        <footer>
            <nav>
                <div className="nav-links-container">
                    <ul className="nav-links">
                        {FOOTER_NAV_LINKS.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.href}
                                    onClick={() => handleLinkClick(link)}
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