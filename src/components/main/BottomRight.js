import React from "react";
import Age from "./Age";
import Reload from "./Reload";

export default function BottomRight() {
  const containerClass = `absolute flex inline-flex content-center items-center gap-3 lg:gap-5 right-0 top-3/4 flex-row z-10 flex-nowrap`;
  return (
    <div className={containerClass}>
      <Reload />
      <Age />
    </div>
  );
}
