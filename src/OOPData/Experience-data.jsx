/* =======================
   Experience Section Data
======================= */
export const FRONTEND_SKILLS = [
    { name: "Redux", level: "Experienced" },
    { name: "WordPress", level: "Experienced" },
    { name: "HTML", level: "Intermediate" },
    { name: "CSS", level: "Intermediate" },
    { name: "React", level: "Experienced" },
    { name: "Material UI", level: "Experienced" },
];

export const BACKEND_SKILLS = [
    { name: "PostgreSQL", level: "Intermediate" },
    { name: "Sequelize", level: "Experienced" },
    { name: "Node JS", level: "Intermediate" },
    { name: "PIP", level: "Intermediate" },
    { name: "Express JS", level: "Intermediate" },
    { name: "Git", level: "Intermediate" },
    { name: "AWS", level: "Essentials" },
];

export const PROGRAMMING_LANGUAGES = [
    { name: "JavaScript", level: "Intermediate" },
    { name: "Python", level: "Intermediate" },
    { name: "PHP", level: "Intermediate" },
];

export const EXPERIENCE = {
    checkmarkIcon: "/images/checkmark.png",
    arrowLink: "/#contact",
    arrowIcon: "/images/arrow.png",
};

/* =======================
   Additional Components
======================= */
export const SkillItem = ({ name, level }) => (
    <article>
        <img src="/images/checkmark.png" alt="Experience icon" className="icon" />
        <div>
            <h3>{name}</h3>
            <p>{level}</p>
        </div>
    </article>
);


export const ArrowLink = ({ href, icon, alt, className }) => (
    <a href={href}>
        <img src={icon} alt={alt} className={className} />
    </a>
);