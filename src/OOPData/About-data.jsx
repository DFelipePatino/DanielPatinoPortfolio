/* =======================
   About Section Data
======================= */
export const CXABOUT = {
    image: "/images/about-pic.png",
    experience: {
        icon: "/images/experience.png",
        title: "Experience",
        description: "10+ year\nCustomer Success",
    },
    description: "I am a customer success professional with 10+ years of experience in Customer Success (CS) and Customer Experience (CX), helping businesses retain clients, protect revenue, and build lasting partnerships. I've worked blending my account management strengths with hands-on experience in tech support, customer service, and sales. This diverse background lets me adapt quickly to new business models and look at the client journey from every angle. I listen to what a user actually needs, translate that into clear technical results, and bring internal teams together to keep clients happy for the long run.",
    arrowLink: "./#projects",
    arrowIcon: "/images/arrow.png",
};

export const DEVABOUT = {
    image: "/images/about-pic.png",
    experience: {
        icon: "/images/experience.png",
        title: "Experience",
        description: "4+ year\nFull Stack Development",
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