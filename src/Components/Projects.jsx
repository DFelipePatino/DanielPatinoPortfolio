import { useState } from "react";
import { PROJECTS, PROJECTS_SECTION, ProjectCard, ArrowLink } from "../OOPData/Projects-data";
import PropTypes from "prop-types";



const Projects = ({ menuOpen3, isClosing3, toggleMenu3, dogsWakeUp }) => {
    const [showDescriptions, setShowDescriptions] = useState({});
    const [closingDescriptions, setClosingDescriptions] = useState({});

    const toggleDescription = (projectId) => {
        const isOpen = showDescriptions[projectId];
        if (isOpen) {
            setClosingDescriptions(prev => ({ ...prev, [projectId]: true }));
            setTimeout(() => {
                setShowDescriptions(prev => {
                    const newState = { ...prev };
                    delete newState[projectId];
                    return newState;
                });
                setClosingDescriptions(prev => {
                    const newState = { ...prev };
                    delete newState[projectId];
                    return newState;
                });
            }, 1000);
        } else {
            setShowDescriptions(prev => ({ ...prev, [projectId]: true }));
        }
    };

    function handleClick() {
        toggleMenu3();
        dogsWakeUp();
    }

    return (
        <section id="projects">
            <p className="section__text__p1">Browse My Recent</p>
            <h1 className="title">Projects</h1>

            <div className="dropdown2">
                <button className="btn btn-color-2" onClick={() => {
                    handleClick();
                }}>
                    {menuOpen3 ? "Hide Projects" : "View Projects"}
                </button>

                <div className={`dropdown2-menu ${menuOpen3 ? "open" : ""} ${isClosing3 ? "closing" : ""}`}>
                    {menuOpen3 && (
                        <div className="dropdown2-content">
                            <div className="experience-details-container">
                                <div className="about-containers">
                                    {PROJECTS.map((project) => (
                                        <ProjectCard
                                            key={project.id}
                                            project={project}
                                            showDescription={showDescriptions[project.id]}
                                            closingDescription={closingDescriptions[project.id]}
                                            onToggleDescription={() => toggleDescription(project.id)}
                                            dogsWakeUp={dogsWakeUp}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <ArrowLink href={PROJECTS_SECTION.arrowLink} icon={PROJECTS_SECTION.arrowIcon} alt="Arrow icon" className="icon arrow" />
        </section>
    );
};

export default Projects;

Projects.propTypes = {
    menuOpen3: PropTypes.bool,
    isClosing3: PropTypes.bool.isRequired,
    toggleMenu3: PropTypes.func.isRequired,
    dogsWakeUp: PropTypes.func.isRequired,
};
