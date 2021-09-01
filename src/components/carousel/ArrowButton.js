import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function Arrow({ right, onClick }) {
  const iconClass = `text-white text-4xl opacity-0 group-hover:opacity-100`;
  const containerClass = `flex justify-center items-center absolute z-10
  bg-netflixBlack bg-opacity-80 w-250 h-full hover:bg-opacity-75 
  cursor-pointer
  ${right ? "top-0 right-0" : ""}`;

  return (
    <div className={containerClass} onClick={onClick}>
      {right ? (
        <IoIosArrowForward className={iconClass} />
      ) : (
        <IoIosArrowBack className={iconClass} />
      )}
    </div>
  );
}
