import React from "react";
import "./Carousel.css";
import { useRef, useState, useEffect } from "react";
const Carousel = ({ activeIndex, setActiveIndex, children }) => {
  const carouselRef = useRef(null);
  const [carouselTranslate, setCarouselTranslate] = useState(null);

  useEffect(() => {
    console.log(activeIndex);
    const initialTranslateVal = carouselRef.current.offsetWidth / 4;
    const diffAmount = initialTranslateVal * 2;
    const translate =
      activeIndex === 0
        ? initialTranslateVal
        : initialTranslateVal - activeIndex * diffAmount;
    setCarouselTranslate(translate);
  }, [activeIndex]);

  return (
    <>
      <div
        className="carousel"
        ref={carouselRef}
        style={{ transform: `translateX(${carouselTranslate}px)` }}
      >
        {children}
      </div>
      <div className="dots">
        {children.map((child, i) => (
          <button
            key={i}
            className={`dot ${activeIndex === i ? "active" : ""}`}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>
    </>
  );
};

export default Carousel;
