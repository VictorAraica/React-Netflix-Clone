import React from "react";

export default function Age() {
  const ageClass = `border-l-4 border-gray-300 border-opacity-95 p-1 
     pl-2 bg-gray-900 bg-opacity-20 items-center
     flex justify-start justify-items-start text-white font-semibold
     text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl
     w-12 sm:w-16 md:w-20  xl:w-24`;

  return <div className={ageClass}>16+</div>;
}
