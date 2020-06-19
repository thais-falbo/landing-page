import React, { FC, useState, useEffect } from "react";
import { StyledHero, StyledHeroContent } from "./styled";
import Theme from "../../../utils/styled/theme";

import Image from "../../01-atoms/image";
import Grid from "../../01-atoms/grid";
import Trending from "../../02-molecules/trending";
import CallToAction from "../../02-molecules/callToAction";

interface Props {
  image: { src: string; alt: string };
  cta: React.ComponentProps<typeof CallToAction>;
  trends: readonly [string, string, string];
  height?: string;
}

const Hero: FC<Props> = ({ image, cta, trends, height = "100vh" }) => {
  // The trending component is not shown in small screens, so we use a state
  // to watch the window size and decide if it's rendered or not
  const breakpoint: number = Theme.breakpoints.xl;
  const [isDesktop, setDesktop] = useState(window.innerWidth > breakpoint);

  const updateMedia = () => {
    setDesktop(window.innerWidth > breakpoint);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <StyledHero width="100vw" height={height}>
      {/* Image */}
      <Image
        {...image}
        height={height}
        width="100vw"
        mirror
        position="bottom"
      />

      {/* Content */}
      <StyledHeroContent>
        {/* Text */}
        <Grid.Container>
          <Grid.Row>
            <Grid.Column lg={6} sm={8}>
              <CallToAction {...cta} />
            </Grid.Column>
          </Grid.Row>
        </Grid.Container>

        {/* Trending */}
        {isDesktop && <Trending trends={trends} />}
      </StyledHeroContent>
    </StyledHero>
  );
};

export default Hero;
