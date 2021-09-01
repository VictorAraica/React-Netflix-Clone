import React, { useState } from "react";

// import { MdOndemandVideo, MdVideoLabel, MdMusicVideo } from "react-icons/md";
import { MdMusicVideo } from "react-icons/md";

export default function SettingsDropdown({
  mouseEnterDropdownContainer,
  mouseLeavesDropdownContainer,
}) {
  const dropdownContainerClass =
    "absolute top-12 -right-4 bg-black bg-opacity-95 w-80 p-8 rounded-xl transition-all";

  const topDivClass = "flex flex-row justify-between items-center mb-4";
  const topLeftClass = "flex flex-row items-center";
  const iconClass = "text-gray-200 text-2xl mr-5";
  const titleClass = "text-white text-3xl font-bold";
  const buttonDivClassTemplate =
    "w-12 h-7 bg-indigo-500 hover:bg-opacity-70 rounded-full relative cursor-pointer transition-all";
  const buttonCircleClassTemplate =
    "w-6 h-6 bg-white rounded-full relative top-1/2 transform transition-all -translate-y-2/4 translate-x-72"; //translate-x-72 porque en la configuracion puse que fuera 1.375rem

  const [buttonDivClass, setbuttonDivClass] = useState(buttonDivClassTemplate);

  const [buttonCircleClass, setButtonCircleClass] = useState(
    buttonCircleClassTemplate
  );

  const textClass = "text-white font-medium text-lg";

  const avancesActiveText = "Los avances se reproducirán mientras navegas";
  const avancesDisabledText = "Los avances no se reproducirán mientras navegas";

  const [avances, setAvances] = useState(true);

  const buttonClick = () => {
    let buttonCircleClassTemp = buttonCircleClassTemplate;
    let buttonDivClassTemp = buttonDivClassTemplate;

    if (avances) {
      buttonCircleClassTemp = buttonCircleClassTemp.replace(
        "translate-x-72",
        "translate-x-0.5"
      );
      buttonDivClassTemp = buttonDivClassTemp.replace(
        "bg-indigo-500 hover:bg-opacity-70",
        "bg-white bg-opacity-20 hover:bg-opacity-40"
      );
    }

    setButtonCircleClass(buttonCircleClassTemp);
    setbuttonDivClass(buttonDivClassTemp);
    setAvances(!avances);
  };

  return (
    <div
      className={dropdownContainerClass}
      onMouseEnter={mouseEnterDropdownContainer}
      onMouseLeave={mouseLeavesDropdownContainer}
    >
      <div className={topDivClass}>
        <div className={topLeftClass}>
          <MdMusicVideo className={iconClass} />
          <h2 className={titleClass}>Avances</h2>
        </div>
        <div className={buttonDivClass} onClick={buttonClick}>
          <div className={buttonCircleClass}></div>
        </div>
      </div>
      <h3 className={textClass}>
        {avances ? avancesActiveText : avancesDisabledText}
      </h3>
    </div>
  );
}
