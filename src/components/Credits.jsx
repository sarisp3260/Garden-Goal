import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import Carousel from "../components/Carousel/Carousel.jsx";
import CarouselCard from "../components//Carousel/CarouselCard";
import "../components/Carousel/Carousel.css";

export const Credits = () => {
  const [activeIndex, setActiveIndex] = useState(0);
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
  return (
    <section id="credits">
      <h2 className="text-2xl font-extrabold sm:text-3xl  text-blueDark overflow-hidden text-center">
        <span className="relative inline-block before:absolute before:top-2/4 before:border-y-2 before:border-blueDark before:w-screen after:mx-8 after:my-0 after:right-full after:absolute after:top-2/4 after:border-y-2 after:border-blueDark after:w-screen before:mx-8 before:my-0 before:right-full after:left-full">
          Credits
        </span>
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
  );
};
