"use client";

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import Image from "next/image";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  // description,
  children,
  image,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  image?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white border border-white/[0.1] overflow-hidden relative",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={
            cn()
            // "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          }
        >
         {image && (
  <div className="flex flex-col h-full">
    {/* Upper part for the image */}
    <div className="flex-grow-0 h-1/3">
      <Image
        src={image}
        alt="icon image"
        layout="responsive"
        width={400}
        height={400}
        className="w-full h-full object-cover"
      />
      <br />
    </div>

    {/* Lower part for the title and children */}
    {/* <div className="w-full p-4 bg-white">
      <div className="font-sans text-lg lg:text-3xl font-bold">
        {title}
      </div>
      {children && (
        <div className="flex flex-wrap gap-2">
          {children}
        </div>
      )}
    </div> */}
  </div>
)}
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>
        </div>
        {children && <div className="flex flex-wrap gap-2 ">{children}</div>}
      </div>
    </div>
  );
};
