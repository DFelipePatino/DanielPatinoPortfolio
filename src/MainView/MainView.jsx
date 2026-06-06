import "./MainView.css";
import { Grow, Slide } from '@mui/material';
import { Fade } from '@mui/material';
import { useEffect, useState, useRef } from "react";
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
import ThemeToggle from "../Components/ThemeToggle";
import { useTheme } from "../Context/ThemeContext";

function MainView() {

  const { isDarkMode, toggleTheme } = useTheme();


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
    setTimeout(() => {
      setShowSwitch(true);
    }, 2500);
    setTimeout(() => {
      setShowTooltip(true)
    }, 3500)
    setTimeout(() => {
      setShowTooltipFade(false)
    }, 3900)
  }

  const [showLanding, setShowLanding] = useState(false);
  const [showOtherElemts, setShowOtherElemts] = useState(false);
  const [showNav, setShowNav] = useState(false)
  const [showSwitch, setShowSwitch] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const [showTooltipFade, setShowTooltipFade] = useState(true)
  const [showSwitchTip, setShowSwitchTip] = useState(false)

  const showOtherElemtsCountDown = 6200
  const hideLandingCountDown = showOtherElemtsCountDown - 1400

  // Use a ref to keep track of the timeout ID so we can clean it up
  const timeoutRef = useRef(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if current position is greater than last position 
      // AND ensure they aren't just bouncing at the very top (0)
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        timeoutRef.current = setTimeout(() => {
          setShowSwitchTip(true);
        }, 2000);

        // 1. Immediately remove the scroll listener so this only triggers once
        window.removeEventListener('scroll', handleScroll);

        // 2. Start the 20-second countdown to turn it off
        timeoutRef.current = setTimeout(() => {
          setShowSwitchTip(false);
        }, 15000); // 20000 ms = 20 seconds
      }

      // Update the last scroll position
      lastScrollY = currentScrollY;
    };

    // Add the scroll listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Cleanup: remove listener and clear timeout if the component unmounts early
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []); // Empty dependency array ensures this setup only runs once on mount

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
    if (showOtherElemts) {
      setTimeout(() => {
        toggleTheme()
      }, 2000)
    }
    setTimeout(() => {
      setShowTooltip(true)
    }, showOtherElemtsCountDown + 4000)
    setTimeout(() => {
      setShowTooltipFade(false)
    }, showOtherElemtsCountDown + 4400)

  }, [showOtherElemts])


  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowSwitchTip(true);
  //   }, showOtherElemtsCountDown + 4000);
  //   setTimeout(() => {
  //     setShowSwitchTip(false);
  //   }, showOtherElemtsCountDown + 8000);
  // }, [])

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
        setShowSwitch={setShowSwitch}
        setShowNav={setShowNav}
      />

      {showOtherElemts && (
        <>

          <Slide direction="top" in={showSwitchTip} out={!showSwitchTip} timeout={600}
            style={{
              position: "fixed",
              right: "0rem",
              bottom: "0rem",
              zIndex: "9999",
              display: "inline-block",
              padding: "40px",
              justifyContent: "center"
            }}
          >
            <div style={{ padding: "40px", display: "flex", justifyContent: "center" }}>

              {/* UNIQUE TOOLTIP CONTAINER */}
              <div className="tooltip-container-v2">

                {/* Custom Text Inside the Tooltip Box */}
                <div className="tooltip-box-v2">
                  Switch profiles
                </div>



              </div>

            </div>
          </Slide>



          <Grow in={showSwitch} {...(loadingShown ? { timeout: 1000 } : {})}>
            <div className="floating-theme-toggle tooltip-wrapper">
              {/* Tooltip Content Elements */}
              {showTooltipFade ?
                <Fade in={showTooltip} {...(loadingShown ? { timeout: 1000 } : {})}>
                  <span className="tooltip-text">{isDarkMode ? "Developer" : "CS/CX"}</span>
                </Fade> :
                <span className="tooltip-text">{isDarkMode ? "Developer" : "CS/CX"}</span>
              }
              <ThemeToggle />
            </div>
          </Grow>
        </>
      )}

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
