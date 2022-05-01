import React from "react";
import "./Carousel.css";
const CarouselCard = ({ active, children }) => {
  return (
    <div className={`carousel-card ${active ? "active" : ""}`}>{children}</div>
  );
};

export default CarouselCard;
