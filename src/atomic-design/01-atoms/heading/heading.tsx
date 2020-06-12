import React, { FC, memo } from "react";
import { StyledHeading } from "./styled";

interface Props {
  text: string;
  level: 1 | 2 | 3 | 4;
  uppercase?: boolean;
  color?: string | undefined;
  weight?: "bold" | "black";
}

const Heading: FC<Props> = ({
  text,
  level,
  color,
  weight = "bold",
  uppercase = false,
}) => {
  type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
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
