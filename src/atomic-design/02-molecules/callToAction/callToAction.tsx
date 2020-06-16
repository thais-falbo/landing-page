import React, { FC, memo } from "react";
import { StyledCtaTitle } from "./styled";
import Heading from "../../01-atoms/heading";
import Button from "../../01-atoms/button";
import Paragraph from "../../01-atoms/paragraph";
import Icon from "../../01-atoms/icon";

interface Props {
  headingText: string;
  paragraphText: string;
  color?: string | undefined;
  button: React.ComponentProps<typeof Button>;
}

const CallToAction: FC<Props> = ({
  headingText,
  paragraphText,
  color,
  button,
}) => (
  <>
    <StyledCtaTitle>
      <Heading text={headingText} color={color} level={1} uppercase />
      <Icon.Dot width="2rem" height="2rem" />
    </StyledCtaTitle>
    <Paragraph text={paragraphText} color={color} />
    <Button {...button} />
  </>
);

export default memo(CallToAction);
