import React from "react";
import Header from "./main/section1/header.jsx";
import Intro from "./main/section2/intro.jsx";
import Skill from "./main/section3/skill.jsx";
import Work from "./main/section4/Work.jsx";
import Contact from "./main/section5/Contact.jsx";
import Footer from "./main/section6/Footer.jsx";
const main = () => {
  return (
    <div className="main w-full h-full bg-[url('src/component/main/bg.jpeg')] bg-cover bg-center">
      <Header />
      <Intro />
      <Work />
      <Skill />
      <Contact />
      <Footer />
    </div>
  );
};

export default main;
