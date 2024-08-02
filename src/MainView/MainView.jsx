import React from "react";
import "./MainView.css";
import { useState } from "react";
import "./mediaqueries.css";

function MainView() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
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
              <a href="#experience" onClick={toggleMenu}>
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" onClick={toggleMenu}>
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
      <section id="profile">
        <div className="section__pic-container">
          <img
            src="/images/profile-pic.png"
            alt="Daniel Patino profile picture"
          />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Daniel Patino</h1>
          <p className="section__text__p2">Full Stack Developer</p>
          <div className="btn-container">
            <a
              href="https://drive.google.com/file/d/1Vru1kMt5rnal1v2vv7dx5WVvB57Qtn0z/view?usp=sharing"
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

        <div className="experience-details-container">
          <div className="about-containers">


            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src="/images/project-3.png"
                  alt="Project 1"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">Gym App</h2>
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
                  href="https://gymapp-c8w7.onrender.com/"
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
                <img
                  src="/images/project-4.png"
                  alt="Project 2"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">
                E-Commerce Portfolio
              </h2>
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
                <img
                  src="/images/project-1.png"
                  alt="Project 1"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">Dogs Api</h2>
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
                <img
                  src="/images/project-2.png"
                  alt="Project 2"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">
                Charlie App
              </h2>
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
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>

        <p>Copyright &#169; 2024 Daniel Patino. All Rights Reserved.</p>
      </footer>


    </div>
  );
}

export default MainView;
