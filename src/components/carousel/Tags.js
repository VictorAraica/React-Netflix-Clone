import React from "react";
import { BsDot } from "react-icons/bs";

export default function Tags({ tags }) {
  const container = `flex mx-3 mt-1 mb-3 relative`;
  const tagClass = `text-white font-semibold text-tags`;
  const dotClass = `text-gray-600 text-base inline`;
  return (
    <div className={container}>
      {tags.map((tag, index) => {
        return (
          <>
            <p className={tagClass} key={index}>
              {tag}

              {index === tags.length - 1 ? "" : <BsDot className={dotClass} />}
            </p>
          </>
        );
      })}
    </div>
  );
}
