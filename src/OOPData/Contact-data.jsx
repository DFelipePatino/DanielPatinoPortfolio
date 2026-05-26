import React from "react";
import PropTypes from "prop-types";

/* ==========================================
   1. DEVELOPER CONTACTS (isDarkMode = false)
   ========================================== */
export const DEV_CONTACT_INFO = [
    {
        icon: "/images/email.png",
        alt: "Email icon",
        href: "mailto:daniel.patino.work@gmail.com",
        text: "daniel.patino.work@gmail.com",
        className: "icon contact-icon email-icon",
    },
    {
        icon: "/images/linkedin.png",
        alt: "LinkedIn icon",
        href: "https://www.linkedin.com/in/daniel-patino-207156208/",
        text: "LinkedIn",
        className: "icon contact-icon",
    },
];

/* ==========================================
   2. CUSTOMER SUCCESS CONTACTS (isDarkMode = true)
   ========================================== */
export const CX_CONTACT_INFO = [
    {
        icon: "/images/email.png",
        alt: "Email icon",
        href: "mailto:daniel.patino.work@gmail.com",
        text: "daniel.patino.work@gmail.com",
        className: "icon contact-icon email-icon",
    },
    {
        icon: "/images/UpWork.png", // Ensure you add your upwork asset icon here
        alt: "Upwork icon",
        href: "https://www.upwork.com/freelancers/~015304164b3e652d03", // Replace with your direct Upwork profile URL
        text: "Upwork",
        className: "icon contact-icon upwork-icon",
    },
];

export const CONTACT = {
    arrowUpLink: "/#top",
    arrowUpIcon: "/images/arrowup.png",
};

/* =======================
   Additional Components
======================= */
export const ContactInfoItem = ({ icon, alt, href, text, className }) => (
    <div className="contact-info-container">
        <img src={icon} alt={alt} className={className} />
        <p>
            <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
                {text}
            </a>
        </p>
    </div>
);

ContactInfoItem.propTypes = {
    icon: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export const ArrowLink = ({ href, icon, alt, className }) => (
    <a href={href}>
        <img src={icon} alt={alt} className={className} />
    </a>
);

ArrowLink.propTypes = {
    href: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
};