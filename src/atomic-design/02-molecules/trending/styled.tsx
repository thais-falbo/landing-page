import styled from "styled-components";
import { transparentize } from "polished";

export const StyledTrending = styled.div`
  width: 100%;
  background-color: ${transparentize(0.3, "black")};
  padding: 2rem 0;

  & .item:not(:last-child) {
    border-right: 1px solid white;
  }
`;

export const StyledTitle = styled.div`
  text-align: right;
  padding-right: ${({ theme }) => theme.grid.gap};
  line-height: 1.2;
  padding-top: 3rem;
`;

export const StyledTrend = styled.article`
  padding-right: ${({ theme }) => theme.grid.gap};
  width: 100%;
`;
