import React from "react";
import { useState, useEffect } from "react";
import Icons from "./Icons";
import Description from "./Description";
import Tags from "./Tags";

export default function Item({ data, itemStyle, moving, edge }) {
  const [containerStyle, setContainerStyle] = useState(itemStyle);
  const [descriptionStyle, setDescriptionStyle] = useState({
    opacity: `0`,
    visibility: `invisible`,
  });

  const [descriptionTimeout, setDescriptionTimeout] = useState();
  const [containerTimeout, setContainerTimeout] = useState();

  const imageClass = `cursor-pointer rounded transform`;

  const containerClass = `relative inline-block transform p-0.5
  transition-all duration-1000 ease-out rounded ${
    edge === "left"
      ? "origin-left"
      : edge === "right"
      ? "origin-right"
      : "origin-center"
  }`;

  const descriptionContainerClass = `flex absolute w-full flex-col 
  overflow-hidden duration-500 h-0 gap-1
  bg-netflixBlack cursor-pointer transition-all`;

  useEffect(() => {
    setContainerStyle(itemStyle);
  }, [itemStyle]);

  const mouseLeave = () => {
    clearTimeout(containerTimeout);
    clearTimeout(descriptionTimeout);

    setContainerTimeout(
      setTimeout(() => {
        setContainerStyle(itemStyle);
      }, 500)
    );

    setContainerStyle({ ...itemStyle, zIndex: "2" });
    setDescriptionStyle({
      opacity: `0`,
      visibility: `invisible`,
    });
  };

  const mouseEnter = () => {
    clearTimeout(containerTimeout);
    clearTimeout(descriptionTimeout);
    if (!moving) {
      setContainerTimeout(
        setTimeout(() => {
          setContainerStyle({
            padding: "0",
            transform: itemStyle.transform + " translateY(-20%) scale(1.6)",
            width: itemStyle.width,
            zIndex: "2",
            boxShadow: "0px 0px 15px 3px rgba(0,0,0,0.85)",
          });
        }, 500)
      );
      setDescriptionTimeout(
        setTimeout(
          () =>
            setDescriptionStyle({
              boxShadow: "0px 0px 15px 3px rgba(0,0,0,0.85)",
              opacity: `100`,
              visibility: `visible`,
              height: `auto`,
            }),
          500
        )
      );
    }
  };

  return (
    <div
      className={containerClass}
      style={containerStyle}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <img src={data.img} alt={data.title} className={imageClass} />

      <div
        className={descriptionContainerClass}
        style={descriptionStyle}
        onMouseEnter={mouseEnter}
      >
        <Icons />

        <Description
          age={data.age}
          percentage={data.percentage}
          duration={data.duration}
        />

        <Tags tags={data.tags} />
      </div>
    </div>
  );
}
