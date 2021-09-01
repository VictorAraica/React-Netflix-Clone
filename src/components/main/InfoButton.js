import React from "react";
import { IoInformationCircleOutline } from "react-icons/io5";

export default function InfoButton() {
  const buttonClass = `font-sans ml-4 z-10
  text-xs sm:text-sm md:text-sm lg:text-base xl:text-xl
  h-8 sm:h-8 md:h-9 lg:h-11 xl:h-12
  px-3 sm:px-3 md:px-5 lg:px-5 xl:px-5
  flex justify-center justify-items-center 
  content-center items-center font-semibold text-white 
  bg-opacity-40 bg-gray-600 
  rounded cursor-pointer hover:bg-opacity-20`;

  const iconClass = `mr-2 
  text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl`;
  const textClass = "whitespace-nowrap transform -translate-y-0.5";

  return (
    <button className={buttonClass}>
      <IoInformationCircleOutline className={iconClass} />
      <span className={textClass}>Mas Información</span>
    </button>
  );
}
