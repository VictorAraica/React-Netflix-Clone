import React from "react";

import Link from "./NotificationsLink";

import seinfeld from "../../../images/seinfeld.jpg";
import cowboyBebop from "../../../images/cowboy-bebop.jpeg";
import friends from "../../../images/friends.jpg";
import bladeRunner from "../../../images/blade-runner2.jpg";

export default function NotificationsDropdown({
  mouseEnterDropdownContainer,
  mouseLeavesDropdownContainer,
}) {
  const containerClass =
    "absolute w-96 -right-8 top-12 border-t-2 border-white border-opacity-95";

  const notifications = [
    {
      seriesName: "seinfeld",
      title: "Continuar viendo Seinfeld",
      image: seinfeld,
      time: "Hace 1 semana",
    },
    {
      seriesName: "Cowboy Bebop",
      title: "Acompaña a Spike",
      image: cowboyBebop,
      time: "Hace 3 semanas",
    },
    {
      seriesName: "Friends",
      title: "Estreno Friends",
      image: friends,
      time: "Hace 1 mes",
    },
    {
      seriesName: "Blade Runner",
      title: "Continua viendo Blade Runner",
      image: bladeRunner,
      time: "Hace 1 mes",
    },
  ];

  return (
    <div
      className={containerClass}
      onMouseEnter={mouseEnterDropdownContainer}
      onMouseLeave={mouseLeavesDropdownContainer}
    >
      {notifications.map((serie, key) => (
        <Link key={key} details={serie} />
      ))}
    </div>
  );
}
