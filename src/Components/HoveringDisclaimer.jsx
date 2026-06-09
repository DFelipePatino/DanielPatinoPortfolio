import React, { useEffect, useState } from 'react';
import './HoveringDisclaimer.css'; // Make sure to import your CSS file here!

export default function HoveringOverlay({ showSwitch }) {
    const [isVisible, setIsVisible] = useState(false);
    const [dontShowAgain, setDontShowAgain] = useState(false);

    useEffect(() => {
        const isHiddenPermanently = localStorage.getItem('hideProfileOverlay') === 'true';

        if (showSwitch && !isHiddenPermanently) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [showSwitch]);

    const handleCheckboxChange = (e) => {
        const checked = e.target.checked;
        setDontShowAgain(checked);

        if (checked) {
            localStorage.setItem('hideProfileOverlay', 'true');
        } else {
            localStorage.removeItem('hideProfileOverlay');
        }
    };

    if (!isVisible) return null;

    return (
        /* Using classNames instead of inline style objects */
        <div className="hover-container">
            <div className="hover-card">

                <button
                    onClick={() => setIsVisible(false)}
                    className="hover-close-btn"
                    aria-label="Close overlay"
                >
                    &times;
                </button>

                <div className="hover-content">
                    <h3>Switch Between Profiles</h3>
                    <p>Switch between both of my profiles using the switch in the bottom right corner:</p>
                    <p className="profile-item"> - Customer Success Specialist</p>
                    <p className="profile-item"> - Full Stack Developer </p>
                    <br />
                    <p className="hover-description">
                        This will change the profile content and will show you my different skill sets, experience, projects, certifications and more based on the profile you select.
                    </p>

                    <div className="checkbox-container">
                        <input
                            type="checkbox"
                            id="dontShow"
                            checked={dontShowAgain}
                            onChange={handleCheckboxChange}
                            className="checkbox-input"
                        />
                        <label htmlFor="dontShow" className="checkbox-label">
                            Don't show this message again
                        </label>
                    </div>
                </div>

                <div className="hover-badge">
                    Multi-Profile Portfolio
                </div>
            </div>
        </div>
    );
}