import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MainView from "./MainView/MainView";
import { ThemeProvider } from "./Context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div>
        <MainView />
      </div>
    </ThemeProvider>
  );
}

export default App;
