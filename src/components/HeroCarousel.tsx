import React, { useState, useEffect } from "react";

const images = [
  "https://i.makeupstore.uz/2/2j/2jldrsp78pt7.jpg",
  "https://i.makeupstore.uz/g/gj/gj6gt4pnzhj7.jpg",
  "https://i.makeupstore.uz/d/dv/dvijbdrj3ggc.jpg",
];

const HeroCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval); 
  }, [currentIndex]);
  return (
    <div className="w-full">
      <div className="relative h-96 overflow-hidden bg-gray-200">
        <img
          src={images[currentIndex]}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out"
        />
        <div className="absolute inset-0 flex items-center justify-center ">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold"></h1>
            <p className="mt-4 text-lg"></p>
          </div>
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white p-4"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white p-4"
        >
          &#10095;
        </button>
      </div>

    </div>
  );
};

export default HeroCarousel;
