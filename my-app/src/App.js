import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Header } from "./components/Header";
import { EditorsPick } from "./components/EditorsPick";
import { HomePage } from "./page-components/HomePage";

function App() {
  const fnc = () => {
    toast("tıklandı");
  };

  return (
    <>
      <HomePage />
      <ToastContainer />
    </>
  );
}

export default App;
