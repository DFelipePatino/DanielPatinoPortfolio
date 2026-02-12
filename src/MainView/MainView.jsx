import "./MainView.css";
import { useEffect, useState } from "react";
import "./mediaqueries.css";
import Nav from "../Components/Nav"
import MyNameIs from "../Components/MyNameIs"
import About from "../Components/About"
import Experience from "../Components/Experience"
import Projects from "../Components/Projects"
import Contact from "../Components/Contact"
import Footer from "../Components/Footer"
import { dogsWakeUp } from "../ProjectsWakeUp/GetRequests"

function MainView() {

  useEffect(() => {
    dogsWakeUp()
    console.log('dogsWakeUp just ran')
    return
  }, [])


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

  return (
    <div id="top">
      <Nav
        toggleMenu={toggleMenu}
        menuOpen={menuOpen}
        toggleMenu2b={toggleMenu2b}
        toggleMenu3b={toggleMenu3b}
      />

      <MyNameIs
        tiltX={tiltX}
        tiltY={tiltY}
        setTiltX={setTiltX}
        setTiltY={setTiltY}
      />

      <About />

      <Experience
        menuOpen2={menuOpen2}
        isClosing2={isClosing2}
        toggleMenu2={toggleMenu2}
      />

      <Projects
        menuOpen3={menuOpen3}
        isClosing3={isClosing3}
        toggleMenu3={toggleMenu3}
      />

      <Contact />

      <Footer
        toggleMenu2b={toggleMenu2b}
        toggleMenu3b={toggleMenu3b}
      />
    </div>
  );
}

export default MainView;
