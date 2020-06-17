import styled from "styled-components";
import { darken } from "polished";
import { size } from "atomic-design-types";

interface Props {
  disabled: boolean;
  size: size;
  design: "default" | "text";
}

export const StyledBtn = styled.button<Props>`
  &,
  &:active {
    cursor: pointer;
    border: none;
    transition: all .2s ease-in-out;
    font-family: ${({ theme }) => theme.fonts.poppins.name};
    font-weight: ${({ theme }) => theme.fonts.poppins.weigths.normal};

    /* Design */
    ${({ design, theme }) =>
      (design === "default" &&
        `background-color: ${theme.colors.primary};
         color: white;
         border-radius: .8rem;`) ||
      (design === "text" &&
        `background-color: transparent;
         color: ${theme.colors.primary};`)}

    /* Disabled */
    ${({ disabled }) => disabled && `opacity: 0.5; cursor: not-allowed;`}

    /* Sizes */
    ${({ size }) =>
      (size === "small" && `font-size: 1rem; padding: 1rem 1.6rem;`) ||
      (size === "normal" && `font-size: 1.8rem; padding: 1.2rem 2rem;`) ||
      (size === "large" && `font-size: 3rem; padding: 1.4rem 2.4rem;`)}
  }

  /* Hover */
  &:hover {
    ${({ design, theme }) =>
      (design === "default" &&
        `background-color: ${darken(0.1, theme.colors.primary)}`) ||
      (design === "text" && `text-decoration: underline;`)}
  }
`;
