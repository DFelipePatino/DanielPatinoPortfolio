/* =======================
   Contact Section Data
======================= */
export const CONTACT_INFO = [
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


export const ArrowLink = ({ href, icon, alt, className }) => (
    <a href={href}>
        <img src={icon} alt={alt} className={className} />
    </a>
);