import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./Component/Index";

import TextForm from "./Component/TextForm";
import Age from "./Component/Age";
import Counter from "./Component/Counter";
import About from "./Component/About";
import Details from "./Component/Details";
import Home from "./Component/Home";
import Footer from "./Component/Footer";
import Project from "./Component/Project";


import CarouselComponent from "./Component/Carousel";
function App() {
  return (
    <>
      <Router>
        <TextForm />
        <CarouselComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/age" element={<Age />} />
          <Route path="/counter" element={<Counter />} />
          <Route
            path="/about"
            element={
              <About/>
            }
          />
          <Route path="/picture" element={<Index />} />
          <Route path="/details" element={<Details />} />
          <Route path="/project" element={<Project />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
