import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import CarouselSlick from "../Carousel/CarouselSlick";

import {MdSportsHandball} from "react-icons/md";

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
      
      <div className="flex justify-center items-center gap-3 uppercase text-3xl my-5 font-extrabold sm:text-4xl text-blueDark">
          Credits 
          <MdSportsHandball />
      </div>

      <div className='w-full my-10 flex justify-center items-center pt-5'>
        <div className='w-11/12 lg:w-10/12'>
          <CarouselSlick/>
        </div>
      </div>

    </section>
  );
};
