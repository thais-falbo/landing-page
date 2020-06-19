import styled from "styled-components";
import { columns } from "atomic-design-types";

export const Container = styled.div`
  max-width: ${({ theme }) => theme.grid.container.width};
  margin: 0 auto;
  padding: 0 2rem;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    max-width: 100%;
    margin: 0;
  }
`;

export const Row = styled.div`
  display: grid;

  ${({ theme: { breakpoints, grid } }) => `
    grid-gap: ${grid.gap};

    @media only screen and (max-width: ${breakpoints.sm}px) {
      grid-template-columns: repeat(1, 1fr);
    }

    @media only screen and (min-width: ${breakpoints.sm}px) and (max-width: ${breakpoints.lg}) {
      grid-template-columns: repeat(8, 1fr);
    }

    @media only screen and (min-width: ${breakpoints.lg}px) {
      grid-template-columns: repeat(${grid.columns.quantity}, minmax(0, ${grid.columns.width}));
    }
  `}
`;

interface ColumnProps {
  sm?: columns;
  md?: columns;
  lg?: columns;
  xl?: columns;
}

export const Column = styled.div<ColumnProps>`
  /* width: 100%; */

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    ${({ sm }) => sm && `grid-column: span ${sm}`};
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    ${({ md }) => md && `grid-column: span ${md}`};
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    ${({ lg }) => lg && `grid-column: span ${lg}`};
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.xl}px) {
    ${({ xl }) => xl && `grid-column: span ${xl}`};
  }
`;
