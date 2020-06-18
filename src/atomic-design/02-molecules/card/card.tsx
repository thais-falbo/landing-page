import React, { FC } from "react";
import { StyledCard, StyledCardTxt } from "./styled";
import Image from "../../01-atoms/image";
import Heading from "../../01-atoms/heading";
import Paragraph from "../../01-atoms/paragraph";
import Theme from "../../../utils/styled/theme";

interface Props {
  imageSrc: string;
  imageAlt: string;
  heading: string;
  paragraph: string;
}

const Card: FC<Props> = ({ imageSrc, imageAlt, heading, paragraph }) => (
  <StyledCard>
    <Image src={imageSrc} alt={imageAlt} width="100%" height="30rem" />

    <StyledCardTxt>
      <Heading text={heading} level={4} />
      <Paragraph
        text={paragraph}
        color={Theme.colors.mediumGray}
        size="small"
      />
    </StyledCardTxt>
  </StyledCard>
);

export default Card;
