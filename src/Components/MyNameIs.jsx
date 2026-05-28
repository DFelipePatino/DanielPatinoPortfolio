import React from "react";
import { DEV_DATA, CX_DATA, ButtonLink, SocialIcon } from "../OOPData/MyNameIs-data";
import { useTheme } from "../Context/ThemeContext";

const MyNameIs = ({ tiltX, tiltY, setTiltX, setTiltY }) => {
    // 1. Destructure the theme mode state
    const { isDarkMode } = useTheme();

    // 2. Select the active configuration mapping dynamically
    const currentData = isDarkMode ? CX_DATA : DEV_DATA;

    const handleMouseMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const deltaX = (mouseX - centerX) / centerX;
        const deltaY = (centerY - mouseY) / centerY;
        setTiltX(deltaX * 20);
        setTiltY(deltaY * 10);
    };

    const handleMouseLeave = () => {
        setTiltX(0);
        setTiltY(0);
    };

    return (
        <section id="profile" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} onClick={() => window.location.href = 'https://daniel-patino.onrender.com/'} style={{ cursor: 'pointer' }}>
            <div className="section__pic-container">
                <img
                    src={currentData.PROFILE.image}
                    alt={`${currentData.PROFILE.name} profile picture`}
                    style={{ transform: `rotateY(${tiltX}deg) rotateX(${tiltY}deg)` }}
                />
            </div>

            <div className="section__text">
                <p className="section__text__p1">Hello, I&apos;m</p>
                <h1 className="title">{currentData.PROFILE.name}</h1>
                <p className="section__text__p2">{currentData.PROFILE.title}</p>

                <div className="btn-container">
                    {currentData.ACTIONS.map((action) => (
                        <ButtonLink key={action.label} {...action} />
                    ))}
                </div>

                <div id="socials-container">
                    {currentData.SOCIALS.map((social) => (
                        <SocialIcon key={social.href} {...social} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MyNameIs;