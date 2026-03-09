import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-8 items-center justify-between">
        {/* Left */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">
            <a href="header.jsx" className="text-white hover:text-gray-300">
              Mohit Verma
            </a>
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            Frontend Developer • React • Tailwind
          </p>
        </div>

        {/* Middle */}
        <div className="flex gap-6 text-gray-400 text-sm font-semibold">
          <span className="hover:text-white cursor-pointer">// Home</span>
          <span className="hover:text-white cursor-pointer">// Work</span>
          <span className="hover:text-white cursor-pointer">// Skills</span>
          <span className="hover:text-white cursor-pointer">// Contact</span>
        </div>

        {/* Right */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/repos"
            className="text-gray-400 hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mohit-soni-114033322/"
            className="text-gray-400 hover:text-white transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/_mohitsoni64737/"
            className="text-gray-400 hover:text-white transition"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-500 border-t border-gray-800 py-4">
        © {new Date().getFullYear()} Mohit Verma. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
