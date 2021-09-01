import React from "react";

import HeaderDropdown from "./HeaderDropdown";
import ProfilesDropdown from "./dropdowns/ProfilesDropdown";
import SettingsDropdown from "./dropdowns/SettingsDropdown";
import SearchButton from "./SearchButton";
import NotificationsDropdown from "./dropdowns/NotificationsDropdown";

import { BiSlider } from "react-icons/bi";
import { AiOutlineGift } from "react-icons/ai";
import { BsFillBellFill, BsFillPersonFill } from "react-icons/bs";

export default function RightHeader({
  dropdownTimer,
  setDropdownTimer,
  dropdowns,
  setDropdowns,
}) {
  const rightHeader = "flex items-center";
  const rightIconClass =
    "text-xl xl:text-2xl text-white cursor-pointer ml-3 xl:ml-5 focus:outline-none";
  const rightDropdownIconClass =
    "text-xl xl:text-2xl text-white cursor-pointer focus:outline-none";

  return (
    <div className={rightHeader}>
      <SearchButton />

      <a href="/" className={rightIconClass}>
        <AiOutlineGift />
      </a>

      <HeaderDropdown
        name="notifications"
        dropdowns={dropdowns}
        setDropdowns={setDropdowns}
        icon={<BsFillBellFill className={rightDropdownIconClass} />}
        arrowIcon={false}
        DropdownTab={NotificationsDropdown}
        dropdownTimer={dropdownTimer}
        setDropdownTimer={setDropdownTimer}
      />

      <HeaderDropdown
        name="profiles"
        dropdowns={dropdowns}
        setDropdowns={setDropdowns}
        icon={<BsFillPersonFill className={rightDropdownIconClass} />}
        arrowIcon={true}
        DropdownTab={ProfilesDropdown}
        dropdownTimer={dropdownTimer}
        setDropdownTimer={setDropdownTimer}
      />

      <HeaderDropdown
        name="settings"
        dropdowns={dropdowns}
        setDropdowns={setDropdowns}
        icon={<BiSlider className={rightDropdownIconClass} />}
        arrowIcon={true}
        DropdownTab={SettingsDropdown}
        dropdownTimer={dropdownTimer}
        setDropdownTimer={setDropdownTimer}
      />
    </div>
  );
}
