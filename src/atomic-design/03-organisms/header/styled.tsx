import styled from "styled-components";

// Header
interface HeaderProps {
  background: string;
}

export const StyledHeader = styled.header<HeaderProps>`
  z-index: 9999;
  position: fixed;
  width: 100%;
  background-color: ${({ background }) => background};
  height: 96px;
  color: white;
  transition: background-color 0.2s ease-in-out;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: auto;
  }
`;

// Nav
interface NavListProps {
  menuOpen: boolean;
  backgroundColor: string;
}

export const StyledNavList = styled.ul<NavListProps>`
  list-style-type: none;
  margin: 0;
  padding: 0;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    display: block;
    position: absolute;
    padding-top: 96px; /* header height */
    top: 0;
    right: 0;
    background-color: ${({ backgroundColor }) => backgroundColor};
    z-index: -1;
    width: 100vw;
    transition: all 0.2s ease-in-out;

    ${({ menuOpen }) =>
      menuOpen
        ? `
      height: 100vh;
      opacity: 1;
    `
        : `
    `}
  }
`;

export const StyledNavItem = styled.li`
  display: inline-block;

  button {
    text-transform: uppercase;
    letter-spacing: 0.1rem;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    display: block;
    text-align: center;
    margin-top: 3.5rem;

    button {
      font-size: 20px;
    }
  }
`;

// Burger menu
interface NavBurgerIconProps {
  menuOpen: boolean;
}

export const StyledNavBurgerIcon = styled.span<NavBurgerIconProps>`
  display: inline-block;
  position: relative;

  ${({ menuOpen }) => menuOpen && `transform: rotate(45deg);`}

  &,
  &:before,
  &:after {
    width: 32px;
    height: 4px;
    background-color: white;
    border-radius: 10px;
    transition: all 0.2s ease-in-out;
  }

  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
  }

  &:before {
    top: -10px;
    ${({ menuOpen }) => menuOpen && `transform: rotate(90deg); top: 0;`}
  }

  &:after {
    bottom: -10px;
    ${({ menuOpen }) => menuOpen && `transform: rotate(90deg); bottom: 0;`}
  }
`;
