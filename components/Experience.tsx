import { workExperience } from "@/data";
import React from "react";
import { Button } from "./ui/MovingBorder";

const Experience = () => {
  return (
    <div className="py-20" id="experience">
      <h1 className="heading">
        My
        <span className="text-gold"> Work Experience</span>
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience?.map((experience) => (
          <Button
            key={experience.id}
            borderRadius="1.75rem"
            duration={Math.floor(Math.random() * 10000) + 10000}
            className="flex-1 text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="p-3 py-6 lg:items-center md:p-5 lg:p-10 gap-2 flex flex-col lg:flex-row">
              <img
                src={experience.thumbnail}
                alt={experience.title}
                className="w-16 lg:w-32 md:w-20"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {experience.title}
                </h1>
                <h3 className=" text-start font-bold lg:text-[16px] md:text-sm text-gray-500 capitalize line-clamp-1 ">
                  {experience.employer}
                </h3>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {experience.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
