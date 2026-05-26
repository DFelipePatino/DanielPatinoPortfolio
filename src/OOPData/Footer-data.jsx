import PropTypes from "prop-types";

/* ==========================================
   1. DEVELOPER NAVIGATION (isDarkMode = false)
   ========================================== */
export const DEV_FOOTER_LINKS = [
    { label: "Hello!", href: "javascript:void(0)", onClick: () => window.scrollTo(0, 0) },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
];

/* ==========================================
   2. CUSTOMER SUCCESS NAVIGATION (isDarkMode = true)
   ========================================== */
export const CX_FOOTER_LINKS = [
    { label: "Hello!", href: "javascript:void(0)", onClick: () => window.scrollTo(0, 0) },
    { label: "About", href: "#about" },
    { label: "Highlighted Roles", href: "#projects" },
    { label: "Experience", href: "#experience" },
];

export const FOOTER = {
    copyright: "Copyright © 2026 Daniel Patino. All Rights Reserved.",
};