import React from "react";

export default function ExploreDropdown({
  mouseEnterDropdownContainer,
  mouseLeavesDropdownContainer,
  dropdownProps,
}) {
  const containerClass =
    "absolute  left-1/2 w-64 top-14 border-t-2 border-white border-opacity-95 transform -translate-x-1/2";

  const linkContainer =
    "flex justify-center bg-black bg-opacity-80 text-white py-3 items-center border-r border-b border-l border-gray-200 border-opacity-50 transition-colors hover:bg-opacity-80 hover:bg-gray-600";

  return (
    <div
      className={containerClass}
      onMouseEnter={mouseEnterDropdownContainer}
      onMouseLeave={mouseLeavesDropdownContainer}
    >
      {dropdownProps.map((link, key) => {
        return (
          <a href="/" key={key} className={linkContainer}>
            {link.name}
          </a>
        );
      })}
    </div>
  );
}
