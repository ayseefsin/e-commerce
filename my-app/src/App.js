import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const fnc = () => {
    toast("tıklandı");
  };
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="text-lime-400">love</h1>
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
      <button type="submit" onClick={fnc}>
        tıkla
      </button>
      <ToastContainer />
    </>
  );
}

export default App;
