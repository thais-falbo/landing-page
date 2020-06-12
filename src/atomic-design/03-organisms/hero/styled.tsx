import { StyledImg } from "../../01-atoms/image/styled";
import styled from "styled-components";

interface Props {
  width: string;
  height: string;
}

export const StyledHero = styled.div<Props>`
  position: relative;
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    content: "";
    background-color: black;
    opacity: 0.5;
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    &,
    ${StyledImg} {
      height: 80vh;
    }
  }
`;

export const StyledHeroContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  z-index: 1;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-end;
  align-content: stretch;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    align-items: center;
    align-content: stretch;
  }
`;
