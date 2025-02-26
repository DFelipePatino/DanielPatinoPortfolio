import React from "react";
import "./MainView.css";
import { useState } from "react";
import "./mediaqueries.css";

function MainView() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuOpen2, setMenuOpen2] = useState(false);
  const [menuOpen3, setMenuOpen3] = useState(false);
  const [isClosing2, setIsClosing2] = useState(false);
  const [isClosing3, setIsClosing3] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showDescription2, setShowDescription2] = useState(false);
  const [showDescription3, setShowDescription3] = useState(false);
  const [showDescription4, setShowDescription4] = useState(false);
  const [showDescription5, setShowDescription5] = useState(false);
  const [closingDescription, setClosingDescription] = useState(false);
  const [closingDescription2, setClosingDescription2] = useState(false);
  const [closingDescription3, setClosingDescription3] = useState(false);
  const [closingDescription4, setClosingDescription4] = useState(false);
  const [closingDescription5, setClosingDescription5] = useState(false);
  const [tiltX, setTiltX] = useState(0);
  const [tiltY, setTiltY] = useState(0);

  const toggleDescription = () => {
    if (showDescription) {
      setClosingDescription(true);
      setTimeout(() => {
        setShowDescription(false);
        setClosingDescription(false);
      }, 1000); // Match this duration with your CSS transition duration
    } else {
      setShowDescription(true);
    }
  };
  const toggleDescription2 = () => {
    if (showDescription2) {
      setClosingDescription2(true);
      setTimeout(() => {
        setShowDescription2(false);
        setClosingDescription2(false);
      }, 1000); // Match this duration with your CSS transition duration
    } else {
      setShowDescription2(true);
    }
  };
  const toggleDescription3 = () => {
    if (showDescription3) {
      setClosingDescription3(true);
      setTimeout(() => {
        setShowDescription3(false);
        setClosingDescription3(false);
      }, 1000); // Match this duration with your CSS transition duration
    } else {
      setShowDescription3(true);
    }
  };
  const toggleDescription4 = () => {
    if (showDescription4) {
      setClosingDescription4(true);
      setTimeout(() => {
        setShowDescription4(false);
        setClosingDescription4(false);
      }, 1000); // Match this duration with your CSS transition duration
    } else {
      setShowDescription4(true);
    }
  };
  const toggleDescription5 = () => {
    if (showDescription5) {
      setClosingDescription5(true);
      setTimeout(() => {
        setShowDescription5(false);
        setClosingDescription5(false);
      }, 1000); // Match this duration with your CSS transition duration
    } else {
      setShowDescription5(true);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleMenu2 = () => {
    if (menuOpen2) {
      setIsClosing2(true);
      setTimeout(() => {
        setMenuOpen2(false);
        setIsClosing2(false);
      }, 1500); // Match this duration with your CSS transition duration
    } else {
      setMenuOpen2(true);
    }
  };

  const toggleMenu2b = () => {
    setIsClosing2(false);
    setTimeout(() => {
      setMenuOpen2(true);
    }, 700);
  }

  const toggleMenu3 = () => {
    if (menuOpen3) {
      setIsClosing3(true);
      setTimeout(() => {
        setMenuOpen3(false);
        setIsClosing3(false);
      }, 1500); // Match this duration with your CSS transition duration
    } else {
      setMenuOpen3(true);
    }
  };

  const toggleMenu3b = () => {
    setIsClosing3(false);
    setTimeout(() => {
      setMenuOpen3(true);
    }, 800);
  }

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

  return (
    <div id="top">
      <nav id="desktop-nav">
        <div className="logo">Daniel Patino</div>
        <div>
          <ul class="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience" onClick={toggleMenu2b}>Experience</a>
            </li>
            <li>
              <a href="#projects" onClick={toggleMenu3b}>Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* <nav id="mobile-nav">
          <div className="logo">Daniel Patino</div>
          <div class="hamburger-menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav> */}

      <nav id="mobile-nav">
        <div className="logo">Daniel Patino</div>
        <div className="hamburger-menu">
          <div
            className={`hamburger-icon  ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`menu-links ${menuOpen ? "open" : ""}`}>
            <li>
              <a href="#about" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#experience" onClick={() => { toggleMenu(); toggleMenu2b(); }}>
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => { toggleMenu(); toggleMenu3b(); }}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </div>
        </div>
      </nav>
      <section id="profile" onMouseMove={handleMouseMove} onMouseLeave={() => { setTiltX(0); setTiltY(0); }}>
        <div className="section__pic-container" >
          <img
            src="/images/profile-pic.png"
            alt="Daniel Patino profile picture"
            style={{ transform: `rotateY(${tiltX}deg) rotateX(${tiltY}deg)` }}
          />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Daniel Patino</h1>
          <p className="section__text__p2">Full Stack Developer</p>
          <div className="btn-container">
            <a
              href="https://drive.google.com/file/d/19s4T61-0vkA90ZVSUALvSmhXLOmyIP4b/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-color-2">Download CV</button>
            </a>
            <a href="#contact">
              <button className="btn btn-color-1">Contact Info</button>
            </a>
          </div>
          <div id="socials-container">
            <a
              href="https://www.linkedin.com/in/daniel-patino-207156208/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img
                src="/images/linkedin.png"
                alt="My LinkedIn profile"
                className="icon"
              />
            </a>
            <a
              href="https://github.com/DFelipePatino"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img
                src="/images/github.png"
                alt="My Github profile"
                className="icon"
              />
            </a>
          </div>
        </div>
      </section>
      <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="section__pic-container">
            <img
              src="/images/about-pic.png"
              alt="Profile picture"
              className="about-pic"
            />
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <img
                  src="/images/experience.png"
                  alt="Experience icon"
                  className="icon"
                />
                <h3>Experience</h3>
                <p>
                  2+ year <br />
                  Full Stack Development
                </p>
              </div>

              {/* <div className="details-container">
                <img
                  src="/images/education.png"
                  alt="Education icon"
                  className="icon"
                />
                <h3>Education</h3>
                <p>
                  Full Stack Web Developer - Henry Bootcamp
                  <br />
                </p>
              </div> */}

            </div>
            <div className="text-container">
              <p>
                I'm a Full Stack Developer with expertise in JavaScript, React, Redux, HTML, CSS, Django and Express. I specialize in creating modern, responsive UIs with Material UI. With a strong commitment to continuous learning and agile methodologies like SCRUM, I excel in both individual and team environments, delivering high-quality solutions efficiently.
                <br />
                Let's connect and explore how I can bring value to your next project!
              </p>
            </div>
          </div>
        </div>
        <a href="./#experience">
          <img
            src="/images/arrow.png"
            alt="Arrow icon"
            className="icon arrow"
          />
        </a>
      </section>


      <section id="experience">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Experience</h1>

        <div className="dropdown2">
          <button className="btn2 btn-color-2" onClick={toggleMenu2}>
            {menuOpen2 ? "Hide Experience" : "View Experience"}
          </button>
          <div className={`dropdown2-menu ${menuOpen2 ? "open" : ""} ${isClosing2 ? "closing" : ""}`}>
            {menuOpen2 && (
              <div className="dropdown2-content">


                <div className="experience-details-container">
                  <div className="about-containers">

                    <div className="details-container">
                      <h2 className="experience-sub-title">Frontend Development</h2>
                      <div className="article-container">
                        <article>
                          <img
                            src="/images/checkmark.png"
                            alt="Experience icon"
                            className="icon"
                          />
                          <div>
                            <h3>HTML</h3>
                            <p>Intermediate</p>
                          </div>
                        </article>
                        <article>
                          <img
                            src="/images/checkmark.png"
                            alt="Experience icon"
                            className="icon"
                          />
                          <div>
                            <h3>CSS</h3>
                            <p>Intermediate</p>
                          </div>
                        </article>
                        <article>
                          <img
                            src="/images/checkmark.png"
                            alt="Experience icon"
                            className="icon"
                          />
                          <div>
                            <h3>React</h3>
                            <p>Experienced</p>
                          </div>
                        </article>
                        <article>
                          <img
                            src="/images/checkmark.png"
                            alt="Experience icon"
                            className="icon"
                          />
                          <div>
                            <h3>Redux</h3>
                            <p>Experienced</p>
                          </div>
                        </article>
                        <article>
                          <img
                            src="/images/checkmark.png"
                            alt="Experience icon"
                            className="icon"
                          />
                          <div>
                            <h3>Material UI</h3>
                            <p>Experienced</p>
                          </div>
                        </article>
                        {/* <article>
                  <img
                    src="/images/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Tailwind CSS</h3>
                    <p>Experienced</p>
                  </div>
                </article> */}
                      </div>
                    </div>

                    <div className="details-container">
                      <h2 className="experience-sub-title">Backend Development</h2>
                      <div className="article-container">
                        <article>
                          <img
                            src="/images/checkmark.png"
                            alt="Experience icon"
                            className="icon"
                          />
                          <div>
                            <h3>PostgreSQL</h3>
                            <p>Intermediate</p>
                          </div>
                        </article>
                        <article>
                          <img
                            src="/images/checkmark.png"
                            alt="Experience icon"
                            className="icon"
                          />
                          <div>
                            <h3>Sequelize</h3>
                            <p>Experienced</p>
                          </div>
                        </article>
                        <article>
                          <img
                            src="/images/checkmark.png"
                            alt="Experience icon"
                            className="icon"
                          />
                          <div>
                            <h3>Node JS</h3>
                            <p>Intermediate</p>
                          </div>
                        </article>
                        <article>
                          <img
                            src="/images/checkmark.png"
                            alt="Experience icon"
                            className="icon"
                          />
                          <div>
                            <h3>PIP</h3>
                            <p>Intermediate</p>
                          </div>
                        </article>
                        <article>
                          <img
                            src="/images/checkmark.png"
                            alt="Experience icon"
                            className="icon"
                          />
                          <div>
                            <h3>Express JS</h3>
                            <p>Intermediate</p>
                          </div>
                        </article>
                        <article>
                          <img
                            src="/images/checkmark.png"
                            alt="Experience icon"
                            className="icon"
                          />
                          <div>
                            <h3>Git</h3>
                            <p>Intermediate</p>
                          </div>
                        </article>
                        <article>
                          <img
                            src="/images/checkmark.png"
                            alt="Experience icon"
                            className="icon"
                          />
                          <div>
                            <h3>AWS</h3>
                            <p>Essentials</p>
                          </div>
                        </article>
                      </div>
                    </div>

                    <div className="details-container">
                      <h2 className="experience-sub-title">Programming Languages</h2>
                      <div className="article-container">
                        <article>
                          <img
                            src="/images/checkmark.png"
                            alt="Experience icon"
                            className="icon"
                          />
                          <div>
                            <h3>JavaScript</h3>
                            <p>Intermediate</p>
                          </div>
                        </article>
                        <article>
                          <img
                            src="/images/checkmark.png"
                            alt="Experience icon"
                            className="icon"
                          />
                          <div>
                            <h3>Python</h3>
                            <p>Intermediate</p>
                          </div>
                        </article>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            )}
          </div>
        </div>



        <a href="/#projects">
          <img
            src="/images/arrow.png"
            alt="Arrow icon"
            className="icon arrow"
          />
        </a>
      </section>


      <section id="projects">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>

        {/* Dropdown for Projects Section */}
        <div className="dropdown2">
          <button className="btn btn-color-2" onClick={toggleMenu3}>
            {menuOpen3 ? "Hide Projects" : "View Projects"}
          </button>

          <div className={`dropdown2-menu ${menuOpen3 ? "open" : ""} ${isClosing3 ? "closing" : ""}`}>
            {menuOpen3 && (
              <div className="dropdown2-content">
                <div className="experience-details-container">
                  <div className="about-containers">


                    <div className="details-container color-container">
                      <div className="article-container">
                        <a
                          href="https://inventario-simba-front.onrender.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="/images/project-5.png"
                            alt="Project 2"
                            className="project-img"
                          />
                        </a>
                      </div>
                      <h2 className="experience-sub-title project-title">
                        Daniel P Store
                      </h2>


                      <button className="btn3 btn-color-2" onClick={toggleDescription}>Read me!</button>


                      <div className={`dropdown3-menu ${showDescription ? "open" : ""} ${closingDescription ? "closing" : ""}`}>
                        {showDescription && (
                          <div className="dropdown2-content">
                            <p className={`descriptionBox ${showDescription ? 'show' : ''}`}>I built an online store using React for the frontend, Django for the backend, and PostgreSQL as the database, hosted on AWS RDS. This project allows users to simulate the entire purchasing process, from browsing products to adding items to the cart and completing a mock checkout.

                              The platform also features a full CRUD implementation, enabling users to add, update, and delete their own products, making it an interactive marketplace.</p>
                          </div>
                        )}
                      </div>


                      <div className="btn-container">
                        <a
                          href="https://github.com/DFelipePatino/DanielStore-Front.git"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="btn btn-color-2 project-btn">
                            Github
                          </button>
                        </a>
                        <a
                          href="https://danielstore-front.onrender.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="btn btn-color-2 project-btn">
                            Live Demo
                          </button>
                        </a>
                      </div>
                    </div>


                    <div className="details-container color-container">
                      <div className="article-container">
                        <a
                          href="https://gymapp-c8w7.onrender.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="/images/project-3.png"
                            alt="Project 1"
                            className="project-img"
                          />
                        </a>
                      </div>
                      <h2 className="experience-sub-title project-title">Gym App</h2>


                      <button className="btn3 btn-color-2" onClick={toggleDescription2}>Read me!</button>


                      <div className={`dropdown3-menu ${showDescription2 ? "open" : ""} ${closingDescription2 ? "closing" : ""}`}>
                        {showDescription2 && (
                          <div className="dropdown2-content">
                            <p className={`descriptionBox ${showDescription2 ? 'show' : ''}`}>I developed a web app for an independent client that provides gym members with a seamless, Netflix-style experience for consuming training videos and following their workout programs. The platform allows users to browse categorized workout sessions, stream high-quality instructional videos, and track their progress—all from one intuitive interface.

                              With a clean UI and smooth video playback, the app enhances the gym experience by offering on-demand access to professional training content, ensuring members can follow their programs at their own pace. Built with scalability and user engagement in mind, it delivers a premium digital fitness experience.</p>
                          </div>
                        )}
                      </div>

                      <div className="btn-container">
                        <a
                          href="https://github.com/DFelipePatino/GymApp"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="btn btn-color-2 project-btn">
                            Github
                          </button>
                        </a>
                        <a
                          href="https://www.onetrainingteam.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="btn btn-color-2 project-btn">
                            Live Demo
                          </button>
                        </a>
                      </div>
                    </div>


                    <div className="details-container color-container">
                      <div className="article-container">
                        <a
                          href="https://inventario-simba-front.onrender.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="/images/project-4.png"
                            alt="Project 2"
                            className="project-img"
                          />
                        </a>
                      </div>
                      <h2 className="experience-sub-title project-title">
                        E-Commerce Portfolio
                      </h2>
                      <button className="btn3 btn-color-2" onClick={toggleDescription3}>Read me!</button>


                      <div className={`dropdown3-menu ${showDescription3 ? "open" : ""} ${closingDescription3 ? "closing" : ""}`}>
                        {showDescription3 && (
                          <div className="dropdown2-content">
                            <p className={`descriptionBox ${showDescription3 ? 'show' : ''}`}>
                              Full-Stack CRUD Application with React, Python, PostgreSQL, Material UI & AWS RDS

                              This project is a full-stack web application built using React for the frontend and Python for the backend, with PostgreSQL as the database. It features full CRUD (Create, Read, Update, Delete) functionality, allowing users to seamlessly manage data through a dynamic and responsive interface.

                              The frontend, developed with React and Material UI, offers a modern and intuitive user experience. The backend, built with Django (or Flask) and PostgreSQL, directly interacts with the database, handling queries and transactions efficiently. The database is hosted on AWS RDS (Relational Database Service), providing scalability, automated backups, and high availability.

                              This project follows best practices in full-stack development, focusing on direct database interaction, state management in React, UI/UX optimization with Material UI, and cloud deployment with AWS RDS, making it a scalable and efficient solution.</p>
                          </div>
                        )}
                      </div>


                      <div className="btn-container">
                        <a
                          href="https://github.com/DFelipePatino/inventario_simba_front"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="btn btn-color-2 project-btn">
                            Github Front
                          </button>
                        </a>
                        <a
                          href="https://github.com/DFelipePatino/inventario_simba_back"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="btn btn-color-2 project-btn">
                            Github Back
                          </button>
                        </a>
                        <a
                          href="https://inventario-simba-front.onrender.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="btn btn-color-2 project-btn">
                            Live Demo
                          </button>
                        </a>
                      </div>
                    </div>


                    <div className="details-container color-container">
                      <div className="article-container">
                        <a
                          href="https://dogsproject-rr4u.onrender.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="/images/project-1.png"
                            alt="Project 1"
                            className="project-img"
                          />
                        </a>
                      </div>
                      <h2 className="experience-sub-title project-title">Dogs Api</h2>

                      <button className="btn3 btn-color-2" onClick={toggleDescription4}>Read me!</button>


                      <div className={`dropdown3-menu ${showDescription4 ? "open" : ""} ${closingDescription4 ? "closing" : ""}`}>
                        {showDescription4 && (
                          <div className="dropdown2-content">
                            <p className={`descriptionBox ${showDescription4 ? 'show' : ''}`}>
                              This web app allows you to explore a wide variety of dog breeds using an external API while also letting you create and save your own custom dogs. Built with React, Material UI, and PostgreSQL, it offers a modern and intuitive experience for dog lovers.

                              Features: • Browse and discover detailed information on different dog breeds. • Create and customize your own unique dogs. • Save your favorite breeds in a PostgreSQL-powered database. • Enjoy a sleek and responsive interface powered by Material UI.

                              With a clean design and smooth user experience, this app makes exploring and personalizing your dog collection easy and fun!</p>
                          </div>
                        )}
                      </div>


                      <div className="btn-container">
                        <a
                          href="https://github.com/DFelipePatino/Dogs-Project.git"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="btn btn-color-2 project-btn">
                            Github
                          </button>
                        </a>
                        <a
                          href="https://dogsproject-rr4u.onrender.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="btn btn-color-2 project-btn">
                            Live Demo
                          </button>
                        </a>
                      </div>
                    </div>


                    <div className="details-container color-container">
                      <div className="article-container">
                        <a
                          href="https://charlie-fawk.onrender.com/pruebabrian/login"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="/images/project-2.png"
                            alt="Project 2"
                            className="project-img"
                          />
                        </a>
                      </div>
                      <h2 className="experience-sub-title project-title">
                        Charlie App
                      </h2>


                      <button className="btn3 btn-color-2" onClick={toggleDescription5}>Read me!</button>


                      <div className={`dropdown3-menu ${showDescription5 ? "open" : ""} ${closingDescription5 ? "closing" : ""}`}>
                        {showDescription5 && (
                          <div className="dropdown2-content">
                            <p className={`descriptionBox ${showDescription5 ? 'show' : ''}`}>Helped develop a bar application, implementing advanced technologies for key features and admin dashboards, allowing users to explore the bar menu and place orders via the app. Designed QR code generation and scanning to streamline order processing, contributed to stock and employee management features, and enhanced information flow with Redux for improved navigation and user experience.</p>
                          </div>
                        )}
                      </div>


                      <div className="btn-container">
                        <a
                          href="https://youtu.be/LbkMOQ-xVGk"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="btn btn-color-2 project-btn">
                            Video-Demo
                          </button>
                        </a>
                        <a
                          href="https://charlie-fawk.onrender.com/pruebabrian/login"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="btn btn-color-2 project-btn">
                            Live Demo
                          </button>
                        </a>
                      </div>
                    </div>


                  </div>
                </div>
              </div>
            )}
          </div>
        </div>


        <a href="/#contact">
          <img
            src="/images/arrow.png"
            alt="Arrow icon"
            className="icon arrow"
          />
        </a>
      </section>



      <section id="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>


        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <img
              src="/images/email.png"
              alt="Email icon"
              className="icon contact-icon email-icon"
            />
            <p>
              <a href="mailto:daniel.patino.work@gmail.com">
                daniel.patino.work@gmail.com
              </a>
            </p>
          </div>
          <div className="contact-info-container">
            <img
              src="/images/linkedin.png"
              alt="LinkedIn icon"
              className="icon contact-icon"
            />
            <p>
              <a
                href="https://www.linkedin.com/in/daniel-patino-207156208/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </section>


      <a href="/#top">
        <img
          src="/images/arrowup.png"
          alt="Arrow icon"
          className="icon arrowup"
        />
      </a>



      <footer>
        <nav>
          <div className="nav-links-container">
            <ul className="nav-links">

              <li>
                <a href="javascript:void(0)" onClick={() => window.scrollTo(0, 0)}>Hello!</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experience" onClick={toggleMenu2b}>Experience</a>
              </li>
              <li>
                <a href="#projects" onClick={toggleMenu3b}>Projects</a>
              </li>
              {/* <li>
                <a href="#contact">Contact</a>
              </li> */}
            </ul>
          </div>
        </nav>

        <p>Copyright &#169; 2025 Daniel Patino. All Rights Reserved.</p>
      </footer>


    </div>
  );
}

export default MainView;
