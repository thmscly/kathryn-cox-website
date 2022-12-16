import React from "react";
import Home from "components/pages/Home";
import About from "components/pages/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "components/pages/Services";
import Contact from "components/pages/Contact";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
