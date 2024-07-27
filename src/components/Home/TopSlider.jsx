import React from "react";

// Array of local image paths
const images = [
  "/images/slider2.png",
  "/images/slider2.png",
  "/images/slider2.png"
];

const TopSlider = () => {
  return (
    <div className="margin-top-max">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div
              className={
                index === 0
                  ? "carousel-item slider active"
                  : "carousel-item slider"
              }
              key={index}
            >
              <img
                src={image}
                className="d-block w-100"
                alt={`Carousel Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default TopSlider;
