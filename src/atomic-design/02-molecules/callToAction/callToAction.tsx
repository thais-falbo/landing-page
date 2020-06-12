import React, { FC, memo } from "react";
import { StyledCtaTitle } from "./styled";
import Heading from "../../01-atoms/heading";
import Button from "../../01-atoms/button";
import Paragraph from "../../01-atoms/paragraph";
import Icon from "../../01-atoms/icon";

interface Props {
  headingText: string;
  paragraphText: string;
  button: {
    text: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  };
}

const CallToAction: FC<Props> = ({ headingText, paragraphText, button }) => (
  <>
    <StyledCtaTitle>
      <Heading text={headingText} color="white" level={1} uppercase />
      <Icon.Dot width="2rem" height="2rem" />
    </StyledCtaTitle>
    <Paragraph text={paragraphText} color="white" />
    <Button {...button} />
  </>
);

export default memo(CallToAction);
