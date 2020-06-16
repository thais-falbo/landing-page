import React, { FC } from "react";
import HomeTemplate from "../../04-templates/home";
import Capsule from "../../../assets/images/capsule.jpg";

const props: React.ComponentProps<typeof HomeTemplate> = {
  hero: {
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
  },
};

const Home: FC = () => <HomeTemplate hero={props.hero} />;

export default Home;
