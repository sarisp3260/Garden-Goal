import React from "react";
import { useState, useEffect, useRef } from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Carousel from "./Carousel/Carousel.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { BsFacebook, BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import CarouselCard from "./Carousel/CarouselCard";
import "./About.css";
import "./Carousel/Carousel.css";
import { CgProfile } from "react-icons/cg";
const About = () => {
  const team = [
    {
      id: 1,
      name: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quam eros.",
      picture: <CgProfile size={120} />,
    },
    {
      id: 2,
      name: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quam eros.",
      picture: <CgProfile size={120} />,
    },
    {
      id: 3,
      name: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quam eros.",
      picture: <CgProfile size={120} />,
    },
    {
      id: 4,
      name: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quam eros.",
      picture: <CgProfile size={120} />,
    },
    {
      id: 5,
      name: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quam eros.",
      picture: <CgProfile size={120} />,
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <Navbar />

      <section
        className="grid grid-cols-1 place-items-center gap-5 px-4 py-5 md:grid-cols-2 md:px-10"
        id="about"
      >
        <div className="plant-img">
          <img
            className=" w-52 md:w-64"
            src="https://dsm01pap001files.storage.live.com/y4mcjWVgrMqk6BdNj9Upook51l3yFsxG47PaGBOzAqfBgWlhdgBB4yHWI0-TOaNdeIvFTrW4We2DyXD3lE8JagmpU3BOAjbY1ZKpZXymhvZZVBUDqwL7EbryaRxmK1qvqFIh8qhovvy4yhTeHZkoepSTjwrjtKsOTvO9EFVgSbbI_nSzp08ux3zbTNaQXe-gwrA?width=859&height=1385&cropmode=none"
            alt=""
          />
        </div>
        <div className="text-about flex flex-col gap-5 lg:gap-10 items-center">
          <h1 className="text-2xl font-extrabold sm:text-3xl  text-blueDark">
            GARDEN GOAL
          </h1>
          <p className="text-lg">
            Garden Goal was born from the idea of helping to centralize the
            information about the individual competencies of each student and
            their development in each one of them. Likewise, to carry out and
            evaluate this process in an interactive way. In the same way, it
            seeks the incentive to acquire new skills through logic challenges.
          </p>
          <button className="btn-primary w-1/2">Learn More</button>
        </div>
      </section>
      <section id="contacts">
        <h2 className="text-2xl font-extrabold sm:text-3xl  text-blueDark decorated">
          <span>Contact</span>
        </h2>
        <div className="container grid grid-cols-2 place-items-center gap-9 ">
          <a
            href="https://www.facebook.com/somoseducamas/"
            target="_blank"
            className="rounded-full"
          >
            <BsFacebook size={80} />
          </a>
          <a href="https://www.instagram.com/somoseducamas/" target="_blank">
            <BsInstagram size={80} />
          </a>
          <a href="https://github.com/programateacademy" target="_blank">
            <BsGithub size={80} />
          </a>
          <a
            href="https://www.linkedin.com/company/educam%C3%A1s/?viewAsMember=true"
            target="_blank"
          >
            <BsLinkedin size={80} />
          </a>
        </div>
      </section>
      <section id="credits">
        <h2 className="text-2xl font-extrabold sm:text-3xl  text-blueDark decorated">
          <span>Credits</span>
        </h2>
        <div className="carousel-container">
          <Carousel activeIndex={activeIndex} setActiveIndex={setActiveIndex}>
            {team.map((card, i) => {
              return (
                <CarouselCard key={card.id} active={activeIndex === i}>
                  <div className="carousel-card-content">
                    <div>{card.picture}</div>
                    <h2 className="text-xl font-bold text-blueDark ">
                      {card.name}
                    </h2>
                    <p className="text-center">{card.description}</p>
                  </div>
                </CarouselCard>
              );
            })}
          </Carousel>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
