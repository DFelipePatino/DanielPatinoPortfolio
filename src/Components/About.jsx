import React from "react";
import { useTheme } from '../Context/ThemeContext';
import { CXABOUT, DEVABOUT, ArrowLink } from "../OOPData/About-data";

const About = () => {
    const { isDarkMode } = useTheme();
    // Dynamically select the correct data object based on the navbar switch state
    const currentAbout = isDarkMode ? CXABOUT : DEVABOUT;

    return (
        <section id="about">
            <p className="section__text__p1">Get To Know More</p>
            <h1 className="title">About Me</h1>
            <div className="section-container">
                <div className="section__pic-container">
                    <img
                        src={currentAbout.image}
                        alt="Profile picture"
                        className="about-pic"
                    />
                </div>
                <div className="about-details-container">
                    <div className="about-containers">
                        <div className="details-container">
                            <img
                                src={currentAbout.experience.icon}
                                alt="Experience icon"
                                className="icon"
                            />
                            <h3>{currentAbout.experience.title}</h3>
                            <p>
                                {currentAbout.experience.description
                                    .split("\n")
                                    .map((line, index, array) => (
                                        <React.Fragment key={index}>
                                            {line}
                                            {index < array.length - 1 && <br />}
                                        </React.Fragment>
                                    ))}
                            </p>
                        </div>
                    </div>
                    <div className="text-container">
                        <p>
                            {currentAbout.description
                                .split("\n")
                                .map((line, index, array) => (
                                    <React.Fragment key={index}>
                                        {line}
                                        {index < array.length - 1 && <br />}
                                    </React.Fragment>
                                ))}
                        </p>
                    </div>
                </div>
            </div>
            <ArrowLink
                href={currentAbout.arrowLink}
                icon={currentAbout.arrowIcon}
                alt="Arrow icon"
                className="icon arrow"
            />
        </section>
    );
};

export default About;