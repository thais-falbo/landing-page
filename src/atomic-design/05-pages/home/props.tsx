// Props to pass to Home Page
import React from "react";
import Theme from "../../../utils/styled/theme";
import HomeTemplate from "../../04-templates/home";
import Card from "../../02-molecules/card";
import InsideCapsule from "../../../assets/images/inside-capsule.jpg";
import Capsule from "../../../assets/images/capsule.jpg";
import Capsule2 from "../../../assets/images/capsule-2.jpg";
import Moon from "../../../assets/images/moon.jpg";
import Pluto from "../../../assets/images/pluto.jpg";
import Rocket from "../../../assets/images/rocket.jpg";

const header = {
  links: ["blog", "popular", "archive", "about"],
  linkColor: "white",
  backgroundColor: Theme.colors.primary,
};

const hero = {
  image: {
    src: Capsule,
    alt: "Capsule",
  },
  cta: {
    headingText: "Space",
    paragraphText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie elit at lacus…",
    button: {
      text: "Click",
      onClick: () => console.log("Button clicked!"),
    },
    color: "white",
  },
  trends: Array(3).fill(
    "Lorem ipsum dolor sit amet, consectetuer adipiscing ligula eget dolor."
  ) as [string, string, string],
};

// Carousel cards
const cardParagraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus aliquet sapien.`;

const cardsContents = [
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

const carousel = {
  items: cardsContents.map((content) => (
    <Card {...content} paragraph={cardParagraph} />
  )),
};

const about = {
  text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.\n\nIn enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
  `,
  imageAlt: "Capsule",
  imageSrc: Capsule,
};

const footer = {
  text: "© 2016 Created by Joyjet Digital Space Agency",
};

const props: React.ComponentProps<typeof HomeTemplate> = {
  header,
  hero,
  carousel,
  about,
  footer,
};

export default props;
