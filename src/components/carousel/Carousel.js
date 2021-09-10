import React from "react";
import { useState, useEffect } from "react";
import Item from "./Item";
import ArrowButton from "./ArrowButton";
import Title from "./Title";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function Carousel({ title, info, zIndex }) {
  // w-300 es w-92%
  const itemsContainerClass = "w-300 relative m-auto whitespace-nowrap";
  const containerWithArrowClass = `group relative`;
  const containerWithTitle = `transform relative -translate-y-1/3 mb-8`;

  const [movingTimeout, setMovingTimeout] = useState(0);
  const [moving, setMoving] = useState(false);
  const [moveSteps, setMoveSteps] = useState(6);
  const [data, setData] = useState(info.concat(info));
  const [position, setPosition] = useState(0);
  const [page, setPage] = useState(0);

  const numPages = Math.ceil(info.length / moveSteps);

  const itemStyle = {
    transform: `translateX(${-100 * position}%)`,
    width: `${(1 / moveSteps) * 100}%`,
  };

  const handleResize = () => {
    const width = getWindowDimensions().width;
    let change = false;

    if (width > 1536) {
      setMoveSteps(6);
      change = true;
    } else if (width > 1280) {
      setMoveSteps(5);
      change = true;
    } else if (width > 850) {
      setMoveSteps(4);
      change = true;
    } else if (width > 600) {
      setMoveSteps(3);
      change = true;
    }

    if (change) {
      setPosition(0);

      setPage(0);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const rightClick = () => {
    setMoving(true);

    clearTimeout(movingTimeout);

    setMovingTimeout(
      setTimeout(() => {
        setMoving(false);
      }, 1050)
    );

    if ((page + 1) % numPages === numPages - 1) {
      setData(data.concat(info));
    }

    setPage(page + 1);

    if ((position % info.length) + moveSteps === info.length) {
      return setPosition(position + moveSteps);
    } else if ((position % info.length) + moveSteps * 2 > info.length) {
      return setPosition(
        position + (info.length - ((position % info.length) + moveSteps))
      );
    }

    return setPosition(position + moveSteps);
  };

  const leftClick = () => {
    setMoving(true);

    clearTimeout(movingTimeout);

    setMovingTimeout(
      setTimeout(() => {
        setMoving(false);
      }, 1050)
    );
    setPage(page - 1);
    if (position - moveSteps > 0) {
      return setPosition(position - moveSteps);
    } else if (position - moveSteps <= 0) {
      return setPosition(0);
    }

    return setPosition(position - moveSteps);
  };

  return (
    <div className={containerWithTitle} style={{ zIndex: zIndex }}>
      <Title title={title} numPages={numPages} currentPage={page % numPages} />
      <div className={containerWithArrowClass}>
        {position === 0 ? (
          ""
        ) : (
          <ArrowButton right={false} onClick={leftClick} />
        )}
        <div className={itemsContainerClass}>
          {data.map((item, index) => {
            return (
              <Item
                key={index}
                moving={moving}
                data={item}
                itemStyle={itemStyle}
                edge={
                  position === index
                    ? "left"
                    : position + moveSteps - 1 === index
                    ? "right"
                    : false
                }
              />
            );
          })}
        </div>
        <ArrowButton right={true} onClick={rightClick} />
      </div>
    </div>
  );
}
