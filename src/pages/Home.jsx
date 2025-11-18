import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import BookFeature from "../components/home/BookFeature.jsx";
import { getFeatureBooksApi } from "../features/book/bookApi.js";

const Home = () => {
  const [index, setIndex] = useState(0);
  const [featureBooks, setFeatureBooks] = useState({});

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const getFeatureBooks = async () => {
      const result = await getFeatureBooksApi();
      if (result?.status) {
        setFeatureBooks({
          mostBorrowed: result.mostBorrowedBooks,
          recentlyAdded: result.recentlyAddedBooks,
          mostRated: result.mostRatedBooks,
        });
      }
    };
    getFeatureBooks();
  }, []);
  return (
    <div className="d-flex flex-column flex-grow-1">
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
            <h3>Borrow with us!</h3>
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
      <BookFeature
        heading="Recent Books"
        bookList={featureBooks.recentlyAdded}
      />
      <BookFeature heading="Most Read" bookList={featureBooks.mostBorrowed} />
      <BookFeature heading="Recommended" bookList={featureBooks.mostRated} />
    </div>
  );
};

export default Home;
