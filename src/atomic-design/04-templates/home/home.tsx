import React, { FC, ComponentProps } from "react";
import Hero from "../../03-organisms/hero";
import Header from "../../03-organisms/header";
import Carousel from "../../03-organisms/carousel";
import About from "../../03-organisms/about";

interface Props {
  header: ComponentProps<typeof Header>;
  hero: ComponentProps<typeof Hero>;
  carousel: ComponentProps<typeof Carousel>;
  about: ComponentProps<typeof About>;
}

const HomeTemplate: FC<Props> = ({ header, hero, carousel, about }) => (
  <>
    <Header {...header} />
    <Hero {...hero} />
    <Carousel {...carousel} />
    <About {...about} />
    {/* Footer */}
  </>
);

export default HomeTemplate;
