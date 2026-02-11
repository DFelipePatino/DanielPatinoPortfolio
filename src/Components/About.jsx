import React from "react";
import { ABOUT, ArrowLink } from "../OOPData/About-data";

const About = () => {
    return (
        <section id="about">
            <p className="section__text__p1">Get To Know More</p>
            <h1 className="title">About Me</h1>
            <div className="section-container">
                <div className="section__pic-container">
                    <img
                        src={ABOUT.image}
                        alt="Profile picture"
                        className="about-pic"
                    />
                </div>
                <div className="about-details-container">
                    <div className="about-containers">
                        <div className="details-container">
                            <img
                                src={ABOUT.experience.icon}
                                alt="Experience icon"
                                className="icon"
                            />
                            <h3>{ABOUT.experience.title}</h3>
                            <p>
                                {ABOUT.experience.description.split('\n').map((line, index) => (
                                    <React.Fragment key={index}>
                                        {line}
                                        {index < ABOUT.experience.description.split('\n').length - 1 && <br />}
                                    </React.Fragment>
                                ))}
                            </p>
                        </div>
                    </div>
                    <div className="text-container">
                        <p>
                            {ABOUT.description.split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    {index < ABOUT.description.split('\n').length - 1 && <br />}
                                </React.Fragment>
                            ))}
                        </p>
                    </div>
                </div>
            </div>
            <ArrowLink href={ABOUT.arrowLink} icon={ABOUT.arrowIcon} alt="Arrow icon" className="icon arrow" />
        </section>
    );
};

export default About;