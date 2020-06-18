import React, { FC } from "react";
import Hero from "../../03-organisms/hero";
import Header from "../../03-organisms/header";
import About from "../../03-organisms/about";

interface Props {
  hero: React.ComponentProps<typeof Hero>;
  header: React.ComponentProps<typeof Header>;
  about: React.ComponentProps<typeof About>;
}

const HomeTemplate: FC<Props> = ({ header, hero, about }) => (
  <>
    <Header {...header} />
    <Hero {...hero} />
    {/* Carousel */}
    <About {...about} />
    {/* Footer */}
  </>
);

export default HomeTemplate;
