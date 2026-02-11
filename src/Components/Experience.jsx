import { FRONTEND_SKILLS, BACKEND_SKILLS, PROGRAMMING_LANGUAGES, EXPERIENCE, SkillItem, ArrowLink } from "../OOPData/Experience-data";

const Experience = ({ menuOpen2, isClosing2, toggleMenu2 }) => {
    return (
        <section id="experience">
            <p className="section__text__p1">Explore My</p>
            <h1 className="title">Experience</h1>

            <div className="dropdown2">
                <button className="btn btn-color-2" onClick={toggleMenu2}>
                    {menuOpen2 ? "Hide Experience" : "View Experience"}
                </button>
                <div className={`dropdown2-menu ${menuOpen2 ? "open" : ""} ${isClosing2 ? "closing" : ""}`}>
                    {menuOpen2 && (
                        <div className="dropdown2-content">
                            <div className="experience-details-container">
                                <div className="about-containers">
                                    <div className="details-container">
                                        <h2 className="experience-sub-title">Frontend Development</h2>
                                        <div className="article-container">
                                            {FRONTEND_SKILLS.map((skill, index) => (
                                                <SkillItem key={index} name={skill.name} level={skill.level} />
                                            ))}
                                        </div>
                                    </div>

                                    <div className="details-container">
                                        <h2 className="experience-sub-title">Backend Development</h2>
                                        <div className="article-container">
                                            {BACKEND_SKILLS.map((skill, index) => (
                                                <SkillItem key={index} name={skill.name} level={skill.level} />
                                            ))}
                                        </div>
                                    </div>

                                    <div className="details-container">
                                        <h2 className="experience-sub-title">Programming Languages</h2>
                                        <div className="article-container">
                                            {PROGRAMMING_LANGUAGES.map((skill, index) => (
                                                <SkillItem key={index} name={skill.name} level={skill.level} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <ArrowLink href={EXPERIENCE.arrowLink} icon={EXPERIENCE.arrowIcon} alt="Arrow icon" className="icon arrow" />
        </section>
    );
};

export default Experience;