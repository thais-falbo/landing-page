import React from "react";
import Carousel from "./";
import Card from "../../02-molecules/card";

import InsideCapsule from "../../../assets/images/inside-capsule.jpg";
import Capsule from "../../../assets/images/capsule.jpg";
import Capsule2 from "../../../assets/images/capsule-2.jpg";
import Moon from "../../../assets/images/moon.jpg";
import Pluto from "../../../assets/images/pluto.jpg";
import Rocket from "../../../assets/images/rocket.jpg";

export default {
  title: "Organisms|Carousel",
  component: Carousel,
};

const paragraphEx = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus aliquet sapien.`;

const items = [
  {
    imageSrc: InsideCapsule,
    imageAlt: "Inside capsule",
    heading: "International Space Station",
  },
  {
    imageSrc: Capsule,
    imageAlt: "Capsule",
    heading: "My Capsule",
  },
  {
    imageSrc: Moon,
    imageAlt: "Moon",
    heading: "My Moon",
  },
  {
    imageSrc: Capsule2,
    imageAlt: "Other Capsule",
    heading: "Other Capsule",
  },
  {
    imageSrc: Pluto,
    imageAlt: "Pluto",
    heading: "My pluto",
  },
  {
    imageSrc: Rocket,
    imageAlt: "Rocket",
    heading: "My Rocket",
  },
];

const cards = items.map((item) => <Card {...item} paragraph={paragraphEx} />);

export const Example = () => <Carousel items={cards} />;
