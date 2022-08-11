import React from "react";
import { About } from "../components/Landing/About";
import { Contact } from "../components/Landing/Contact";
import { Credits } from "../components/Landing/Credits";
import Footer from "../components/Footer/Footer.jsx";
import NavbarOut from "../components/Navbar/NavbarOut.jsx";

export const LandingAbout = () => {
  return (
    <>
      <NavbarOut />
      <About />
      <Credits />
      <Contact />
      <Footer />
    </>
  );
};
