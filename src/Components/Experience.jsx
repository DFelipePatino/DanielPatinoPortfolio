import React from "react";
import { useTheme } from "../Context/ThemeContext";
import { DEV_SKILLS, CX_SKILLS, EXPERIENCE, SkillItem, ArrowLink } from "../OOPData/Experience-data";
import PropTypes from "prop-types";

const Experience = ({ menuOpen2, isClosing2, toggleMenu2 }) => {
    // Single source of truth for portfolio profile segmentation
    const { isDarkMode } = useTheme();

    // Select skill data block dynamically
    const skills = isDarkMode ? CX_SKILLS : DEV_SKILLS;

    return (
        <section id="experience">
            {/* <p className="section__text__p1">Explore My</p> */}
            <br />
            <h1 className="title">Experience & Certs</h1>

            <div className="dropdown2">
                <button className="btn2 btn-color-2" onClick={toggleMenu2}>
                    {menuOpen2 ? "Hide Experience" : "View Experience"}
                </button>
                <div className={`dropdown2-menu ${menuOpen2 ? "open" : ""} ${isClosing2 ? "closing" : ""}`}>
                    {menuOpen2 && (
                        <div className="dropdown2-content">
                            <div className="experience-details-container">
                                <div className="about-containers">

                                    {/* Card 1: Full Stack Development */}
                                    {!isDarkMode && (
                                        <div className="details-container">
                                            <h2 className="experience-sub-title">
                                                {!isDarkMode && "Full Stack Development"}
                                            </h2>
                                            <div className="article-container">
                                                {!isDarkMode && skills.fullStack.map((skill, index) => (
                                                    /* Fixed: Passed the link prop */
                                                    <SkillItem key={index} name={skill.name} level={skill.level} link={skill.link} />
                                                ))}
                                            </div>
                                        </div>
                                    )}


                                    {/* Card 2: Frontend or CRM Platforms */}
                                    <div className="details-container">
                                        <h2 className="experience-sub-title">
                                            {isDarkMode ? "CRM & Marketing Platforms" : "Frontend Development"}
                                        </h2>
                                        <div className="article-container">
                                            {(isDarkMode ? skills.platforms : skills.frontend).map((skill, index) => (
                                                /* Fixed: Passed the link prop */
                                                <SkillItem key={index} name={skill.name} level={skill.level} link={skill.link} />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Card 3: Backend or Automation Engine Logic */}
                                    <div className="details-container">
                                        <h2 className="experience-sub-title">
                                            {isDarkMode ? "Automation & Operations" : "Backend Development"}
                                        </h2>
                                        <div className="article-container">
                                            {(isDarkMode ? skills.automation : skills.backend).map((skill, index) => (
                                                /* Fixed: Passed the link prop */
                                                <SkillItem key={index} name={skill.name} level={skill.level} link={skill.link} />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Card 4: Core Coding Languages or Multilingual Skills */}
                                    <div className="details-container">
                                        <h2 className="experience-sub-title">
                                            {isDarkMode ? "Languages & Communication" : "Programming Languages"}
                                        </h2>
                                        <div className="article-container">
                                            {skills.languages.map((skill, index) => (
                                                /* Fixed: Passed the link prop */
                                                <SkillItem key={index} name={skill.name} level={skill.level} link={skill.link} />
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

Experience.propTypes = {
    menuOpen2: PropTypes.bool.isRequired,
    isClosing2: PropTypes.bool.isRequired,
    toggleMenu2: PropTypes.func.isRequired,
};