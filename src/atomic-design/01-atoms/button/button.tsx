import React, { FC, memo } from "react";
import { StyledBtn } from "./styled";

interface Props {
  text: string;
  disabled?: boolean;
  size?: "small" | "normal" | "large";
  type?: "button" | "submit" | "reset";
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<Props> = ({
  text,
  disabled = false,
  size = "normal",
  type = "button",
  onClick,
}) => (
  <StyledBtn onClick={onClick} disabled={disabled} size={size} type={type}>
    {text}
  </StyledBtn>
);

export default memo(Button);
