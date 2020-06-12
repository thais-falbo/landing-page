import styled from "styled-components";

export const Container = styled.div`
  max-width: ${({ theme }) => theme.grid.container.width};
  margin: 0 auto;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    margin: 0;
    padding: 0 1rem;
  }
`;

export const Row = styled.div`
  display: grid;

  ${({ theme: { breakpoints, grid } }) => `
    grid-gap: ${grid.gap};

    @media only screen and (max-width: ${breakpoints.sm}) {
      grid-template-columns: repeat(1, 1fr);
    }

    @media only screen and (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.lg}) {
      grid-template-columns: repeat(8, 1fr);
    }

    @media only screen and (min-width: ${breakpoints.lg}) {
      grid-template-columns: repeat(${grid.columns.quantity}, minmax(0, ${grid.columns.width}));
    }
  `}
`;

interface ColumnProps {
  /** Column size */
  span?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

export const Column = styled.div<ColumnProps>`
  grid-column: span ${({ span }) => span || 1};

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    grid-column: span 1;
  }
`;
