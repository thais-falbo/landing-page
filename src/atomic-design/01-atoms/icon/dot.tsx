import styled from "styled-components";
import { color } from "atomic-design-types";

interface Props {
  width: string;
  height: string;
  color?: color;
}

const Dot = styled.span<Props>`
  display: inline-block;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ color, theme }) => color || theme.colors.primary};
  border-radius: 50%;
`;

export default Dot;
