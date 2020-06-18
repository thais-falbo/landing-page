import React, { FC } from "react";
import Hero from "../../03-organisms/hero";
import Header from "../../03-organisms/header";

interface Props {
  hero: React.ComponentProps<typeof Hero>;
  header: React.ComponentProps<typeof Header>;
}

const HomeTemplate: FC<Props> = ({ header, hero }) => (
  <>
    <Header {...header} />
    <Hero {...hero} />
    {/* Carousel */}
    {/* About */}
    {/* Footer */}
  </>
);

export default HomeTemplate;
