/* =======================
   About Section Data
======================= */
export const ABOUT = {
    image: "/images/about-pic.png",
    experience: {
        icon: "/images/experience.png",
        title: "Experience",
        description: "3+ year\nFull Stack Development",
    },
    description: "I'm a Full Stack Developer with expertise in JavaScript, React, Redux, WordPress, PHP, HTML, CSS, MUI, Django, Express, and AWS services. I specialize in creating modern, responsive UIs and leveraging AWS for scalable and reliable applications. With a strong commitment to continuous learning and agile methodologies like SCRUM, I excel in both individual and team environments, delivering high-quality solutions efficiently.\nLet's connect and explore how I can bring value to your next project!",
    arrowLink: "./#projects",
    arrowIcon: "/images/arrow.png",
};


export const ArrowLink = ({ href, icon, alt, className }) => (
    <a href={href}>
        <img src={icon} alt={alt} className={className} />
    </a>
);