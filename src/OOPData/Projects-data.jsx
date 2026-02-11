import React from "react";

/* =======================
   Projects Section Data
======================= */
export const PROJECTS = [
    {
        id: 1,
        title: "Daniel P Store",
        image: "/images/project-5.png",
        imageAlt: "Project 2",
        demoLink: "https://danielstore-front.onrender.com/",
        description: "I built an online store using React for the frontend, Django for the backend, and PostgreSQL as the database, hosted on AWS RDS. This project allows users to simulate the entire purchasing process, from browsing products to adding items to the cart and completing a mock checkout.\n\nThe platform also features a full CRUD implementation, enabling users to add, update, and delete their own products, making it an interactive marketplace.",
        buttons: [
            {
                label: "Github",
                href: "https://github.com/DFelipePatino/DanielStore-Front.git",
                external: true,
            },
            {
                label: "Live Demo",
                href: "https://danielstore-front.onrender.com/",
                external: true,
            },
        ],
    },
    {
        id: 2,
        title: "Gym App",
        image: "/images/project-3.png",
        imageAlt: "Project 1",
        demoLink: "https://www.onetrainingteam.com/",
        description: "I developed a web app for an independent client that provides gym members with a seamless, Netflix-style experience for consuming training videos and following their workout programs. The platform allows users to browse categorized workout sessions, stream high-quality instructional videos, and track their progress—all from one intuitive interface.\n\nWith a clean UI and smooth video playback, the app enhances the gym experience by offering on-demand access to professional training content, ensuring members can follow their programs at their own pace. Built with scalability and user engagement in mind, it delivers a premium digital fitness experience.",
        buttons: [
            {
                label: "Github",
                href: "https://github.com/DFelipePatino/GymApp",
                external: true,
            },
            {
                label: "Live Demo",
                href: "https://www.onetrainingteam.com/",
                external: true,
            },
        ],
    },
    {
        id: 3,
        title: "E-Commerce Portfolio",
        image: "/images/project-4.png",
        imageAlt: "Project 2",
        demoLink: "https://inventario-simba-front.onrender.com/",
        description: "Full-Stack CRUD Application with React, Python, PostgreSQL, Material UI & AWS RDS\n\nThis project is a full-stack web application built using React for the frontend and Python for the backend, with PostgreSQL as the database. It features full CRUD (Create, Read, Update, Delete) functionality, allowing users to seamlessly manage data through a dynamic and responsive interface.\n\nThe frontend, developed with React and Material UI, offers a modern and intuitive user experience. The backend, built with Django (or Flask) and PostgreSQL, directly interacts with the database, handling queries and transactions efficiently. The database is hosted on AWS RDS (Relational Database Service), providing scalability, automated backups, and high availability.\n\nThis project follows best practices in full-stack development, focusing on direct database interaction, state management in React, UI/UX optimization with Material UI, and cloud deployment with AWS RDS, making it a scalable and efficient solution.",
        buttons: [
            {
                label: "Github Front",
                href: "https://github.com/DFelipePatino/inventario_simba_front",
                external: true,
            },
            {
                label: "Github Back",
                href: "https://github.com/DFelipePatino/inventario_simba_back",
                external: true,
            },
            {
                label: "Live Demo",
                href: "https://inventario-simba-front.onrender.com/",
                external: true,
            },
        ],
    },
    {
        id: 4,
        title: "Dogs Api",
        image: "/images/project-1.png",
        imageAlt: "Project 1",
        demoLink: "https://dogsproject-rr4u.onrender.com/",
        description: "This web app allows you to explore a wide variety of dog breeds using an external API while also letting you create and save your own custom dogs. Built with React, Material UI, and PostgreSQL, it offers a modern and intuitive experience for dog lovers.\n\nFeatures: • Browse and discover detailed information on different dog breeds. • Create and customize your own unique dogs. • Save your favorite breeds in a PostgreSQL-powered database. • Enjoy a sleek and responsive interface powered by Material UI.\n\nWith a clean design and smooth user experience, this app makes exploring and personalizing your dog collection easy and fun!",
        buttons: [
            {
                label: "Github",
                href: "https://github.com/DFelipePatino/Dogs-Project.git",
                external: true,
            },
            {
                label: "Live Demo",
                href: "https://dogsproject-rr4u.onrender.com/",
                external: true,
            },
        ],
    },
    {
        id: 5,
        title: "Charlie App",
        image: "/images/project-2.png",
        imageAlt: "Project 2",
        demoLink: "https://charlie-fawk.onrender.com/pruebabrian/login",
        description: "Helped develop a bar application, implementing advanced technologies for key features and admin dashboards, allowing users to explore the bar menu and place orders via the app. Designed QR code generation and scanning to streamline order processing, contributed to stock and employee management features, and enhanced information flow with Redux for improved navigation and user experience.",
        buttons: [
            {
                label: "Video-Demo",
                href: "https://youtu.be/LbkMOQ-xVGk",
                external: true,
            },
            {
                label: "Live Demo",
                href: "https://charlie-fawk.onrender.com/pruebabrian/login",
                external: true,
            },
        ],
    },
    {
        id: 6,
        title: "Sticky Notes",
        image: "/images/StickyNotes.png",
        imageAlt: "Sticky Notes",
        demoLink: "https://fictional-university.onrender.com/",
        description: "Sticky Notes App is a lightweight mobile application built with React Native that allows users to quickly create, view, and manage notes. The app features a simple and intuitive interface, persistent storage using AsyncStorage, and smooth navigation for an efficient note-taking experience.",
        buttons: [
            {
                label: "Github",
                href: "https://github.com/DFelipePatino/Notes-App",
                external: true,
            },
            {
                label: "Live Demo",
                href: "https://fictional-university.onrender.com/",
                external: true,
            },
        ],
    },
];

export const PROJECTS_SECTION = {
    arrowLink: "/#contact",
    arrowIcon: "/images/arrow.png",
};

/* =======================
   Additional Components
======================= */
export const ProjectCard = ({ project, showDescription, closingDescription, onToggleDescription }) => (
    <div className="details-container color-container">
        <div className="article-container">
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={project.imageAlt} className="project-img" />
            </a>
        </div>
        <h2 className="experience-sub-title project-title">{project.title}</h2>

        {project.description && (
            <>
                <button className="btn3 btn-color-2" onClick={onToggleDescription}>
                    Read me!
                </button>
                <div className={`dropdown3-menu ${showDescription ? "open" : ""} ${closingDescription ? "closing" : ""}`}>
                    {showDescription && (
                        <div className="dropdown2-content">
                            <p className={`descriptionBox ${showDescription ? 'show' : ''}`}>
                                {project.description.split('\n').map((line, index) => (
                                    <React.Fragment key={index}>
                                        {line}
                                        {index < project.description.split('\n').length - 1 && <br />}
                                    </React.Fragment>
                                ))}
                            </p>
                        </div>
                    )}
                </div>
            </>
        )}

        <div className="btn-container">
            {project.buttons.map((button, index) => (
                <a key={index} href={button.href} target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-color-2 project-btn">{button.label}</button>
                </a>
            ))}
        </div>
    </div>
);


export const ArrowLink = ({ href, icon, alt, className }) => (
    <a href={href}>
        <img src={icon} alt={alt} className={className} />
    </a>
);