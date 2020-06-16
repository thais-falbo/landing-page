import React, { FC, memo } from "react";
import { StyledHeading } from "./styled";
import { headingLevel, weight, color } from "atomic-design-types";

interface Props {
  text: string;
  level: headingLevel;
  uppercase?: boolean;
  color?: color;
  weight?: weight;
}

const Heading: FC<Props> = ({
  text,
  level,
  color,
  weight = "bold",
  uppercase = false,
}) => {
  type HeadingTag = "h1" | "h2" | "h3" | "h4";
  const tag = `h${level}` as HeadingTag;

  return (
    <StyledHeading
      as={tag}
      level={level}
      color={color}
      weight={weight}
      uppercase={uppercase}
    >
      {text}
    </StyledHeading>
  );
};

export default memo(Heading);
