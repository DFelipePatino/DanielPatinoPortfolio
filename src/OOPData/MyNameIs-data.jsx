/* =======================
   Data (Objects)
======================= */
export const PROFILE = {
    name: "Daniel Patino",
    title: "Full Stack Developer",
    image: "/images/profile-pic.png",
};

export const ACTIONS = [
    {
        label: "Download CV",
        href: "https://docs.google.com/document/d/1kEUdwuEa97nrMbhBOPAnyp8hVZMjaSeKWTHqrY0yErw/edit?usp=drive_link",
        className: "btn btn-color-2",
        external: true,
    },
    {
        label: "Contact Info",
        href: "#contact",
        className: "btn btn-color-1",
    },
];

export const SOCIALS = [
    {
        alt: "My LinkedIn profile",
        href: "https://www.linkedin.com/in/daniel-patino-207156208/",
        icon: "/images/linkedin.png",
    },
    {
        alt: "My Github profile",
        href: "https://github.com/DFelipePatino",
        icon: "/images/github.png",
    },
];

/* =======================
   Small Components
======================= */
export const ButtonLink = ({ href, label, className, external }) => (
    <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
    >
        <button className={className}>{label}</button>
    </a>
);

export const SocialIcon = ({ href, icon, alt }) => (
    <a href={href} target="_blank" rel="noopener noreferrer">
        <img src={icon} alt={alt} className="icon" />
    </a>
);