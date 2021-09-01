import React from "react";

export default function Description({ age, percentage, duration }) {
  const containerClass = `flex gap-2 content-center items-center mx-3`;
  const ageClass = `text-white border inline px-1 border-gray-700
    text-tiny`;
  const percentageClass = `text-green-500 font-semibold
    text-tiny`;
  const durationClass = `text-white font-semibold
    text-tiny`;
  const hdClass = `text-gray-500 text-smallest border inline border-gray-700 px-0.5
     sm: md: lg: xl:`;

  return (
    <div className={containerClass}>
      <p className={percentageClass}>{percentage}</p>
      <p className={ageClass}>{age}</p>
      <p className={durationClass}>{duration}</p>
      <p className={hdClass}>hd</p>
    </div>
  );
}
