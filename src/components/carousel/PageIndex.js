import React from "react";
import { HiOutlineMinusSm } from "react-icons/hi";

export default function PageIndex({ numPages, currentPage }) {
  const iconClass = `relative top-0.5`;
  const containerClass = `flex algin-center items-center absolute right-0 top-1`;

  let body = [];

  for (let i = 0; i < numPages; i++) {
    body.push(
      <HiOutlineMinusSm
        key={i}
        className={
          iconClass + (i === currentPage ? " text-white" : " text-gray-700")
        }
      />
    );
  }

  return <div className={containerClass}>{body}</div>;
}
