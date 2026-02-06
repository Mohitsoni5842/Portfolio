import React from "react";

const Footer = () => {
  return (
    <div className="footer w-full py-16">
      <div className="main w-11/12 mx-auto flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-1/3 text-white">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold">
            My Work
          </h1>

          <p className="mt-6 text-base md:text-lg lg:text-2xl font-medium text-gray-300">
            I build responsive web applications using modern technologies like
            React, JavaScript, HTML, and CSS, with a strong focus on clean code,
            problem-solving, and user experience.
          </p>
        </div>

        {/* RIGHT GRID */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* CARD */}
          {[
            "spotify.png",
            "weather.jpg",
            "invoice.jpeg",
            "periodic-table.jpg",
          ].map((img, index) => (
            <div
              key={index}
              className="group h-56 md:h-64 lg:h-72 rounded-lg bg-cover  flex items-end justify-center"
              style={{
                backgroundImage: `url(src/component/main/section4/${img})`,
              }}
            >
              <button
                className="mb-4 px-6 py-2 bg-gray-800 text-white rounded-lg
                opacity-0 scale-90
                group-hover:opacity-100 group-hover:scale-100
                transition-all duration-300"
              >
                View Project
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
