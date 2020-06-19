import styled from "styled-components";

export const StyledAbout = styled.section`
  margin: 5rem 0;
`;

export const StyledAboutImgWrapper = styled.div`
  width: 36rem;
  height: 36rem;
  border-radius: 1rem;
  overflow: hidden;
  margin: 0;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    width: 100%;
    height: 30rem;
  }
`;
