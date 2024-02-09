import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Header } from "./components/Header";
import { EditorsPick } from "./components/EditorsPick";
import { HomePage } from "./page-components/HomePage";
import { Route, Routes } from "react-router-dom";
import { ProductListPage } from "./page-components/ProductListPage";
import { Footer } from "./components/Footer";
import { FooterEnd } from "./components/FooterEnd";
import { Brand } from "./components/Brand";
import { ProductPage } from "./page-components/ProductPage";
import { AboutPage } from "./page-components/AboutPage";

function App() {
  const fnc = () => {
    toast("tıklandı");
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/products/detail" element={<ProductPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Brand />
      <Footer />
      <FooterEnd />
      <ToastContainer />
    </>
  );
}

export default App;
