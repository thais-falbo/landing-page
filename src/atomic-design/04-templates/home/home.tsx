import React, { FC } from "react";
import Hero from "../../03-organisms/hero";

interface Props {
  hero: React.ComponentProps<typeof Hero>;
}

const HomeTemplate: FC<Props> = ({ hero }) => (
  <>
    {/* Header */}
    <Hero {...hero} />
    {/* Carousel */}
    {/* About */}
    {/* Footer */}
  </>
);

export default HomeTemplate;
