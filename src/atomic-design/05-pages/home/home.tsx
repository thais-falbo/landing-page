import React, { FC } from "react";
import HomeTemplate from "../../04-templates/home";
import Capsule from "../../../assets/images/capsule.jpg";
import Theme from "../../../utils/styled/theme";

const props: React.ComponentProps<typeof HomeTemplate> = {
  header: {
    links: ["blog", "popular", "archive", "about"],
    linkColor: "white",
    backgroundColor: Theme.colors.primary,
  },
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

const Home: FC = () => <HomeTemplate header={props.header} hero={props.hero} />;

export default Home;
