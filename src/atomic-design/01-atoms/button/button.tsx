import React, { FC, memo } from "react";
import { StyledBtn } from "./styled";
import { size, color } from "atomic-design-types";

interface Props {
  text: string;
  disabled?: boolean;
  size?: size;
  type?: "button" | "submit" | "reset";
  design?: "default" | "text";
  color?: color;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<Props> = ({
  text,
  disabled = false,
  size = "normal",
  type = "button",
  design = "default",
  color,
  onClick,
}) => (
  <StyledBtn
    onClick={onClick}
    disabled={disabled}
    size={size}
    type={type}
    design={design}
    color={color}
  >
    {text}
  </StyledBtn>
);

export default memo(Button);
