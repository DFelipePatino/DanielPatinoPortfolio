/* =======================
   Profile Variations (Dev vs CX)
======================= */

export const DEV_DATA = {
    PROFILE: {
        name: "Daniel Patino",
        title: "Full Stack Developer",
        image: "/images/profile-pic.png", // Or a dev-themed photo if separate
    },
    ACTIONS: [
        {
            label: "Download CV",
            href: "/images/DanielPatinoCVENGFullstackDeveloper.pdf",
            className: "btn btn-color-2",
            download: true,
            external: true,
        },
        {
            label: "Contact Info",
            href: "#contact",
            className: "btn btn-color-1",
        },
    ],
    SOCIALS: [
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
    ]
};

export const CX_DATA = {
    PROFILE: {
        name: "Daniel Patino",
        title: "Customer Success Specialist",
        image: "/images/profile-pic.png", // Or a professional CX headshot
    },
    ACTIONS: [
        {
            label: "Download CV",
            href: "/images/DanielPatinoCVENGFullstackDeveloper.pdf",
            className: "btn btn-color-2",
            download: true,
            external: true,
        },
        {
            label: "Contact Info",
            href: "#contact",
            className: "btn btn-color-1",
        },
    ],
    SOCIALS: [
        {
            alt: "My Upwork profile",
            href: "https://www.upwork.com/freelancers/~011070214ad8e4c8be",
            icon: "/images/UpWork.png",
        },

    ]
};

/* =======================
   Reusable Components
======================= */
export const ButtonLink = ({
    href,
    label,
    className,
    external,
    download,
}) => (
    <a
        href={href}
        className={className}
        download={download}
        target={external && !download ? "_blank" : undefined}
        rel={external && !download ? "noopener noreferrer" : undefined}
    >
        {label}
    </a>
);

export const SocialIcon = ({ href, icon, alt }) => (
    <a href={href} target="_blank" rel="noopener noreferrer">
        <img src={icon} alt={alt} className="icon" />
    </a>
);