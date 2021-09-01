import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";

export default function SearchButton() {
  const searchIconClass =
    "text-xl xl:text-2xl text-white cursor-pointer focus:outline-none pr-0.5";
  const searchDivClass =
    "flex items-center group focus-within:bg-black bg-opacity-90 focus-within:border border-white p-0.5 focus-within:w-56 xl:focus-within:w-60 w-6 xl:w-7 overflow-hidden transition-all duration-200";
  const searchEntryClass =
    "bg-black bg-opacity-80 text-white focus:outline-none w-full text-sm font-semibold";

  const [searchValue, setSearchValue] = useState("");

  const searchChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className={searchDivClass}>
      <button className={searchIconClass}>
        <BiSearch />
      </button>
      <input
        type="text"
        placeholder="Títulos, personas, géneros"
        value={searchValue}
        onChange={searchChange}
        className={searchEntryClass}
      />
    </div>
  );
}
