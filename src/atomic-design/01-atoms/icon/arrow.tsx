import React, { FC, memo } from "react";
import styled from "styled-components";
import { color } from "atomic-design-types";
import { ReactComponent as ArrowLeft } from "../../../assets/svgs/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../../assets/svgs/arrow-right.svg";

// STYLES
interface WrapperProps {
  width: string;
  height: string;
  color?: color;
}

const ArrowWrapper = styled.div<WrapperProps>`
  &,
  svg {
    width: ${({ width }) => width};
    height: ${({ height }) => height};
  }

  svg g {
    fill: ${({ color }) => color || "white"};
  }
`;

// COMPONENT
interface ArrowProps {
  width: string;
  height: string;
  color?: color;
  direction: "left" | "right";
}

const Arrow: FC<ArrowProps> = ({ width, height, color, direction }) => (
  <ArrowWrapper width={width} height={height} color={color}>
    {direction === "left" ? <ArrowLeft /> : <ArrowRight />}
  </ArrowWrapper>
);

export default memo(Arrow);
