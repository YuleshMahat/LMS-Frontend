import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import BookFeature from "../components/home/BookFeature.jsx";

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="carousel"
      >
        <Carousel.Item>
          <img
            src="/images/image1.jpg"
            alt="First slide"
            className="carouselImages"
          />
          <Carousel.Caption>
            <h3>Burrow with us!</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="/images/image2.jpg"
            alt="Second slide"
            className="carouselImages"
          />
          <Carousel.Caption>
            <h3>Learn with us!</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://images.pexels.com/photos/2099266/pexels-photo-2099266.jpeg"
            alt="Third slide"
            className="carouselImages"
          />
          <Carousel.Caption>
            <h3>Grow with us!</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <BookFeature heading="Recent Books" />
      <BookFeature heading="Most Read" />
      <BookFeature heading="Recommended" />
    </>
  );
};

export default Home;
