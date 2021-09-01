import React from "react";
import logo from "../../images/netflix.png";
import HeaderDropdown from "./HeaderDropdown";
import ExploreDropdown from "./dropdowns/ExploreDropdown";

export default function LeftHeader({
  links,
  dropdownTimer,
  setDropdownTimer,
  dropdowns,
  setDropdowns,
}) {
  const logoClass = "h-16";
  const leftLinkClass =
    "text-gray-300 m-2 xl:m-3 text-xs xl:text-sm font-bold transition-colors hover:text-gray-500";
  const leftHeader = "flex items-center";
  const leftUlClass = "hidden ml-6 lg:flex";
  const inicioClass = `text-white m-2 xl:m-3 text-xs xl:text-sm font-bold transition-colors hover:text-gray-300`;

  const exploreLinkClass = "text-gray-100 text-xs font-bold transition-colors";

  return (
    <div className={leftHeader}>
      <a href="/">
        <img src={logo} className={logoClass} alt="netflix logo" />
      </a>
      <ul className={leftUlClass}>
        <li className={inicioClass}>
          <a href="/">Inicio</a>
        </li>
        {links.map((link, index) => (
          <li key={index} className={leftLinkClass}>
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>
      <HeaderDropdown
        name="explore"
        dropdowns={dropdowns}
        setDropdowns={setDropdowns}
        icon={
          <a href={"/"} className={exploreLinkClass}>
            Explorar
          </a>
        }
        arrowIcon={true}
        DropdownTab={ExploreDropdown}
        dropdownTimer={dropdownTimer}
        setDropdownTimer={setDropdownTimer}
        customAllDropdownClass="relative group ml-4 xl:ml-6 lg:hidden"
        dropdownProps={links}
      />
    </div>
  );
}
