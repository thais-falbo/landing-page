import styled from "styled-components";
import { headingLevel, weight } from "atomic-design-types";

interface Props {
  level: headingLevel;
  color: string | undefined;
  weight: weight;
  uppercase: boolean;
}

export const StyledHeading = styled.div<Props>`
  font-size: ${({ level }) => 8 / level}rem;
  font-family: ${({ theme }) => theme.fonts.poppins.name};
  font-weight: ${({ theme, weight }) => theme.fonts.poppins.weigths[weight]};

  ${({ uppercase }) => uppercase && `text-transform: uppercase;`};

  margin: 0;
  color: ${({ theme, color }) => color || theme.colors.darkBlue};
`;
