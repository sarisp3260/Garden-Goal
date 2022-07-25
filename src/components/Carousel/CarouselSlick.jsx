import React, { useState } from 'react'
import Slider from "react-slick";
import { CgProfile } from "react-icons/cg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselSlick = () => {

    const team = [
        {
          id: 1,
          name: "Lorem ipsum 1",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quam eros.",
          picture: "https://avatars.githubusercontent.com/u/75185314?v=4",
        },
        {
          id: 2,
          name: "Lorem ipsum 2",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quam eros.",
          picture: null,
        },
        {
          id: 3,
          name: "Lorem ipsum 3",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quam eros.",
          picture: null,
        },
        {
          id: 4,
          name: "Lorem ipsum 4",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quam eros.",
          picture: null,
        },
        {
          id: 5,
          name: "Lorem ipsum 5",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quam eros.",
          picture: "https://i.imgur.com/Xq2ZQZJ.jpg",
        },
      ];

    const settings = {
    dots: true,
    lazyload: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    autoplaySpeed: 4000,
    beforeChange: (current, next) => setActiveIndex(next),
    responsive: [
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    
    const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
        <Slider {...settings}>
            {team.map((card, index) => {
                return (
                    <div 
                    className="text-white px-5 h-96"
                    key={card.id}>
                        <div className={`w-full h-full flex flex-col justify-between items-center bg-blueDark rounded-3xl py-12 px-5
                        ${index === activeIndex  ? "" : "opacity-50 scale-90"}`}>
                            <div className='flex flex-col items-center gap-3'>
                                <div>
                                    {card.picture !== null ? <img src={card.picture} className='w-28 h-28 rounded-full border-8 border-white'/> : <CgProfile className='text-white' size={120} /> }
                                </div>
                                <h2 className="text-lg md:text-xl font-bold text-white ">
                                    {card.name}
                                </h2>
                            </div>
                            <p className="text-lg px-5 text-center text-white">
                                {card.description}
                            </p>
                        </div>
                    </div>
                )
            })}
        </Slider>
    </>
  )
}

export default CarouselSlick