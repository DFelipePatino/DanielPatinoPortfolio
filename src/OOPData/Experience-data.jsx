import React from "react";
import PropTypes from "prop-types";

/* ==========================================
   1. DEVELOPER STACK (isDarkMode = false)
   ========================================== */
export const DEV_SKILLS = {
    frontend: [
        { name: "React / React Native", level: "Experienced", link: "" },
        { name: "UI UX", level: "Experienced", link: "images/Certs/Complete Web and Mobile Designer UI UX.pdf" },
        { name: "WordPress", level: "Experienced", link: "images/Certs/Become a WordPress.pdf" },
        { name: "Responsive Design with HTML & CSS", level: "Intermediate", link: "images/Certs/Responsive CSS HTML.pdf" },
        { name: "Material UI / Tailwind", level: "Experienced", link: "" },
    ],
    backend: [
        { name: "Node JS / Express", level: "Intermediate", link: "" },
        { name: "PostgreSQL / SQLite", level: "Intermediate", link: "" },
        { name: "Sequelize", level: "Experienced", link: "" },
        { name: "Git / GitHub", level: "Intermediate", link: "" },
        { name: "AWS RDS", level: "Essentials", link: "" },
    ],
    languages: [
        { name: "JavaScript / ES6", level: "Intermediate", link: "images/Certs/JavaScript Pro Mastering.pdf" },
        { name: "Python", level: "Intermediate", link: "" },
        { name: "PHP", level: "Intermediate", link: "" },
    ]
};

/* ==========================================
   2. CUSTOMER SUCCESS STACK (isDarkMode = true)
   ========================================== */
export const CX_SKILLS = {
    platforms: [
        { name: "Marketing Automation", level: "Intermediate", link: "" },
        { name: "HubSpot CRM", level: "Intermediate", link: "" },
        { name: "Salesforce Essentials", level: "Intermediate", link: "" },
        { name: "Google Apps Script", level: "Intermediate", link: "" },
    ],
    automation: [
        { name: "Workflow Builders", level: "Intermediate", link: "" },
        { name: "API Integrations / Webhooks", level: "Intermediate", link: "" },
        { name: "Sub-Account Architecture", level: "Intermediate", link: "" },
        { name: "Data Synchronization", level: "Intermediate", link: "" },
    ],
    languages: [
        { name: "English (C1)", level: "Proficient", link: "https://cert.efset.org/n7ooQG" },
        { name: "Spanish", level: "Native", link: "" },
    ]
};

/* =======================
   Shared Section Data
======================= */
export const EXPERIENCE = {
    checkmarkIcon: "/images/checkmark.png",
    arrowLink: "/#contact",
    arrowIcon: "/images/arrow.png",
};

/* =======================
   Additional Components
======================= */
export const SkillItem = ({ name, level, link }) => {
    const hasLink = link && link.trim() !== "";

    return (
        <article>
            {hasLink ? <img src="/images/experience.png" alt="Experience icon" className="icon" /> : <img src="/images/checkmark.png" alt="Experience icon" className="icon" />}


            {hasLink ? (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    /* onClick removed entirely to prevent the second open */
                    style={{
                        position: "relative",
                        zIndex: 9999,
                        pointerEvents: "auto",
                        display: "inline-block",
                        textDecoration: "underline",
                        color: "inherit",
                        cursor: "pointer"
                    }}
                >
                    <h3>{name}</h3>
                    <p>{level}</p>
                </a>
            ) : (
                <div className="skill-text-block">
                    <h3>{name}</h3>
                    <p>{level}</p>
                </div>
            )}
        </article>
    );
};

SkillItem.propTypes = {
    name: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    link: PropTypes.string, // Fixed: Added missing validation rules
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