import styled from "styled-components";

interface Props {
  width: string;
  height: string;
  color?: string | undefined;
}

const Dot = styled.span<Props>`
  display: inline-block;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ color, theme }) => color || theme.colors.primary};
  border-radius: 50%;
`;

export default Dot;
