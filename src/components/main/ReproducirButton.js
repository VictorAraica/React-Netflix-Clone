import React from "react";
import { GrPlayFill } from "react-icons/gr";

export default function ReproducirButton() {
  const buttonClass = `font-sans z-10
  text-xs sm:text-sm md:text-sm lg:text-base xl:text-xl
  h-8 sm:h-8 md:h-9 lg:h-11 xl:h-12
  px-3 sm:px-3 md:px-5 lg:px-5 xl:px-5
  flex justify-center justify-items-center 
  content-center items-center font-semibold text-netflixBlack bg-gray-50 
  rounded cursor-pointer hover:bg-gray-200 hover:bg-opacity-95`;

  const iconClass = "mr-4";
  const textClass = "transform -translate-y-0.5";

  return (
    <button className={buttonClass}>
      <GrPlayFill className={iconClass} />
      <span className={textClass}>Reproducir</span>
    </button>
  );
}
