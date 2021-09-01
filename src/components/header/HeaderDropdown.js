import React from "react";

import { RiArrowDownSFill } from "react-icons/ri";

export default function HeaderDropdown({
  name,
  dropdowns,
  setDropdowns,
  icon,
  arrowIcon,
  DropdownTab,
  dropdownTimer,
  setDropdownTimer,
  customAllDropdownClass = "",
  dropdownProps
}) {
  const rightIconArrowClass =
    "text-xl text-white cursor-pointer transition-transform transform group-hover:rotate-180";
  const dropdownIconSpanClass = "flex items-center";
  const allDropdownClass = "relative group ml-4 xl:ml-6";

  const resetDropdown = () => {
    setDropdowns({});
  };

  const activateDropdown = (name) => {
    let object = {};
    for (const key of Object.keys(dropdowns)) {
      object[key] = false;
    }
    object[name] = true;
    setDropdowns(object);
  };

  const mouseLeavesIcon = () => {
    setDropdownTimer(setTimeout(() => resetDropdown(), 300));
  };

  const mouseEnterIcon = () => {
    clearTimeout(dropdownTimer);
    activateDropdown(name);
  };

  const mouseEnterDropdownContainer = () => {
    clearTimeout(dropdownTimer);
  };

  const mouseLeavesDropdownContainer = () => {
    resetDropdown(false);
  };

  return (
    <div
      className={
        customAllDropdownClass ? customAllDropdownClass : allDropdownClass
      }
    >
      <span
        className={dropdownIconSpanClass}
        onMouseEnter={mouseEnterIcon}
        onMouseLeave={mouseLeavesIcon}
      >
        {icon}
        {arrowIcon ? <RiArrowDownSFill className={rightIconArrowClass} /> : ""}
      </span>
      {dropdowns[name] ? (
        <DropdownTab
          mouseEnterDropdownContainer={mouseEnterDropdownContainer}
          mouseLeavesDropdownContainer={mouseLeavesDropdownContainer}
          dropdownProps={dropdownProps}
        />
      ) : (
        ""
      )}
    </div>
  );
}
