import styled from "styled-components";

export const StyledCarousel = styled.div`
  margin: 15rem 0 10rem 0;
  position: relative;
  max-width: 100%;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin: 5rem 0 15rem 0;
  }

  .slick {
    &-slide {
      /* 
        Add padding to slide sides
        We need half value of the grid gap so 
        we can use it on the slides side paddings
      */
      box-sizing: border-box;
      padding: 0
        ${({ theme }) => parseInt(theme.grid.gap.replace("rem", "")) / 2}rem;
    }

    &-arrow,
    &-prev,
    &-next {
      width: 2rem;
      height: 4rem;

      /* Hide arrows */
      @media only screen and (max-width: ${({ theme }) =>
          theme.breakpoints.lg}) {
        display: none;
      }
    }

    &-prev,
    &-next {
      &::before {
        /* Remove the default arrow */
        content: "";
      }
    }

    &-prev {
      left: -3rem;
    }

    &-next {
      right: -3rem;
    }
  }
`;
