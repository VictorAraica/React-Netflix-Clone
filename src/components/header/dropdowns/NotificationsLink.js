import React from "react";

export default function NotificationsLink({ details }) {
  const container =
    "flex justify-start bg-black bg-opacity-80 hover:bg-opacity-90 items-center border-r border-b border-l border-gray-200 border-opacity-50";
  const imageClass = "w-28 rounded-md m-4";
  const titleClass = "text-white font-medium";
  const timeClass = "text-gray-400 text-sm";

  return (
    <a href="/" className={container}>
      <img src={details.image} alt={details.name} className={imageClass} />
      <div>
        <h3 className={titleClass}>{details.title}</h3>
        <p className={timeClass}>{details.time}</p>
      </div>
    </a>
  );
}
