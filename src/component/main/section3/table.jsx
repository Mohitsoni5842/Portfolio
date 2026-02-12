import React from "react";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { motion } from "motion/react";

const Table = ({ title, skills }) => {
  return (
    <div className="data border-2 rounded-2xl border-white w-full max-w-sm p-4 sm:p-6 flex flex-col min-h-88">
      <motion.ul animate={{ rotate: 360 }} />

      {/* Top */}
      <div className="top flex flex-col sm:flex-row items-center gap-4">
        <div className="image w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
          <LiaLaptopCodeSolid className="text-white text-4xl sm:text-5xl md:text-7xl" />
        </div>

        <div
          className="skill text-lg sm:text-2xl md:text-4xl text-white 
                        flex items-center justify-center text-center"
        >
          {title}
        </div>
      </div>

      {/* Bottom */}
      <div
        className="bottom mt-6 flex-1 flex items-center justify-center 
                      text-white text-sm sm:text-base md:text-xl"
      >
        <div className="w-full text-center border-t border-white pt-4">
          <div className="skillslist flex flex-wrap justify-center items-center gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 border border-white rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
