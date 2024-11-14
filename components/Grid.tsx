import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { skills } from "@/data";
import Image from 'next/image';

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {skills.map((item) => (
          <BentoGridItem
            id={item.id}
            key={item.id}
            title={item.title}
            image={item.image}
            description={
              item.description}
            className={item.className}
          >
            {item.items.map((subItem, index) => (
              <div
                key={`${subItem.title}-${index}`}
                className="p-2 flex flex-col items-center"
              >
                <Image
                  src={subItem.icon}
                  alt={subItem.title}
                  width={48} 
                  height={48} 
                  className="w-12 h-12"
                />
                <p className="mt-2">{subItem.title}</p>
                <p className="text-sm text-gray-500">{subItem.level}</p>
              </div>
            ))}
          </BentoGridItem>
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
