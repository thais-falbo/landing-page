import React, { FC, memo } from "react";
import styled from "styled-components";
import { color } from "atomic-design-types";
import { ReactComponent as LogoSvg } from "../../../assets/svgs/logo.svg";

interface Props {
  width: string;
  height: string;
  color?: color;
}

const LogoWrapper = styled.div<Props>`
  &,
  svg {
    width: ${({ width }) => width};
    height: ${({ height }) => height};
  }

  svg g {
    fill: ${({ color }) => color || "white"};
  }
`;

const Logo: FC<Props> = (props) => (
  <LogoWrapper {...props}>
    <LogoSvg />
  </LogoWrapper>
);

export default memo(Logo);
