import React, { FC, memo } from "react";
import { StyledParagraph } from "./styled";

interface Props {
  text: string;
  color?: string | undefined;
  size?: "small" | "normal" | "large";
}

const Paragraph: FC<Props> = ({ text, color, size = "normal" }) => (
  <StyledParagraph color={color} size={size}>
    {text}
  </StyledParagraph>
);

export default memo(Paragraph);
