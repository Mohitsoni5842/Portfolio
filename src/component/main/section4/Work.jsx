import React, { useState, useEffect } from "react";

const Footer = () => {
  const images = [
    "spotify.png",
    "weather.jpg",
    "invoice.jpeg",
    "periodic-table.jpg",
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="footer w-full py-16">
      <div className="main w-11/12 mx-auto flex flex-col items-center gap-10">
        {/* LEFT CONTENT */}
        <div className="w-full text-white text-center">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold">
            My Work
          </h1>

          <p className="mt-6 text-base md:text-lg lg:text-2xl font-medium text-gray-300 max-w-4xl mx-auto">
            I build responsive web applications using modern technologies like
            React, JavaScript, HTML, and CSS, with a strong focus on clean code,
            problem-solving, and user experience.
          </p>
        </div>

        <div
          className="relative w-full lg:w-11/12 
                h-64 sm:h-80 md:h-96 lg:h-screen

                overflow-hidden rounded-lg"
        >
          <div
            className="flex h-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {images.map((img, index) => (
              <div
                key={index}
                className="w-full h-10/12 shrink-0 
                   bg-cover bg-center bg-no-repeat
                   flex items-end justify-center group"
                style={{
                  backgroundImage: `url(src/component/main/section4/${img})`,
                }}
              >
                <button
                  className="mb-6 px-6 py-2 bg-black/70 text-white rounded-lg
          opacity-0 scale-90
          group-hover:opacity-100 group-hover:scale-100
          transition-all duration-300"
                >
                  View Project
                </button>
              </div>
            ))}
          </div>

          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-3 -translate-y-1/2
               bg-black/60 hover:bg-black/80
               text-white w-10 h-10 rounded-full
               flex items-center justify-center"
          >
            ❮
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-3 -translate-y-1/2
               bg-black/60 hover:bg-black/80
               text-white w-10 h-10 rounded-full
               flex items-center justify-center"
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
