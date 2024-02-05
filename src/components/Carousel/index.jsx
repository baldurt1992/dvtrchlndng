import { useState } from 'react';
import Image from "next/image";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ['/assets/safe.png','/assets/send.png', '/assets/safe.png'];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="carousel relative overflow-hidden w-full">
      <div className="carousel-inner flex">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item w-full flex-none ${
              index === currentIndex ? '' : 'hidden'
            }`}
          >
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              width={800}
              height={600}
              layout="responsive"
            />
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1"
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
