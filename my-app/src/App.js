import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Header } from "./components/Header";
import { EditorsPick } from "./components/EditorsPick";

function App() {
  const fnc = () => {
    toast("tıklandı");
  };

  return (
    <>
      <Header />
      <EditorsPick />
      <ToastContainer />
    </>
  );
}

export default App;
