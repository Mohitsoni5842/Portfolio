import React from "react";
import Table from "./table";
const skillsData = [
  {
    title: "Programming Languages",
    skills: ["Python", "C", "JavaScript"],
  },
  {
    title: "Development",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Soft Skills",
    skills: ["Communication", "Problem Solving", "Teamwork", "Adaptability"],
  },
];

const Skill = () => {
  return (
    <div className="skill w-full py-20">
      {/* Heading */}
      <div
        className="experties w-full text-4xl sm:text-5xl md:text-7xl font-bold 
        flex items-center justify-center text-white"
      >
        My Experties
      </div>

      {/* Tables */}
      <div className="centre w-full flex justify-center items-center mt-16">
        <div
          className="tables w-full max-w-7xl flex flex-col lg:flex-row 
          justify-center lg:justify-between items-center gap-10 px-6"
        >
          {skillsData.map((data, index) => (
            <Table key={index} title={data.title} skills={data.skills} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
