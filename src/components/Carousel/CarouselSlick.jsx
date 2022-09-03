import React, { useState } from 'react'
import Slider from "react-slick";
import { CgProfile } from "react-icons/cg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselSlick = () => {

    const team = [
        {
          id: 1,
          name: "Moises Ariza",
          role: "Project manager",
          description:
            "Formador en desarrollo Web Fullstack",
          picture: "https://hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1653345063099%2FsSfeqOyy4.jpg%3Fw%3D1000%26h%3D1000%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=3840&q=75",
        },
        {
          id: 2,
          name: "Enmanuel Pereira",
          role: "Backend Leader",
          description:
            "I'm a 24 years old guy and i'm looking for improving my development skills and also learn the professional workflow in a development team. Django + React = <3",
          picture: "https://avatars.githubusercontent.com/u/82061939?v=4",
        },
        {
          id: 3,
          name: "Sara Salas",
          role: "Frontend, UI UX",
          description:
            "A passionate full stack developer more frontend prefered stack MERN developer from Colombia",
          picture: "https://avatars.githubusercontent.com/u/75185314?v=4",
        },
        {
          id: 4,
          name: "Angie Ladino",
          role: "Frontend",
          description:
            "I am a business manager and Full Stack Developer",
          picture: "https://avatars.githubusercontent.com/u/95056296?v=4",
        },
        {
          id: 5,
          name: "Maria Jose Alba",
          role: "Frontend",
          description:
            "I handle languages like JavaScript, python and PHP. Here I will upload the projects that will allow me to be better every day in programming.",
          picture: "https://avatars.githubusercontent.com/u/70845200?v=4",
        },
        {
          id: 6,
          name: "Daniela Tobar",
          role: "Frontend, UI UX",
          description:
            "I'm a full stack developer with experience in projects especially with scrum methodology.",
          picture: "https://avatars.githubusercontent.com/u/88946723?v=4",
        },
        {
          id: 7,
          name: "Diego Botello",
          role: "Backend",
          description:
            "Mi interés en el desarrollo comenzó desde mi escuela, aprendiondo los conceptos basicos de programacion y creando algorimos sencillos y luego comencé mis sueños de ser un buen desarrollador en el futuro.",
          picture: "https://avatars.githubusercontent.com/u/47578861?v=4",
        },
        {
          id: 8,
          name: "Juliana Fajardo",
          role: "Project Manager",
          description:
            "Co-formadora en Educamás ! Desarrolladora Full Stack",
          picture: "https://avatars.githubusercontent.com/u/44068486?v=4",
        },
        {
          id: 9,
          name: "Lorena Guerrero",
          role: "Project Manager",
          description:
            "Coordinadora Académica y Formadora en Desarrollo web Full Stack | Desarrolladora Full Stack web | Experta en WordpressTech Lover",
          picture: "https://media-exp1.licdn.com/dms/image/C5603AQHq-KdpJqUOcA/profile-displayphoto-shrink_100_100/0/1618781550059?e=1667433600&v=beta&t=xa5Vpi3VEF_ZzLaSPdjFjhtXH4U66gvB_shEOGXEaOM",
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
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
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
                        <div className={`w-full h-full flex flex-col justify-between items-center bg-blueDark rounded-3xl py-8 px-4 ${index === activeIndex  ? "" : "opacity-50 scale-90"}`}>
                            <div className='flex flex-col items-center gap-2'>
                                <div>
                                    {card.picture !== null ? <img src={card.picture} className='w-28 h-28 rounded-full border-8 border-white'/> : <CgProfile className='text-white' size={120} /> }
                                </div>
                                <h2 className="text-2xl md:text-xl text-center font-bold text-white ">
                                    {card.name}
                                </h2>
                            </div>
                            <span className='text-base px-5 text-center font-bold'>{card.role}</span>
                            <p className="italic px-5 text-center text-sm md:text-base">
                                "{card.description}"
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