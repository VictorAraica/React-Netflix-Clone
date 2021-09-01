import React from "react";
import { IoReload } from "react-icons/io5";

export default function Reload() {
  const reloadContainerClass = `border-2 border-opacity-70 inline-block rounded-full border-white p-2 bg-white bg-opacity-0 hover:bg-opacity-20
    flex justify-center content-center items-center text-white cursor-pointer`;

  const reloadIconClass = `text-white 
    text-base sm:text-base md:text-lg lg:text-lg xl:text-xl`;

  return (
    <div className={reloadContainerClass}>
      <IoReload className={reloadIconClass} />
    </div>
  );
}
