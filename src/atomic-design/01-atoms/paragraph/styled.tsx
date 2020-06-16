import styled, { DefaultTheme } from "styled-components";
import { size } from "atomic-design-types";

interface Props {
  color: string | undefined;
  size: size;
  theme: DefaultTheme;
}

export const StyledParagraph = styled.p<Props>`
  color: ${({ color, theme }) => color || theme.colors.darkBlue};
  line-height: 1.6;

  font-family: ${({ theme }) => theme.fonts.poppins.name};
  font-weight: ${({ theme }) => theme.fonts.poppins.weigths.normal};
  font-size: ${({ size }) =>
    (size === "small" && 1.6) ||
    (size === "normal" && 1.8) ||
    (size === "large" && 2.2)}rem;
`;
