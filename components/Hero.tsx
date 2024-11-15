import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { TbFileCv } from "react-icons/tb";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
    const words = `Engineering Innovative Solutions with Precision`;
 
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw] " fill="red" />
        <Spotlight className="top-28 left-80  h-[80vh] w-[50vw]" fill="gold" />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex justify-center  relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-wide text-xs text-center text-blue-100 max-w-80">
            {/* © 2024 Cynthia Isutsa. All rights reserved. */}
          </h2>
          <TextGenerateEffect
            duration={2} 
            className="text-center text-[40px] md:text-5xl lg:text-6xl" 
            words={words}/>
            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl ">
                Hi, I&apos;m Cynthia Isutsa, a software engineer based in Nairobi.
            </p>
            <div className="flex justify-center mt-8 items-center md:gap-3 gap-6">
            <a href="https://docs.google.com/document/d/1NeTi-b0kdlGAyjbE_JUuEEzNVzkdB2FedjiNYi-u7Xw/edit?tab=t.0" target="_blank">
            <MagicButton 
             title="Download Resume"
             icon= {<TbFileCv className="text-2xl text-white pr-2" />}
             position="left"
            />
            </a>
            <a href="mailto:isutsacynthia@gmail.com">
          <MagicButton 
          title="Let's get in touch"
          icon={<FaLocationArrow />}
          position='right'
          />
        </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
