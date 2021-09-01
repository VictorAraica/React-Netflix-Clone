import React from "react";
import { BsPlayFill } from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";

export default function Icons() {
  const playIconClass = `text-xlg`;

  const normalIconClass = `text-xlg text-white`;

  const rightIconContainerClass = `rounded-full inline-block p-1 inline-flex 
  justify-center border-2 text-white 
  cursor-pointer border-gray-700 hover:border-white`;

  const iconsContainerClass = `flex justify-between mx-3 my-3`;

  const leftIconsClass = `flex gap-2`;

  const playContainerClass = `bg-white hover:bg-gray-300 rounded-full 
  inline-block p-1.5 inline-flex justify-center cursor-pointer`;
  const normalIconContainerClass = `rounded-full inline-block p-1 
  inline-flex justify-center border-2 text-white 
  cursor-pointer border-gray-700 hover:border-white`;

  return (
    <div className={iconsContainerClass}>
      <div className={leftIconsClass}>
        <div className={playContainerClass}>
          <BsPlayFill className={playIconClass} />
        </div>
        <div className={normalIconContainerClass}>
          <GoPlus className={normalIconClass} />
        </div>
        <div className={normalIconContainerClass}>
          <AiOutlineLike className={normalIconClass} />
        </div>
        <div className={normalIconContainerClass}>
          <AiOutlineDislike className={normalIconClass} />
        </div>
      </div>
      <div className={rightIconContainerClass}>
        <IoIosArrowDown className={normalIconClass} />
      </div>
    </div>
  );
}
