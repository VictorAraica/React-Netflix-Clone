import React from "react";
import PageIndex from "./PageIndex";
import { IoIosArrowForward } from "react-icons/io";

export default function Title({
  title,
  numPages,
  currentPage,
}) {
  const titleClass = `text-gray-100 font-semibold cursor-pointer
  text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl`;

  const iconClass = `transform relative -translate-x-25 group-hover:translate-x-0 
  transition-all duration-1000 
  sm:-bottom-0.5 md:top-0.5 lg:top-1 xl:top-1.5`;

  const containerClass = `w-300 group m-auto flex
  content-end relative`;

  const explorarClass = `transform group-hover:translate-x-4 
  transition-all duration-1000 text-gray-200 opacity-0 
  group-hover:opacity-100 cursor-pointer
  flex  font-semibold relative 
  top-1.5 sm:top-1.5 md:top-2 lg:-bottom-1.5 xl:-bottom-2
  text-xs sm:text-xs md:text-xs lg:text-sm xl:text-base`;

  return (
    <div className={containerClass}>
      <h2 className={titleClass}>{title}</h2>

      <p className={explorarClass}>
        Explorar Todos
        <IoIosArrowForward className={iconClass} />
      </p>
      <PageIndex
        numPages={numPages}
        currentPage={currentPage}
      />
    </div>
  );
}
