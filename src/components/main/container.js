import React from "react";
import ReproducirButton from "./ReproducirButton";
import InfoButton from "./InfoButton";
import mainImage from "../../images/your-name-main-4.jpg";
import titleImage from "../../images/your-name-title.png";
import BottomRight from "./BottomRight";

export default function container() {
  const containerClass = "relative flex w-screen flex-grow";
  const imageClass = "w-full relative";
  const fadeOut =
    "bg-gradient-to-t from-netflixBlack to-transparent h-2/6 w-screen absolute bottom-0";

  const bigContainerClass = "absolute self-center w-full h-full";
  const marginContainer = "w-11/12 h-full m-auto";
  const buttonsClass = "inline-flex mt-4";
  const descriptionClass =
    "text-white hidden xl:inline xl:text-xl font-sans font-semibold cursor-default";
  const dataContainer =
    "max-w-min inline-flex flex-col top-1/3 xl:top-1/4 relative";
  const titleClass = "w-2/3 xl:w-full";

  return (
    <div className={containerClass}>
      <img src={mainImage} alt="your name" className={imageClass} />;
      <div className={bigContainerClass}>
        <BottomRight />
        <div className={marginContainer}>
          <div className={dataContainer}>
            <img src={titleImage} alt="your name" className={titleClass} />
            <p className={descriptionClass}>
              Taki vive en Tokio y Mitsuha en un pequeño pueblo. Mientras
              duermen, intercambian cuerpos y comienzan a comunicarse entre
              ellos.
            </p>
            <span className={buttonsClass}>
              <ReproducirButton />
              <InfoButton />
            </span>
          </div>
        </div>
      </div>
      <div className={fadeOut}></div>
    </div>
  );
}
