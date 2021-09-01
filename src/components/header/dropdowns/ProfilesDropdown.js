import React from "react";
import { BsFillPersonFill } from "react-icons/bs";

export default function ProfilesDropdown({
  mouseEnterDropdownContainer,
  mouseLeavesDropdownContainer,
}) {
  const profilesDropdownContainerClass =
    "flex flex-col absolute bg-black top-12 -right-4 items-start w-52 border border-gray-400 bg-opacity-95";

  const profileLinkClass =
    "text-white w-full box-content hover:underline text-sm m-3 font-semibold flex items-center";

  const bottomLinksClass =
    "text-white w-full box-content hover:underline text-sm m-3 font-bold";

  const profileIconClass = "text-2xl text-white m-1";

  const profilesContainerClass =
    "flex flex-col w-full items-start border-b border-gray-400";

  const bottomLinksContainerClass = "flex flex-col w-full";

  return (
    <div
      className={profilesDropdownContainerClass}
      onMouseEnter={mouseEnterDropdownContainer}
      onMouseLeave={mouseLeavesDropdownContainer}
    >
      <div className={profilesContainerClass}>
        <a href="/" className={profileLinkClass}>
          <BsFillPersonFill className={profileIconClass} />
          <span className="">Faustino</span>
        </a>
        <a href="/" className={profileLinkClass}>
          <BsFillPersonFill className={profileIconClass} />
          <span className="">Ninoska</span>
        </a>
        <a href="/" className={profileLinkClass}>
          <BsFillPersonFill className={profileIconClass} />
          <span className="">Reina</span>
        </a>
        <a href="/" className={profileLinkClass}>
          <BsFillPersonFill className={profileIconClass} />
          <span className="">Daniel</span>
        </a>
        <a href="/" className={profileLinkClass}>
          Administrar perfiles
        </a>
      </div>
      <div className={bottomLinksContainerClass}>
        <a href="/" className={bottomLinksClass}>
          Cuenta
        </a>
        <a href="/" className={bottomLinksClass}>
          Centro de ayuda
        </a>
        <a href="/" className={bottomLinksClass}>
          Cerrar sesión en Netflix
        </a>
      </div>
    </div>
  );
}
