import React from "react";
import PropTypes from "prop-types";


/* =======================
   Projects Section Data
======================= */
export const PROJECTS = [



    {
        id: 5,
        title: "Pokedex API",
        image: "/images/pokedex.jpeg",
        image2: "/images/ExpoPokemon.png",
        imageAlt: "Project 2",
        demoLink: "https://pokedex-3a7c.onrender.com",
        demoLink2: "exp://expo-development-client/?url=https%3A%2F%2Fu.expo.dev%2F72614e03-8e89-4a77-a315-3e91806a3511%2Fgroup%2F594db386-342f-4343-ae1e-134e5e9c7589",
        description: "Click the Expo Demo button to access a QR code. Scan it with your phone to run the app natively using Expo Go so you dont miss out on the full experience!\n\nPokédex – A React Native app built with Expo that lets you browse Pokémon via an API in a fun, interactive way. View each Pokémon’s name, type, front/back sprites, and moves. Features type-based colors, smooth scrolling, dynamic routing for detailed Pokémon pages, and support for both dark and light modes. The app also includes a search function to find Pokémon by name or ID, and an AI-powered image generator that allows users to create custom Pokémon. Additionally, users can save their generated Pokémon into a personal Pokédex, where all previously created entries are stored locally using SQLite (or AsyncStorage for the web version).",
        buttons: [
            {
                label: "Github",
                href: "https://github.com/DFelipePatino/Pokedex.git",
                external: true,
            },
            {
                label: "Expo QR",
                type: "expo",
            }

        ],
    },

    {
        id: 3,
        title: "Cosmic Explorer API",
        image: "/images/nasa-gallery.jpeg",
        imageAlt: "Project 1",
        demoLink: "https://nasa-gallery.onrender.com",
        description: "Cosmic Explorer is a high-performance, interactive image gallery web application built with React. It leverages public NASA APIs to fetch and display stunning astronomy pictures, including the Astronomy Picture of the Day (APOD) and the extensive NASA Image and Video Library. This project was built to showcase advanced React concepts, including complex state management, custom hooks, performant rendering of large datasets, and engaging UI animations.",
        buttons: [
            {
                label: "Github",
                href: "https://github.com/DFelipePatino/Nasa-Gallery.git",
                external: true,
            },
            {
                label: "Live Demo",
                href: "https://nasa-gallery.onrender.com",
                external: true,
            },
        ],
    },

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
        title: "Bill Splitter",
        image: "/images/BillSplitter.png",
        imageAlt: "Project 2",
        demoLink: "https://money-app-js18.onrender.com",
        description: "A smart and easy way to split expenses with friends. Track shared charges, see who owes what, and settle balances effortlessly, it let's you download a PDF to share with your friends. Perfect for trips, events, or everyday spending.",
        buttons: [
            {
                label: "Github",
                href: "https://github.com/DFelipePatino/Money-App.git",
                external: true,
            },
            {
                label: "Live Demo",
                href: "https://money-app-js18.onrender.com",
                external: true,
            },
        ],
    },




    {
        id: 4,
        title: "Dogs API",
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




    // {
    //     id: 7,
    //     title: "Sticky Notes",
    //     image: "/images/StickyNotes.png",
    //     imageAlt: "Sticky Notes",
    //     demoLink: "https://fictional-university.onrender.com/",
    //     description: "Sticky Notes App is a lightweight mobile application built with React Native that allows users to quickly create, view, and manage notes. The app features a simple and intuitive interface, persistent storage using AsyncStorage, and smooth navigation for an efficient note-taking experience.",
    //     buttons: [
    //         {
    //             label: "Github",
    //             href: "https://github.com/DFelipePatino/Notes-App",
    //             external: true,
    //         },
    //         {
    //             label: "Live Demo",
    //             href: "https://fictional-university.onrender.com/",
    //             external: true,
    //         },
    //     ],
    // },

    {
        id: 8,
        title: "Visuals App",
        image: "/images/VisualsApp.png",
        imageAlt: "Project 2",
        demoLink: "https://visualapp.onrender.com",
        description: "Modern, neon-infused visualizer that captures the device camera, extracts the user's outline, and redraws it as a glowing holographic silhouette in real time. Built for installations, live streams, and futuristic UI experiments.",
        buttons: [
            {
                label: "Github",
                href: "https://github.com/DFelipePatino/VisualApp",
                external: true,
            },
            {
                label: "Live Demo",
                href: "https://visualapp.onrender.com",
                external: true,
            },
        ],
    },

    {
        id: 9,
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
        id: 6,
        title: "Rick & Morty API",
        image: "/images/Rick&Morty.png",
        imageAlt: "Project 2",
        demoLink: "https://rick-mortypidafepa.onrender.com",
        description: "Rick and Morty App is a responsive single-page application that consumes the public Rick and Morty API to search, filter, and display characters. The project is built with React, Redux for global state management, React Router for navigation, Axios for API requests, and Material UI + custom CSS for styling. It includes features like favorites management, filtering, ordering, and dynamic routing, following modern frontend best practices.",
        buttons: [
            {
                label: "Github",
                href: "https://github.com/DFelipePatino/Rick-MortyPIdafepa.git",
                external: true,
            },
            {
                label: "Live Demo",
                href: "https://rick-mortypidafepa.onrender.com",
                external: true,
            },
        ],
    },


    {
        id: 10,
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
        id: 11,
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


];

export const PROJECTS_SECTION = {
    arrowLink: "/#experience",
    arrowIcon: "/images/arrow.png",
};


const openExpoLink = (expoLink, webLink) => {
    // Try native open (same tab = best success rate)
    window.location.href = expoLink;

    setTimeout(() => {
        window.open(webLink, "_blank");
    }, 1500);
};

/* =======================
   Additional Components
======================= */
export const ProjectCard = ({ project, isImageSet, setIsImageSet, showDescription, closingDescription, onToggleDescription }) => (
    <div className="details-container color-container">
        <div className="article-container">
            <div
                onClick={(e) => {
                    e.preventDefault();
                    if (project.demoLink2) {
                        openExpoLink(project.demoLink2, project.demoLink);
                    } else {
                        window.open(project.demoLink, "_blank");
                    }

                }}
                style={{ cursor: "pointer" }}
            >
                <img
                    src={
                        isImageSet
                            ? project.image2
                                ? project.image2
                                : project.image
                            : project.image
                    }
                    alt={project.imageAlt}
                    className="project-img"
                />
            </div>
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
            {project.buttons.map((btn, index) => (
                btn.href
                    ? <a key={index} href={btn.href} target={btn.external ? "_blank" : undefined} rel="noopener noreferrer">
                        <button className="btn btn-color-2">{btn.label}</button>
                    </a>
                    : <button key={index} className="btn btn-color-2" onClick={() => setIsImageSet(prev => !prev)}>
                        {btn.label}
                    </button>
            ))}
        </div>
    </div>
);


export const ArrowLink = ({ href, icon, alt, className }) => (
    <a href={href}>
        <img src={icon} alt={alt} className={className} />
    </a>
);


ProjectCard.propTypes = {
    project: PropTypes.object.isRequired,
    showDescription: PropTypes.bool.isRequired,
    closingDescription: PropTypes.bool.isRequired,
    onToggleDescription: PropTypes.func.isRequired,
};

ArrowLink.propTypes = {
    href: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
};
