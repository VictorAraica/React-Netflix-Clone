import React, { useState, useEffect } from "react";
import LeftHeader from "./LeftHeader";
import RightHeader from "./RightHeader";

export default function Header() {
  const [scrollTop, setScrollTop] = useState(true);
  const [dropdownTimer, setDropdownTimer] = useState(0);
  const [dropdowns, setDropdowns] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setScrollTop(false);
      } else if (window.pageYOffset === 0) {
        setScrollTop(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const headerClass = `fixed w-full z-50 ${
    scrollTop
      ? "bg-gradient-to-b from-black to-transparent"
      : "bg-gradient-to-b from-black to-netflixBlack"
  } flex justify-center items-center transition ease-linear transition-all duration-500	z-50`;

  const containerClass = "w-11/12 m-auto flex justify-between";

  const leftLinks = [
    {
      name: "Series",
      href: "/",
    },
    {
      name: "Peliculas",
      href: "/",
    },
    {
      name: "Novedades populares",
      href: "/",
    },
    {
      name: "Mi lista",
      href: "/",
    },
  ];

  return (
    <header className={headerClass}>
      <div className={containerClass}>
        <LeftHeader
          links={leftLinks}
          dropdownTimer={dropdownTimer}
          setDropdownTimer={setDropdownTimer}
          dropdowns={dropdowns}
          setDropdowns={setDropdowns}
        />

        <RightHeader
          dropdownTimer={dropdownTimer}
          setDropdownTimer={setDropdownTimer}
          dropdowns={dropdowns}
          setDropdowns={setDropdowns}
        />
      </div>
    </header>
  );
}
