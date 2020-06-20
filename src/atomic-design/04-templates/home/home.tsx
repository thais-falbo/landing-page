import React, { FC, ComponentProps } from "react";
import Hero from "../../03-organisms/hero";
import Header from "../../03-organisms/header";
import Carousel from "../../03-organisms/carousel";
import About from "../../03-organisms/about";
import Footer from "../../03-organisms/footer";

interface Props {
  header: ComponentProps<typeof Header>;
  hero: ComponentProps<typeof Hero>;
  carousel: ComponentProps<typeof Carousel>;
  about: ComponentProps<typeof About>;
  footer: ComponentProps<typeof Footer>;
}

const HomeTemplate: FC<Props> = ({ header, hero, carousel, about, footer }) => (
  <>
    <Header {...header} />
    <Hero {...hero} />
    <Carousel {...carousel} />
    <About {...about} />
    <Footer {...footer} />
  </>
);

export default HomeTemplate;
