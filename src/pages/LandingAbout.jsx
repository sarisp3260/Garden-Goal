import React from "react";
import { Navbar } from "../components/Navbar/Navbar.jsx";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Credits } from "../components/Credits";
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
