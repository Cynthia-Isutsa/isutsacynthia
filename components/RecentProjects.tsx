import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Image from 'next/image';
import { FaLocationArrow } from "react-icons/fa";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A selection of <span className="text-gold">Recent Projects</span>
      </h1>
      <div className="flex flex-wrap justify-center items-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects?.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="lg:min-h-[32.5rem] sm:h-[41rem] h-[32rem] sm:w-[570px] flex items-center justify-center w-[80vw]"
          >
            <PinContainer title={link} href={link}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img src="/bg.png" alt="bg" />
                </div>
                <img src={img} alt={title} className="z-10 absolute bottom-0" />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 ">
                {title}
              </h1>
              
              <p className="lg:font-normal text-sm font-light text-gray-500 line-clamp-2">
                {des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists?.map((icon, index) => (
                    <div 
                    key={icon} 
                    className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center" 
                    style={{ transform: `translateX(-${5 * index * 2}px)` }}

                    >
                      <Image
                        src={icon}
                        alt="icon image"
                        width={48}
                        height={48}
                        className="w-12 h-12"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center">
                    <p className="text-sm lg:text-xl md:text-xs  flex text-gold">Check Out Live Site</p>
                    <FaLocationArrow className="ms-3" color = "gold"/>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
