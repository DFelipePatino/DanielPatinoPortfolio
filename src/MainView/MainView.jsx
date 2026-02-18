import "./MainView.css";
import { Grow } from '@mui/material';
import { Fade } from '@mui/material';
import { useEffect, useState } from "react";
import "./mediaqueries.css";
import Nav from "../Components/Nav"
import MyNameIs from "../Components/MyNameIs"
import About from "../Components/About"
import Experience from "../Components/Experience"
import Projects from "../Components/Projects"
import Contact from "../Components/Contact"
import Footer from "../Components/Footer"
import LandingPage from "../Components/LandingPage"
import { dogsWakeUp } from "../ProjectsWakeUp/GetRequests"

function MainView() {


  const [menuOpen, setMenuOpen] = useState(false);
  const [menuOpen2, setMenuOpen2] = useState(false);
  const [menuOpen3, setMenuOpen3] = useState(false);
  const [isClosing2, setIsClosing2] = useState(false);
  const [isClosing3, setIsClosing3] = useState(false);
  const [tiltX, setTiltX] = useState(0);
  const [tiltY, setTiltY] = useState(0);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleMenu2 = () => {
    if (menuOpen2) {
      setIsClosing2(true);
      setTimeout(() => {
        setMenuOpen2(false);
        setIsClosing2(false);
      }, 1500);
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
    dogsWakeUp();
    if (menuOpen3) {
      setIsClosing3(true);
      setTimeout(() => {
        setMenuOpen3(false);
        setIsClosing3(false);
      }, 1500);
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

  function handleSkip() {
    setShowLanding(false);
    setShowOtherElemts(true);
    setTimeout(() => {
      setShowNav(true);
    }, 800);

  }

  const [showLanding, setShowLanding] = useState(false);
  const [showOtherElemts, setShowOtherElemts] = useState(false);
  const [showNav, setShowNav] = useState(false)

  const showOtherElemtsCountDown = 6200
  const hideLandingCountDown = showOtherElemtsCountDown - 1400

  useEffect(() => {

    const timer = setTimeout(() => {
      setShowLanding(true);
    }, 800);
    setTimeout(() => {
      setShowLanding(false)
    }, hideLandingCountDown)
    setTimeout(() => {
      setShowOtherElemts(true)
    }, showOtherElemtsCountDown)

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    dogsWakeUp()

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });
    }, 400);

    document.body.style.overflow = !showOtherElemts ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showOtherElemts]);

  const loadingShown = true;

  return (
    <div id="top">
      <Nav
        showOtherElemtsCountDown={showOtherElemtsCountDown}
        toggleMenu={toggleMenu}
        menuOpen={menuOpen}
        toggleMenu2b={toggleMenu2b}
        toggleMenu3b={toggleMenu3b}
        showNav={showNav}
        setShowNav={setShowNav}
      />

      {!showOtherElemts ?
        <Fade in={showLanding}
          {...(loadingShown ? { timeout: 1500 } : {})}
        >
          <div>
            <LandingPage handleSkip={handleSkip} />
          </div>
        </Fade>
        : null}


      <Fade in={showOtherElemts}
        {...(loadingShown ? { timeout: 1500 } : {})}
      >
        <div>
          <MyNameIs
            tiltX={tiltX}
            tiltY={tiltY}
            setTiltX={setTiltX}
            setTiltY={setTiltY}
          />
        </div>
      </Fade>

      <Grow in={showOtherElemts}
        {...(loadingShown ? { timeout: 1500 } : {})}
      >
        <div>
          <About />

          <Projects
            menuOpen3={menuOpen3}
            isClosing3={isClosing3}
            toggleMenu3={toggleMenu3}
            dogsWakeUp={dogsWakeUp}
          />

          <Experience
            menuOpen2={menuOpen2}
            isClosing2={isClosing2}
            toggleMenu2={toggleMenu2}
          />

          <Contact />

          <Footer
            toggleMenu2b={toggleMenu2b}
            toggleMenu3b={toggleMenu3b}
          />
        </div>
      </Grow>


    </div>
  );
}

export default MainView;
