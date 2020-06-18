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
  about: {
    text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.\n\nIn enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
    `,
    imageAlt: "Capsule",
    imageSrc: Capsule,
  },
};

const Home: FC = () => (
  <HomeTemplate header={props.header} hero={props.hero} about={props.about} />
);

export default Home;
