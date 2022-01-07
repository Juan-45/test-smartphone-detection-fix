import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect, useCallback } from "react";

function App() {
  const [isMobile, setIsMobile] = useState();

  const checkIfIsMobile = useCallback(() => {
    try {
      window.document.createEvent("TouchEvent");
      setIsMobile(true);
    } catch (e) {
      setIsMobile(false);
    }
  }, []);

  useEffect(() => checkIfIsMobile(), [checkIfIsMobile]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {isMobile ? "Estas usando un celular" : "No estas usando un celular"}
        </p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
