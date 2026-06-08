import React, { useEffect, useState } from 'react';

export default function HoveringOverlay({ showSwitch }) {
    const [isVisible, setIsVisible] = useState(false);
    // Track the checkbox state locally
    const [dontShowAgain, setDontShowAgain] = useState(false);

    useEffect(() => {
        // 1. Check if the user previously opted out
        const isHiddenPermanently = localStorage.getItem('hideProfileOverlay') === 'true';

        if (showSwitch && !isHiddenPermanently) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 2000);

            return () => clearTimeout(timer); // Cleanup timeout
        }
    }, [showSwitch]);

    // 2. Handle when the checkbox is toggled
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
        <div style={containerStyle}>
            {/* The Parent Container */}
            <div style={cardStyle}>
                {/* The Close (X) Button */}
                <button
                    onClick={() => setIsVisible(false)}
                    style={closeButtonStyle}
                    aria-label="Close overlay"
                >
                    &times;
                </button>

                <div style={{ position: "absolute", top: "50px", left: "20px", zIndex: 1 }}>
                    <h3>Switch Between Profiles</h3>
                    <p>Switch between both of my profiles using the switch in the bottom right corner:</p>
                    <p> - Customer Success Specialist</p>
                    <p> - Full Stack Developer </p>
                    <br></br>
                    <p> This will change the profile content and will show you my different skill sets, experience, projects, and more based on the profile you select.</p>

                    {/* 3. The Checkbox Element */}
                    <div style={checkboxContainerStyle}>
                        <input
                            type="checkbox"
                            id="dontShow"
                            checked={dontShowAgain}
                            onChange={handleCheckboxChange}
                            style={{ cursor: 'pointer' }}
                        />
                        <label htmlFor="dontShow" style={labelStyle}>
                            Don't show this message again
                        </label>
                    </div>
                </div>

                {/* The Hovering Element */}
                <div style={hoveringBadgeStyle}>
                    Multi-Profile Website
                </div>
            </div>
        </div>
    );
}

// --- Styles ---

const containerStyle = {
    padding: '50px',
    display: 'flex',
    justifyContent: 'center',
    position: "fixed",
    top: "15vh",
    left: "50vw",
    transform: "translateX(-50%)",
    zIndex: 300,
    opacity: 0.9,
    color: "black",
};

const cardStyle = {
    position: 'relative',
    width: '600px',
    height: '300px',
    backgroundColor: '#f0f0f0',
    border: '2px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.15)', // Added a nice shadow for depth
};

const hoveringBadgeStyle = {
    position: 'absolute',
    top: '-15px',
    left: '15px',
    backgroundColor: '#ff4757',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: 'bold',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    zIndex: 10,
};

const closeButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '15px',
    background: 'none',
    border: 'none',
    fontSize: '20px',
    fontWeight: 'bold',
    cursor: 'pointer',
    color: '#666',
    padding: '0',
    lineHeight: '1',
};

// New checkbox specific styles
const checkboxContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginTop: '25px',
};

const labelStyle = {
    marginLeft: '8px',
    fontSize: '14px',
    color: '#555',
    cursor: 'pointer',
    userSelect: 'none',
};