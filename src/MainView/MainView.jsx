import React from "react";
import "./MainView.css";
import { useState } from "react";

function MainView() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const openLink = (link) => {
    window.open(link);
  };

  return (
    <div>
      <nav id="desktop-nav">
        <div className="logo">Daniel Patino</div>
        <div class="hamburger-menu">
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
        <div class="section__pic-container">
          <img
            src="./assets/profile-pic.png"
            alt="Daniel Patino profile picture"
          />
        </div>
        <div class="section__text">
          <p class="section__text__p1">Hello, I'm</p>
          <h1 class="title">Daniel Patino</h1>
          <p class="section__text__p2">Full Stack Developer</p>
          <div class="btn-container">
            <button
              class="btn btn-color-2"
              onclick="window.open('https://drive.google.com/file/d/1m37yXdt4oxPGLhmOLQafUPwFOp_yxKBH/view?usp=drive_link')"
            >
              Download CV
            </button>
            <button
              class="btn btn-color-1"
              onclick="location.href='./#contact'"
            >
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <img
              src="./assets/linkedin.png"
              alt="My LinkedIn profile"
              class="icon"
              onclick="location.href='https://www.linkedin.com/in/daniel-patino-207156208/'"
            />
            <img
              src="./assets/github.png"
              alt="My Github profile"
              class="icon"
              onclick="location.href='https://github.com/DFelipePatino'"
            />
          </div>
        </div>
      </section>
      <section id="about">
        <p class="section__text__p1">Get To Know More</p>
        <h1 class="title">About Me</h1>
        <div class="section-container">
          <div class="section__pic-container">
            <img
              src="./assets/about-pic.png"
              alt="Profile picture"
              class="about-pic"
            />
          </div>
          <div class="about-details-container">
            <div class="about-containers">
              <div class="details-container">
                <img
                  src="./assets/experience.png"
                  alt="Experience icon"
                  class="icon"
                />
                <h3>Experience</h3>
                <p>
                  1+ year <br />
                  Full Stack Development
                </p>
              </div>
              <div class="details-container">
                <img
                  src="./assets/education.png"
                  alt="Education icon"
                  class="icon"
                />
                <h3>Education</h3>
                <p>
                  Full Stack Web Developer - Henry Bootcamp
                  <br />
                </p>
              </div>
            </div>
            <div class="text-container">
              <p>
                I am a Full Stack developer with experience in JavaScript,
                React, Redux, HTML, and CSS. I am recognized for my commitment
                to continuous learning and constant improvement. I have worked
                on individual and group projects using agile methodologies such
                as SCRUM, enhancing skills in teamwork, effective communication,
                and problem-solving.
              </p>
            </div>
          </div>
        </div>
        <img
          src="./assets/arrow.png"
          alt="Arrow icon"
          class="icon arrow"
          onclick="location.href='./#experience'"
        />
      </section>
      <section id="experience">
        <p class="section__text__p1">Explore My</p>
        <h1 class="title">Experience</h1>
        <div class="experience-details-container">
          <div class="about-containers">
            <div class="details-container">
              <h2 class="experience-sub-title">Frontend Development</h2>
              <div class="article-container">
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    class="icon"
                  />
                  <div>
                    <h3>HTML</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    class="icon"
                  />
                  <div>
                    <h3>CSS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    class="icon"
                  />
                  <div>
                    <h3>React</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    class="icon"
                  />
                  <div>
                    <h3>JavaScript</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    class="icon"
                  />
                  <div>
                    <h3>Redux</h3>
                    <p>Experienced</p>
                  </div>
                </article>
              </div>
            </div>
            <div class="details-container">
              <h2 class="experience-sub-title">Backend Development</h2>
              <div class="article-container">
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    class="icon"
                  />
                  <div>
                    <h3>PostgreSQL</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    class="icon"
                  />
                  <div>
                    <h3>Sequelize</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    class="icon"
                  />
                  <div>
                    <h3>Node JS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    class="icon"
                  />
                  <div>
                    <h3>Express JS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    class="icon"
                  />
                  <div>
                    <h3>Git</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        <img
          src="./assets/arrow.png"
          alt="Arrow icon"
          class="icon arrow"
          onclick="location.href='./#projects'"
        />
      </section>
      <section id="projects">
        <p class="section__text__p1">Browse My Recent</p>
        <h1 class="title">Projects</h1>
        <div class="experience-details-container">
          <div class="about-containers">
            <div class="details-container color-container">
              <div class="article-container">
                <img
                  src="./assets/project-1.png"
                  alt="Project 1"
                  class="project-img"
                />
              </div>
              <h2 class="experience-sub-title project-title">Dogs Api</h2>
              <div class="btn-container">
                <button
                  class="btn btn-color-2 project-btn"
                  onclick="location.href='https://github.com/DFelipePatino/Dogs-Project.git'"
                >
                  Github
                </button>
                <button
                  class="btn btn-color-2 project-btn"
                  onclick="location.href='https://github.com/DFelipePatino'"
                >
                  Live Demo
                </button>
              </div>
            </div>
            <div class="details-container color-container">
              <div class="article-container">
                <img
                  src="./assets/project-2.png"
                  alt="Project 2"
                  class="project-img"
                />
              </div>
              <h2 class="experience-sub-title project-title">Charlie App</h2>
              <div class="btn-container">
                <button
                  class="btn btn-color-2 project-btn"
                  onclick="location.href='https://youtu.be/LbkMOQ-xVGk'"
                >
                  Video-Demo
                </button>
                <button
                  class="btn btn-color-2 project-btn"
                  onclick="location.href='https://charlie-fawk.onrender.com/pruebabrian/login'"
                >
                  Live Demo
                </button>
              </div>
            </div>
            {/* <!-- <div class="details-container color-container">
            <div class="article-container">
              <img
                src="./assets/project-3.png"
                alt="Project 3"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">Project Three</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/DFelipePatino'"
              >
                Github
              </button>
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/DFelipePatino'"
              >
                Live Demo
              </button>
            </div>
          </div>
          <div class="details-container color-container">
            <div class="article-container">
              <img
                src="./assets/project-3.png"
                alt="Project 4"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">Project Four</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/DFelipePatino'"
              >
                Github
              </button>
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/DFelipePatino'"
              >
                Live Demo
              </button>
            </div>
          </div> --> */}
          </div>
        </div>
        <img
          src="./assets/arrow.png"
          alt="Arrow icon"
          class="icon arrow"
          onclick="location.href='./#contact'"
        />
      </section>
      <section id="contact">
        <p class="section__text__p1">Get in Touch</p>
        <h1 class="title">Contact Me</h1>
        <div class="contact-info-upper-container">
          <div class="contact-info-container">
            <img
              src="./assets/email.png"
              alt="Email icon"
              class="icon contact-icon email-icon"
            />
            <p>
              <a href="mailto:daniel.patino.work@gmail.com">
                daniel.patino.work@gmail.com
              </a>
            </p>
          </div>
          <div class="contact-info-container">
            <img
              src="./assets/linkedin.png"
              alt="LinkedIn icon"
              class="icon contact-icon"
            />
            <p>
              <a href="https://www.linkedin.com/in/daniel-patino-207156208/">
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </section>
      <footer>
        <nav>
          <div class="nav-links-container">
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
        <p>Copyright &#169; 2024 Daniel Patino. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default MainView;
