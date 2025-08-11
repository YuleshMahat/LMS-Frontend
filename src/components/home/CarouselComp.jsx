import React from "react";
import { Paper, Typography, Button } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const carouselImages = [
  { name: "library", url: "/images/library.jpg", description: "Library Hall" },
  { name: "books1", url: "/images/books1.jpg", description: "Books" },
  { name: "books", url: "/images/books.jpg", description: "Books" },
];
const CarouselComp = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <Slider {...settings}>
      {carouselImages.map((item, index) => {
        console.log(item.url);
        return (
          <div key={index} style={{ textAlign: "center" }}>
            <img src={item.url} alt={item.name} style={{ width: "100%" }} />
          </div>
        );
      })}
    </Slider>
  );
};

export default CarouselComp;
