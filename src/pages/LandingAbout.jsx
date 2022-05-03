import React from "react";
import { Navbar } from "../components/Navbar/Navbar.jsx";
import { About } from "../components/Landing/About";
import { Contact } from "../components/Landing/Contact";
import { Credits } from "../components/Landing/Credits";
import Footer from "../components/Footer/Footer.jsx";

export const LandingAbout = () => {
  return (
    <>
      <Navbar />
      <About />
      <Contact />
      <Credits />
      <Footer />
    </>
  );
};
