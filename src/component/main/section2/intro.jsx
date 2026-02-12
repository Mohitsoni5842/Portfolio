import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Intro = () => {
  const { scrollYProgress } = useScroll();

  const filter = useTransform(
    scrollYProgress,
    [0, 1],
    ["blur(0px)", "blur(10px)"],
  );

  return (
    <motion.div
      style={{ filter }}
      className="intro w-full min-h-screen flex justify-center items-center px-4"
    >
      <div className="intro w-full max-w-7xl flex flex-col justify-center items-center">
        {/* NAME */}
        <div className="namediv w-full flex flex-col items-center uppercase font-bold">
          <motion.div
            className="rolediv w-full flex items-center justify-center font-light 
            text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-white uppercase pt-20"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 3, ease: "easeOut" }}
          >
            Mohit Verma
          </motion.div>

          <motion.div
            className="rolediv w-full flex justify-center text-lg sm:text-xl md:text-3xl text-white uppercase mt-4 md:mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Frontend Developer
          </motion.div>
        </div>

        {/* SOCIAL */}
        <div className="role w-full mt-12 flex flex-col justify-center items-center">
          <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#ffffff] hover:text-white">
            As Featured is
          </div>

          <div className="social w-full max-w-xl mt-6 flex flex-wrap justify-center gap-8">
            <div className="text-xl sm:text-2xl md:text-3xl text-[#ffffff] hover:text-white cursor-pointer">
              LinkedIn
            </div>
            <div className="text-xl sm:text-2xl md:text-3xl text-[#ffffff] hover:text-white cursor-pointer">
              Instagram
            </div>
            <div className="text-xl sm:text-2xl md:text-3xl text-[#ffffff] hover:text-white cursor-pointer">
              X
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Intro;
